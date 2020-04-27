/*
 * @Author: Lancer
 * @Date:2020/4/26
 * @Last Modified by:   Lancer
 * @Last Modified time: 2020/4/26
*/

//树组件封装
import React, {Component} from 'react';
import TreeNode from "./TreeNode";

class FormPage extends Component {
  constructor(props) {
    super(props);
    this.treeData = {
      title:'中国',
      children:[
        {
          title:'福建省',
          children:[
            {
              title:'泉州市',
              children:[]
            },
            {
              title:'福州市',
              children:[]
            }
          ]
        },
        {
          title:'江西省',
          children: [
            {
              title:'鹰潭市',
              children:[]
            },
            {
              title:'南昌市',
              children:[]
            }
          ]
        }
      ]
    }
  }
  render() {
    return (
        <div>
          <h3>树组件</h3>
          <TreeNode treeData={this.treeData}/>
        </div>
    );
  }
}

export default FormPage;