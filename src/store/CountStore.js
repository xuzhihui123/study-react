/*
 * @Author: Lancer
 * @Date:2020/4/28
 * @Last Modified by:   Lancer
 * @Last Modified time: 2020/4/28
 */

//applyMiddleware

import {createStore,applyMiddleware,combineReducers} from "redux";
import thunk from 'redux-thunk'
import logger from 'redux-logger'

function countStore(state = {age: 18}, action) {
  switch (action.type) {
    case 'add':
      return {age:state.age+1}
    default:
      return state
  }
}
function countStore2(state = {age: 18}, action) {
  switch (action.type) {
    case 'adds':
      return {age:state.age+1}
    default:
      return state
  }
}


//applyMiddleware 使用中间件   combineReducers 合并
const store = createStore(combineReducers({
  count1:countStore,
  count2:countStore2
}),applyMiddleware(thunk,logger))

export default store