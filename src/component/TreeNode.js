/*
 * @Author: Lancer
 * @Date:2020/4/27
 * @Last Modified by:   Lancer
 * @Last Modified time: 2020/4/27
 */

import React, {Component} from 'react';
import {CaretUpOutlined, CaretDownOutlined} from '@ant-design/icons'

class TreeNode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dirIcon: false
    }
  }

  changeIcon = () => {
    this.setState({
      dirIcon: !this.state.dirIcon
    })
  }

  render() {
    const {dirIcon} = this.state
    console.log(dirIcon);
    const {title, children} = this.props.treeData
    return (
        <div>
          <div onClick={this.changeIcon} style={{paddingLeft: '20px'}}>
            {dirIcon ? <CaretUpOutlined style={{fontSize: '20px'}}/> : <CaretDownOutlined style={{fontSize: '20px'}}/>}
            <span>{title}</span>
            {
              dirIcon &&
              <div>
                {children.map((item) => {
                  return <TreeNode treeData={item} key={item.title}/>
                })}
              </div>
            }
          </div>
        </div>
    );
  }
}

export default TreeNode;