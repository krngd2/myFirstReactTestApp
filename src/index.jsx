import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import Main from "./components/main"
import Login from "./components/login"
import * as serviceWorker from './serviceWorker';
import PageOne from './components/pages/PageOne';
import PageTwo from './components/pages/PageTwo';
import Home from './components/pages/home';
import Cart from './components/pages/Cart';
import UserInfo from './components/pages/UserInfo';

// import createBrowserHistory from "history/createBrowserHistory"; const
// history = createBrowserHistory()
ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path="/login" component={Login}/>
    <Main>
      <Route exact path={`/`} component={Home}/>
      <Route path={`/pageone`} component={PageOne}/>
      <Route path={`/pagetwo`} component={PageTwo}/>
      <Route path={`/cart`} component={Cart}/>
      <Route path={`/userinfo/:userid`} component={UserInfo}/>
    </Main>
  </Switch>
</BrowserRouter>, document.getElementById("app"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
