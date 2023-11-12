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
  
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  useEffect(() => {
    // Check for isLoggedIn status in localStorage
    const storedAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");
    const storedUserLoggedIn = localStorage.getItem("isUserLoggedIn");
    if (storedAdminLoggedIn === "true") {
      setIsAdminLoggedIn(true);
    }
    if (storedUserLoggedIn === "true") {
      setIsUserLoggedIn(true);
    }
    
  }, []);

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
            path="/adminlogin"
            element={
              <Reset isAdminLoggedIn={isAdminLoggedIn}
              setIsAdminLoggedIn={setIsAdminLoggedIn}/>
            }
          />
          <Route
            path="/adminhome"
            element={
              isAdminLoggedIn ? (
                <Adminhome />
              ):(
                <Reset
                  isAdminLoggedIn={isAdminLoggedIn}
                  setIsAdminLoggedIn={setIsAdminLoggedIn}
                />
              )
            }
          />
          <Route
            path="/form"
            element={
              isUserLoggedIn ? (
                <Form />
              ):(
                <Login
                  isUserLoggedIn={isUserLoggedIn}
                  setIsUserLoggedIn={setIsUserLoggedIn}
                />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
