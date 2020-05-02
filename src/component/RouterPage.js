/*
 * @Author: Lancer
 * @Date:2020/5/2
 * @Last Modified by:   Lancer
 * @Last Modified time: 2020/5/2
 */

import React, {Component} from 'react';
import {BrowserRouter, Route, Link,Switch} from "react-router-dom";
import IndexPage from "./IndexPage";
import LoginPage from "./LoginPage";
import UserPage from "./UserPage";

class RouterPage extends Component {
  render() {
    return (
        <div>
          <BrowserRouter>
            <nav>
              <Link to={'/'}>首页</Link>
              <Link to={'/user'}>用户</Link>
              <Link to={'/login'}>登录</Link>
            </nav>

            {/*这边的component里传的不能是<IndexPage/> 要传方法，返回组件*/}
            <Switch>
              <Route exact path={'/'} component={IndexPage}/>
              <Route path={'/login'} component={LoginPage}/>
              <Route path={'/user'} component={UserPage}/>
              <Route component={() => (<div>404</div>)}/>
            </Switch>
          </BrowserRouter>
        </div>
    );
  }
}

export default RouterPage;