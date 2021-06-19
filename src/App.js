import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Routes from './routes'
import routesConfig from './routes/config'
import { Frame } from './components'
import { useTranslation } from "react-i18next";
import './App.less'




const App = (props) => {
  const { t } = useTranslation();
  React.translate = t;

  return (
    props.isLogin ?
      <Frame menus={routesConfig.menus}>
        <Routes />
      </Frame>

      : <Redirect to='/login' />
  );

}


const mapState = state => ({
  isLogin: state.user.isLogin,
})
export default connect(mapState)(App)