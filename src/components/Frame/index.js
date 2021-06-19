import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { choiceLang } from '../../actions/lang'
import { connect } from 'react-redux'

import { TabBar, WingBlank } from 'antd-mobile';

import './Frame.less'

function Frame(props) {
    const { t, i18n } = useTranslation();


    useEffect(() => {
        console.log(props);
    })


    return (
        <div className="mobile_body">

            <div style={{ minHeight: "100vh", paddingBottom: "1.5rem" }}>{props.children}</div>

            <div style={{ position: 'fixed', width: '100%', bottom: 0, zIndex: "999" }}><TabBar
                unselectedTintColor='#606060'
                tintColor='#35AE57'
                barTintColor='#121212'
                // noRenderContent='true'
                tabBarPosition="bottom"
            >
                {props.menus.map((item) => {
                    return <TabBar.Item
                        title={item.title}
                        key={item.key}
                        icon={<i className={item.icon} />}
                        selectedIcon={<i className={item.icon + "-select"} />}
                        selected={props.location.pathname === item.key}
                        onPress={() => {
                            props.history.push(item.key)
                        }}
                    />
                })}
            </TabBar>
            </div>
        </div>
    )

}
const mapStateToProps = state => ({
    lang: state.lang.lang
});

export default connect(mapStateToProps, { choiceLang })(withRouter(Frame))
