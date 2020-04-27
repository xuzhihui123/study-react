/*
 * @Author: Lancer
 * @Date:2020/4/26
 * @Last Modified by:   Lancer
 * @Last Modified time: 2020/4/26
 */

//组件优化   不会一直调用render刷新  第一种 shouldComponentUpdate

import React, {Component} from 'react';

class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state={
       counter:1
    }
  }
  componentDidMount() {
    setInterval(()=>{
       this.setState({
         counter:1
       })
    },1000)
  }

  render() {
    return (
        <div>
          <h3>组件优化</h3>
          <Children counter={this.state.counter}/>
        </div>
    );
  }
}

class Children extends Component {
 
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const preCou = this.props.counter
    const curCou = nextProps.counter
    if(preCou === curCou){
      return false
    }else{
      return true
    }
  }

  render() {
    console.log(this.props.counter);
    return (
        <div>

        </div>
    )
  }
}

export default FormPage;