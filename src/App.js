import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
  redirect,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Login from './screens/Login'
import Register from './screens/Register'
import Reset from './screens/ResetCode'
import Adminhome from './screens/Adminhome'
import Form from './screens/Form'
function App() {
  

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <HomeScreen
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login/>
            }
          />
          <Route
            path="/register"
            element={
              <Register/>
            }
          />
          <Route
            path="/reset"
            element={
              <Reset/>
            }
          />
          <Route
            path="/adminhome"
            element={
              <Adminhome/>
            }
          />
          <Route
            path="/form"
            element={
              <Form/>
            }
          />
          
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
