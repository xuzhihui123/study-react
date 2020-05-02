/*
 * @Author: Lancer
 * @Date:2020/5/2
 * @Last Modified by:   Lancer
 * @Last Modified time: 2020/5/2
 */

import React, {Component} from 'react';
import {Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

class PrivateUserPage extends Component {
  render() {
    console.log(this.props);
    const {component:Com,isLogin,...res} = this.props
    return (
            <Route {...res} render={props=>{
              return isLogin ? <Com {...props}/> : <Redirect to={{
                pathname:'/login',
                state:{redirect:this.props.location.pathname}
              }}/>
            }}/>
    );
  }
}

export default connect(
    state=>{
      return {isLogin:state.isLogin}
    }
)(PrivateUserPage);