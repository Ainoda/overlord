import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'
import './asset/css/index.css'
import indexRoutes from './routes/index'
import httpInterceptor from './httpInterceptor'
// add http interceptor
httpInterceptor.init()
const hist = createBrowserHistory()

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />
      })}
    </Switch>
  </Router>,
  document.getElementById('root')
)
