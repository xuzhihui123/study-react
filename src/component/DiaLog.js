/*
 * @Author: Lancer
 * @Date:2020/4/27
 * @Last Modified by:   Lancer
 * @Last Modified time: 2020/4/27
 */




import React, {Component} from 'react';
import {createPortal} from "react-dom";
class DiaLog extends Component {
  constructor(props) {
    super(props);
    this.doc = document.body
    this.divs = document.createElement('div')
    this.doc.appendChild(this.divs)
  }
  componentWillUnmount() {
    this.doc.removeChild(this.divs)
  }
  render() {
    return createPortal(
        <div style={{width:'200px',height:'200px',border:'1px solid blue'}}>
          <h3>我是dialog</h3>
        </div>,this.divs
    )
  }
}


export default DiaLog;