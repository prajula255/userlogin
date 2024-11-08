
import './App.css';
import Username from './components/Username';
import Password from './components/Password';
import Button from './components/Button';
import LoginPage from './pages/login/login';
import RegistrationPage from './components/pages/reg/reg';
import React from 'react';
import {Route,Routes} from "react-router-dom";

export default function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </React.Fragment>
  )
}


