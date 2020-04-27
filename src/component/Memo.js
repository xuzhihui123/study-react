/*
 * @Author: Lancer
 * @Date:2020/4/27
 * @Last Modified by:   Lancer
 * @Last Modified time: 2020/4/27
 */

import React, {Component, memo} from 'react';

//memo的方式 只能用在函数组件 但是 也是浅的   不然也是失效

class Memo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      obj:{
        name:'134'
      }
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        counter: 1,
        obj:{
          name:'134'
        }
      })
    }, 1000)
  }

  render() {
    return (
        <div>
          <h3>memo的函数组件优化</h3>
          <Children counter={this.state.counter} obj={this.state.obj}/>
        </div>
    );
  }
}

const Children = memo((props) => {
  console.log('render');
  return (
      <div>

      </div>
  )
})


export default Memo;