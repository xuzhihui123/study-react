/*
 * @Author: Lancer
 * @Date:2020/4/26
 * @Last Modified by:   Lancer
 * @Last Modified time: 2020/4/26
 */


//本身react没有数据双向绑定   antd封装好了

import React, {Component} from 'react';
import {Form, Button, Input} from 'antd'
import {UserOutlined, LockOutlined} from '@ant-design/icons'

const FormItem = Form.Item

const layout = {
  labelCol: {span: 4},
  wrapperCol: {span: 16},
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
  },
};


class FormPage extends Component {
  formRef = React.createRef()
  getValues = () => {
    // console.log(this.formRef.current.getFieldsValue());
    // this.formRef.current.validateFields().then(r=>{
    //   console.log(r);
    // }).catch(r=>{
    //   console.log(r);
    // })
  }

  render() {
    return (
        <div style={{marginTop: '20px'}}>
          <h3>FormPage</h3>
          <Form {...layout} ref={this.formRef}>
            <FormItem label={'姓名'} name='name' rules={[{required:true,message:'请输入姓名'}]}>
              <Input prefix={<UserOutlined/>}/>
            </FormItem>
            <FormItem label={'密码'} name='password' rules={[{required:true,message:'请输入密码'}]}>
              <Input prefix={<LockOutlined/>} type="password"/>
          </FormItem>
            <FormItem {...tailLayout}>
              <Button type="primary" onClick={this.getValues}>submit</Button>
            </FormItem>
          </Form>
        </div>
    );
  }
}


export default FormPage;