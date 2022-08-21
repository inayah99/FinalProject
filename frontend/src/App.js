import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom'
import MainPage from './component/mainpage/index.jsx';
import Dashboard from './pages/Dashboard.js';
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Navbar from "./pages/Navbar.js";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/mainpage' element={<MainPage />} />
          <Route path='/register' element={<Register />} />

          <Route exact path="/" element={<Login />} />


          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<><Navbar /><Dashboard /></>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

