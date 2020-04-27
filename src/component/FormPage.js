/*
 * @Author: Lancer
 * @Date:2020/4/26
 * @Last Modified by:   Lancer
 * @Last Modified time: 2020/4/26
*/

import React, {Component} from 'react';
import {Button} from "antd";
import DiaLog from "./DiaLog";


class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
  }

  changeShow = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
        <div style={{border: '1px solid red'}}>
          <h3>点击显示隐藏dialog</h3>
          <Button type={'primary'} onClick={this.changeShow}>点我</Button>
          {this.state.show && <DiaLog/>}
        </div>
    );
  }
}

export default FormPage;