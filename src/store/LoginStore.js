/*
 * @Author: Lancer
 * @Date:2020/5/2
 * @Last Modified by:   Lancer
 * @Last Modified time: 2020/5/2
 */

import {createStore} from "redux";

function loginStore(state={isLogin:false},action) {
     switch (action.type) {
       case 'loginSuccess':
         return {isLogin: true}
       default:
         return state
     }
}

const store = createStore(loginStore)

export default store