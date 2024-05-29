import'./login.css'
import Form from 'react-bootstrap/Form';
import React, { useContext } from 'react'
import { ToastContainer } from 'react-toastify';
import AuthContext from '../context/AuthContext.js'

const Login = () => {

  let {loginUser} = useContext(AuthContext)

    return (
<div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card card-registration my-4">
            <div className="row g-0">
              <div className="col-xl-6 d-none d-xl-block">
                <img src="https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-equipment_23-2149611201.jpg?t=st=1716368238~exp=1716371838~hmac=e26197bc4c2fbece8e083b5c910e6f282e42ef1f7cbd9e7ee2121c233ea3f690&w=826"
                  alt="Sample photo" className="img-fluid" />
              </div>
              <div className="col-xl-6">
                <div className="card-body p-md-5 text-black">
                  <h3 className="mb-5 text-uppercase">Login</h3>
                  <form onSubmit={loginUser} > 
                    <div className="mb-4">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" name='email' placeholder='Enter your email'  className="form-control form-control-lg" required />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input type="password" name='password' placeholder='Enter your password' className="form-control form-control-lg" required />
                    </div>
                    <div className="d-flex justify-content-centre ">
                      <button type="submit" className="btn btn-warning btn-lg ms-2">Login</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
      
    )
  }
  
  export default Login