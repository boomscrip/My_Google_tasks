import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';

import SessionActions from './actions/SessionActions';
import SessionStore from './stores/SessionStore';

import App from './App.jsx';
import LoggedInLayout from './components/LoggedInLayout.jsx';
import AboutPage from './components/AboutPage.jsx';
import LoginPage from './components/LoginPage.jsx';
import TasklistsPage from './components/TasklistsPage.jsx';
import TasksPage from './components/TasksPage.jsx';

// ReactDOM.render(
//
// 		<App />,
//
//
//   document.getElementById('root')
// );


ReactDOM.render(

		  <LoginPage />,

  document.getElementById('moint')
);
