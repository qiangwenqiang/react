import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.css'
import logo from './images/timg.jpg'
import {reqLogin} from '../../api/idnex'
export default class Login extends Component {
    onFinish = values => {
        console.log('Received values of form: ', values);
        reqLogin(values.username,values.password).then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
    };
    render() {
        return (
            <div className='login'>
                <header className='login_header'>
                    <img src={logo} alt="" />
                    <h1 className='login_title'>React:后台管理项目</h1>
                </header>
                <section className='login_content'>
                    <h2>登录</h2>
                    <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={this.onFinish}>
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">登陆</Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}