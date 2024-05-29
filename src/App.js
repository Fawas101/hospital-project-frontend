
import React from 'react';
import {Route,Routes} from 'react-router-dom'
// import HelloWorld from './hello';
import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import {AuthProvider} from './context/AuthContext'
import DoctorsPage from './pages/DoctorsPage';
import AdminsPage from './pages/AdminsPage';
import UserDetails from './pages/UserDetails';
import UpdateProfilePage from './pages/UpdateProfilePage';



function App() {
  return (
    <div className='App'>
      <AuthProvider>
      <Routes>
        <Route element={<Login/>} path='/login'/>
        <Route element={<Register/>} path='/register'/>
        <Route element={<HomePage/>} path='/'/>
        <Route element={<UpdateProfilePage/>} path='/updateprofile'/>
        <Route element={<DoctorsPage/>}path='/doctor'/>
        <Route element={<AdminsPage/>} path='/admin'/>
        <Route element={<UserDetails/>} path='/user/:id' /> 
      {/* <Route element={<HelloWorld />} path='/hello'/> */}
      </Routes>
      </AuthProvider>

    </div>
  );
}

export default App;