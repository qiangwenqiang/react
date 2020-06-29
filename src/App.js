import React, { Component } from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom'

import Login from './view/login/login.js'
import Admin from './view/admin/admin.js'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      {/* switch匹配其中一个 */}
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/' component={Admin}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
