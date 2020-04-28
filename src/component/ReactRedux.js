/*
 * @Author: Lancer
 * @Date:2020/4/28
 * @Last Modified by:   Lancer
 * @Last Modified time: 2020/4/28
 */


import React, {Component} from 'react';

import store from '../store/CountStore'

class ReactRedux extends Component {
  componentDidMount() {
    // store.subscribe(()=>{
      // this.forceUpdate()   需要调用render跟新 第一种方法跟新
      // this.setState({})    需要调用render跟新 第二种方法跟新
      //第三种方式更新 在 index页面 直接跟新顶部
    // })
  }

  add=()=>{
    store.dispatch({type:'add'})
  }
  render() {
    console.log('render');
    return (
        <div>
          <h3>ReactRedux</h3>
          <span>counter:{store.getState()}</span>
          <button onClick={this.add}>add</button>
        </div>
    );
  }
}

export default ReactRedux;