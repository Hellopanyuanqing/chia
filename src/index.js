import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './store'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { mainRouter } from './routes/config'
import { mainView } from './views';
import "./i18n";
import 'antd-mobile/dist/antd-mobile.css';

ReactDOM.render(
  <Provider store={store}>

    <Router>

      <Switch>

        <Route path='/admin' component={App} />
        {
          mainRouter.map(route => {
            const Component = mainView[route.component];

            return <Route
              key={route.key}
              path={route.key}

              render={
                (routeprops) => {
                  return <Component {...routeprops} />
                }

              } />
          })
        }
        <Redirect to='/admin' from='/' exact />
        <Redirect to='/404' />

      </Switch>
    </Router>
    {/* <Router>
      <App />
    </Router> */}

  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
