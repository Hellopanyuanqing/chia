import React from 'react'
import { withRouter } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import './navbar.less'
function Navbar({
    left = false,
    children,
    history,
    onLeftClick,
    leftContent,
    rightContent, }) {
    const goBack = () => history.go(-1);
    return (
        <NavBar
            className='navbar'
            mode='light'
            leftContent={leftContent}
            icon={left ? <i className='left_icon' /> : undefined}
            onLeftClick={onLeftClick || goBack}
            rightContent={rightContent}
        >
            {children}
        </NavBar>
    )
}
export default withRouter(Navbar)