import React, { useEffect } from 'react';
import './App.css';
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";

import MainPage from './components/mainPage/MainPage'
import LoginPage from './components/loginPage/Login'
import RegisterPage from './components/registerPage/Register'

import firebase from './firebase';

import { useDispatch, useSelector } from 'react-redux';
import {
  setUser,
  clearUser
} from './redux/actions/user_action';
import ProfilePage from './components/mainPage/profilePage/ProfilePage';
import LegendPage from './components/mainPage/legendPage/LegendPage';


function App(props) {
  let history = useHistory();
  let dispatch = useDispatch();
  const isLoading = useSelector(state => state.user.isLoading);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      console.log('user', user)
      // 로그인이 된 상태
      if(user) {
        history.push("/");
        dispatch(setUser(user));
      } else {
        history.push("/login");
        dispatch(clearUser());
      }
    })
  }, [])

  if(isLoading) {
    return (
      <div>
        ...loading
      </div>
    )
  } else {
  return (
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/home" component={MainPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/legend" component={LegendPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
  );
  }
}


export default App;
