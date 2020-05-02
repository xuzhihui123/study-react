/*
 * @Author: Lancer
 * @Date:2020/5/2
 * @Last Modified by:   Lancer
 * @Last Modified time: 2020/5/2
 */

import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class LoginPage extends Component {
  render() {
    console.log(this.props);
    const {login,isLogin} = this.props
    const to = this.props.location.state.redirect
    if(isLogin){
      return <Redirect to={to}/>
    }
    return (
        <div>
            <h3>我是登录</h3>
            <button onClick={login}>登录</button>
        </div>
    );
  }
}

export default connect(
    state=>{
      return {isLogin:state.isLogin}
    },
    {
      login:()=>{
        return {
          type:'loginSuccess'
        }
      }
    }
)(LoginPage);