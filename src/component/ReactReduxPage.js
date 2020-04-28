/*
 * @Author: Lancer
 * @Date:2020/4/28
 * @Last Modified by:   Lancer
 * @Last Modified time: 2020/4/28
 */

import React, {Component} from 'react';
import {connect} from 'react-redux'

//connect是一个高阶组件

class ReactReduxPage extends Component {
  render() {
    const {counter, add} = this.props
    console.log(counter);
    return (
        <div>
          <h3>ReactReduxPage</h3>
          <span>counter:{counter.age}</span>
          <button onClick={add}>add</button>
        </div>
    );
  }
}

//connect传两个参数  第一个参数是个回调函数，第二个参数是个对象  映射到组件的props

export default connect(
    //mapStateToProps
    state => {
      return {counter: state}
    },
    {
      add: () => {
        return {type: 'add'}
      }
    }
)(ReactReduxPage);