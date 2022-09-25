import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PageNavbar from './components/navbar';
import Login from './components/login';
import AnnouncementPage from './components/announcements';

function App() {
  return (
    <>
      <Router>
        <PageNavbar />
        <Routes>
          <Route exact path='/' element={<Login />}/>
          <Route path='/anouncement-page' element ={<AnnouncementPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
