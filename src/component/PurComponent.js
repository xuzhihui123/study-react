/*
 * @Author: Lancer
 * @Date:2020/4/27
 * @Last Modified by:   Lancer
 * @Last Modified time: 2020/4/27
 */

import React, {Component, PureComponent} from 'react';


//PureComponent优化   只能是浅的优化  就像下面obj 传了 也是会失效

class PurComponent extends Component {
  constructor(props) {
    super(props);
    this.state={
      counter:1,
      obj:{
        name:'123'
      }
    }
  }
  componentDidMount() {
    setInterval(()=>{
       this.setState({
         counter:1,
         obj:{
           name:'123'
         }
       })
    },1000)
  }

  render() {
    return (
        <div>
          <h3>类的PureComponent优化</h3>
          <Children counter={this.state.counter} obj={this.state.obj}/>
        </div>
    );
  }
}


class Children extends PureComponent {
  render() {
    console.log('render');
    return (
        <div>

        </div>
    )
  }
}

export default PurComponent;