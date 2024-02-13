import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserListPage from './UserListPage';
import UserDetailsPage from './UserDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<UserListPage/>} />
        <Route path="/user/:username" element={<UserDetailsPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
