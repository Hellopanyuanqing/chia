import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../../actions/user";
import './my.less'

function My(props) {
    //退出登录
    const loginOut = () => {
        console.log("退出登录");
        props.logout()
    }

    return (
        <div className="my_box">
            <div className="my_topbg">
                <div className="my_head_warp">
                    <div className="head"><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2553121922,1667195812&fm=224&gp=0.jpg" /></div>
                    <div className="user_info">
                        <p className="mobile">{props.mobile}</p>
                        <p className="join_code">邀请码：{props.invit_code}</p>
                    </div>
                </div>
            </div>
            <div className="my_contorl_box">
                <div className="my_contorl_info">
                    <span className="my_info_icon1"></span>
                    <p>安全管理</p>
                </div>
                <div className="my_contorl_info">
                    <span className="my_info_icon2"></span>
                    <p>帮助中心</p>
                </div>
                <div className="my_contorl_info">
                    <span className="my_info_icon3"></span>
                    <p>关于我们</p>
                </div>
                <div className="my_contorl_info">
                    <span className="my_info_icon4"></span>
                    <p>语言设置</p>
                </div>
                <div className="my_contorl_info" onClick={loginOut}>
                    <span className="my_info_icon5"></span>
                    <p>退出</p>
                </div>
            </div>

        </div>
    )
}
const mapState = state => ({
    mobile: state.user.mobile,
    avatar: state.user.avatar,
    invit_code: state.user.invit_code
})
export default connect(mapState, { logout })(My)