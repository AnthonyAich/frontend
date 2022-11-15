import React from 'react';
import './App.css';
//react router
import {Routes, Route} from 'react-router-dom';
import HomePagina from './pages/HomePage/HomePagina';
import Login from './pages/login/Login';
import Error404 from './pages/Error404/Error404';
import About from './pages/About/About';
import Dashboard from './pages/Dashboard/Dashboard';
// auth
import { AuthProvider } from './contexts/AuthProvider';
import { UserProvider } from './contexts/UsersProvider';
import { MeetingProvider } from './contexts/MeetingProvider';
import { ClassProvider } from './contexts/ClassProvider';
import Meeting from './pages/Meeting/Meeting';

function App() {
  return (
    <>                
    <AuthProvider>
      <UserProvider>
        <MeetingProvider>
          <ClassProvider>
        <Routes>
          <Route path="/" element={<HomePagina />}/>
          {/* Home route is om de Home te kunnen gebruiken van de navbar (zie array met "pages" in component NavBar) */}
          <Route path="/Home" element={<HomePagina />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Contact" element={<Error404 />}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/forgotPW" element={<Error404 />}/>
          <Route path="/Dashboard" element={<Dashboard />}/>
          <Route path="/Meeting/:id" element={<Meeting />}/>
          <Route path="*" element={<Error404 />}/>
        </Routes>
        </ClassProvider>
        </MeetingProvider>
      </UserProvider>
    </AuthProvider>
    </>
  );
}

export default App;
