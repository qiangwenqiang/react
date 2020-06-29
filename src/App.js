import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './views/Login/Login'
import Admin from './views/Admin/Admin'
/*应用根组件
*/
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Login} />
          <Route path='/login' component={Login} />
          <Route path='/admin' component={Admin} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App;
