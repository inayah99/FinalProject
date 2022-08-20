import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom'
import MainPage from './component/mainpage/index.jsx';
// import Dashboard from './components/Dashboard.js';
// import Login from "./components/Login.js";
// import Register from "./components/Register.js";
// import Navbar from "./components/Navbar.js";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <MainPage />
        <Routes>
          <Route path='/mainpage' element={<MainPage />} />
          {/* <Route path='/register' element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/register" element={ <Register />} />
          <Route path="/dashboard" element={ <><Navbar /><Dashboard /></>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

