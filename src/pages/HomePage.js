import React, { useContext, useEffect, useState } from 'react';
import './HomePage.css';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Homepage = () => {
  let { user, authToken, logoutUser } = useContext(AuthContext);
  console.log('user', user);
  let [doctorList, setDoctorList] = useState([]);
  let [dataFetched, setDataFetched] = useState(false);
  console.log('doctorlist', doctorList);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/doctorlist/', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + String(authToken.access),
        }
      });
      console.log(response);

      if (response.status === 200) {  // Check the status instead of response.data
        const data = response.data;
        setDoctorList(data);
        setDataFetched(true);
        console.log(data);
      } else if (response.status === 401) {
        alert('Unauthorized');
      }
    } catch (error) {
      console.log('Error when fetching doctors', error);
    }
  };

  useEffect(() => {
    if (!dataFetched) {
      fetchDoctors();
    }
  }, [dataFetched]);

  return (
    <div>
      <header>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZwT"
          crossorigin="anonymous"
        />

        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossorigin="anonymous"
        ></script>

        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarResponsive">
              <div className="left-section d-flex align-items-center">
                <a className="navbar-brand d-none d-lg-block text-light" href="#">City Hospital</a>
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                      <span className="nav-link text-light mx-3"><b>Home</b></span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="right-section d-flex align-items-center  ml-auto">
                {
                  user ? (
                    <div className="user-info-container">
                      <Link to="/updateprofile">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          alt=""
                          className="rounded-circle user-avatar"
                        />
                      </Link>
                      <button id="logout-btn" className='mx-3' onClick={logoutUser} style={{ textDecoration: 'none' }}>Logout</button>
                    </div>
                  ) : (
                    <>
                      <button className="btn-1 rounded-squre mx-2">
                        <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>
                      </button>
                      <button className="btn-1 rounded-squre">
                        <Link to="/register" style={{ textDecoration: 'none' }}>Register</Link>
                      </button>
                    </>
                  )
                }
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="main container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img className="image img-fluid mt-5 py-5" src="https://www.dukehealth.org/sites/default/files/homepage_hero_01.jpg" alt="Hospital Image" />
        <h1>Our Doctors</h1>
        <div className="row mt-4">
          {doctorList && doctorList.map((doctor, index) => (
            <div key={index} className="col-md-3 mb-4"> 
              <div className="card" style={{ width: '100%' }}>
                <div className="card-body text-center">
                  <h4 className="card-title">{doctor.username}</h4>
                  <hr />
                  <h5>Department</h5>
                  <h6 className="card-subtitle mb-2 text-primary">
                    {doctor.doctors ? doctor.doctors.department : 'N/A'}
                  </h6>
                   <h6> Hospital:<span className="text-success">{doctor.doctors ? doctor.doctors.hospital : 'N/A'}</span></h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer>
        <p>&copy; 2024 Hospital Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;
