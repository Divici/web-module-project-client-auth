import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login';
import Logout from './components/Logout';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='header'>
          <div className='logo'>
            <h2>Friends Database</h2>
          </div>
          <div className='nav'>
            <ul>
              <li>
                <Link to='/login'>Login.</Link>
              </li>
              <li>
                <Link to='/friends'>FriendList.</Link>
              </li>
              <li>
                <Link to='/friends/add'>AddFriend.</Link>
              </li>
              <li>
                <Link to='/logout'>Logout</Link>
              </li>
            </ul>
          </div>          
        </div>
        <div className='border-bottom'></div>
      
        <Switch>
          <PrivateRoute exact path='/friends/add' component={AddFriends} />
          
          <PrivateRoute path='/friends' component={FriendsList} />
          
          <Route path='/login'>
            <Login/>
          </Route>
          
          <PrivateRoute path='/logout' component={Logout} />
          <Route path='/'>
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
