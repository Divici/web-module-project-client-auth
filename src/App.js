import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Client Auth Project</h2>
        <Route exact path='/'>
          {/* <Login/> */}
        </Route>
        <Route exact path='/login'>
          {/* <Login/> */}
        </Route>
        <Route exact path='/logout'>
          {/* <Logout/> */}
        </Route>
        <Route exact path='/friends'>
          {/* <FriendsList/> */}
        </Route>
        <Route exact path='/friends/add'>
          {/* <AddFriends/> */}
        </Route>
      </div>
    </Router>
  );
}

export default App;
