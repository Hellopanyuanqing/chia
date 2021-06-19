import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { login } from '../../actions/user';
import $ from 'jquery';
import loginlogoIcon from '../../assets/image/login-logo.png';
import './login.less';

function Login(props) {
    $.fn.serializeJson = function () {
        var serializeObj = {};
        var array = this.serializeArray();
        var str = this.serialize();
        $(array).each(function () {
            if (serializeObj[this.name]) {
                if ($.isArray(serializeObj[this.name])) {
                    serializeObj[this.name].push(this.value);
                } else {
                    serializeObj[this.name] = [serializeObj[this.name], this.value];
                }
            } else {
                serializeObj[this.name] = this.value;
            }
        });
        return serializeObj;
    };

    const loginHandle = () => {
        var user = $('#loginForm').serializeJson();
        if (user.mobile != "" && user.password != "") {

            props.login(user);
        }
    };

    useEffect(() => { });
    return props.isLogin ? (
        <Redirect to='/admin' />
    ) : (
        <div className='login_main'>
            <div className='login_logo'>
                <img src={loginlogoIcon} />
            </div>
            <div className='login_info'>
                <form name='login_name' id='loginForm'>
                    <div className='login_select'>
                        <select className='login_select' defaultValue='86' name='area'>
                            <option value='86'>+86</option>
                            <option value='99'>+99</option>
                            <option value='100'>+100</option>
                            <option value='101'>+101</option>
                        </select>
                    </div>
                    <div className='login_enter_box'>
                        <input
                            type='number'
                            maxLength='11'
                            placeholder='请输入手机号'
                            name='mobile'
                        ></input>
                    </div>
                    <div className='login_enter_box'>
                        <label className='login_label'>密码</label>
                        <input
                            type='password'
                            placeholder='请输入密码'
                            name='password'
                        ></input>
                    </div>
                    <Button
                        loading={props.isLoading}
                        className='login_btn'
                        onClick={loginHandle}
                    >
                        登录
          </Button>
                </form>
            </div>
        </div>
    );
}
const mapState = (state) => ({
    isLogin: state.user.isLogin,
    isLoading: state.user.isLoading,
});
export default connect(mapState, { login })(Login);
