/*
 * @Author: Lancer
 * @Date:2020/4/28
 * @Last Modified by:   Lancer
 * @Last Modified time: 2020/4/28
 */

import {createStore} from "redux";

function countStore(state = 0, action) {
  switch (action.type) {
    case 'add':
      return state + 1
    default:
      return state
  }
}

const store = createStore(countStore)

export default store