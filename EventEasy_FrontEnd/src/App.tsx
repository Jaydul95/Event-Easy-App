import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Layout/NavBar';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import RouterLayout from './Layout/AppRouter';
import AppRouter from './Layout/AppRouter';

function App() {
  return (
    <div>
      <AppRouter/>
    </div>
  );
}

export default App;