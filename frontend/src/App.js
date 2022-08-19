import React from 'react';

import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom'
import MainPage from './component/mainpage';
import Login from './component/Login/Login';
import Register from './component/Register/Register'
import Sidebar from './component/Sidebar';

// const PrivateRoute = () => {
//   return(
//     <>
//     <Header />
//     </>
//   )
// }

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/mainpage' element={<MainPage />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
