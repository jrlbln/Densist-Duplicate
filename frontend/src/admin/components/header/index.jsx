import React, { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import FeatherIcon from 'feather-icons-react';
import logo from "../../assets/images/logo.png";
import logoicon from "../../assets/images/logo-small.png";
import avatar from "../../assets/images/profiles/avatar-01.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import IMG01 from "../../assets/images/doctors/doctor-thumb-01.jpg";
import IMG02 from "../../assets/images/doctors/doctor-thumb-02.jpg";
import IMG03 from "../../assets/images/doctors/doctor-thumb-03.jpg";
import config from "config";

const Header = (props) => {

  let pathname = props.location.pathname;

  const[task,settask]=useState(true);
  const[task1,settask1]=useState(true);

  const handletheme=()=>{
		document.body.classList.toggle('darkmode');
    settask(!task)
    settask1(!task1)
	}
  const handlesidebar = () => {
    document.body.classList.toggle('mini-sidebar');
  }
  const handlesidebarmobilemenu = () => {
    document.body.classList.toggle('slide-nav');
  }

  if (props.location.pathname.split("/")[1] === 'admin') {
    require('../../assets/css/bootstrap.min.css')
    require('../../assets/css/feathericon.min.css')
    require('../../assets/plugins/fontawesome/css/fontawesome.min.css')
    require('../../assets/plugins/fontawesome/css/all.min.css')
    require('../../assets/css/font-awesome.min.css')
    require('../../assets/css/style.css')
  }





  const exclusionArray = [
    "/admin/login",
    "/admin/register",
    "/admin/forgotPassword",
    "/admin/lockscreen",
    "/admin/404",
    "/admin/500",
  ];
  if (exclusionArray.indexOf(props.location.pathname) >= 0) {
    return "";
  }
  return (
    <div className="header">
        {/* Logo */}
        <div className="header-left">
          <Link to="/admin" className="logo">
            <img src={logo} alt="Logo" />
          </Link>
          <Link to="/admin" className="logo logo-small">
            <img
              src={logoicon}
              alt="Logo"
              width={30}
              height={30}
            />
          </Link>
          <Link to="#" id="toggle_btn" onClick={handlesidebar}>
            <FeatherIcon icon="chevrons-left" />
          </Link>
        </div>
        {/* /Logo */}
        {/* Search */}
        <div className="top-nav-search">
          <div className="main">
            <form className="search" method="post" action="/admin">
              <div className="s-icon">
                <i className="fas fa-search" />
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Start typing your Search..."
              />
              <ul className="results">
                <li>
                  <h6>
                 <i className="me-1"> <FeatherIcon icon="calendar" /></i>
                  Appointments
                  </h6>
                  <p>
                    No matched Appointment found.{" "}
                    <Link to="/admin/appointment-list">
                      <span>View all</span>
                    </Link>
                  </p>
                </li>
                <li>
                  <h6>
                  <i className="me-1"> <FeatherIcon icon="calendar" /></i> Specialities
                  </h6>
                  <p>
                    No matched Appointment found.{" "}
                    <Link to="/admin/specialities">
                      <span>View all</span>
                    </Link>
                  </p>
                </li>
                <li>
                  <h6>
                  <i className="me-1"> <FeatherIcon icon="user" /></i> Doctors
                  </h6>
                  <p>
                    No matched Appointment found.{" "}
                    <Link to="/admin/doctor-list">
                      <span>View all</span>
                    </Link>
                  </p>
                </li>
                <li>
                  <h6>
                    <i className="me-1"> <FeatherIcon icon="user" /></i>Patients
                  </h6>
                  <p>
                    No matched Appointment found.{" "}
                    <Link to="/admin/patient-list">
                      <span>View all</span>
                    </Link>
                  </p>
                </li>
              </ul>
            </form>
          </div>
        </div>
        {/* /Search */}
        {/* Mobile Menu Toggle */}
        <Link to="#" className="mobile_btn" id="mobile_btn" onClick={() => handlesidebarmobilemenu()}>
          <i className="fas fa-bars" />
        </Link>
        {/* /Mobile Menu Toggle */}
        {/* Header Menu */}
        <ul className="nav nav-tabs user-menu">
          {/* Flag */}
          <li className="nav-item">
            <Link to="#" id="dark-mode-toggle" className="dark-mode-toggle">
              <i onClick={handletheme}  className={` light-mode ${task ? "active" : "" }`}> <FeatherIcon icon="sun" /></i>
              <i onClick={handletheme}  className={`dark-mode ${task1 ? "" : "active" }`}> <FeatherIcon icon="moon" /></i>
            </Link>
          </li>
          {/* /Flag */}
          {/* Notifications */}  
          <li className="nav-item dropdown noti-dropdown">
						<a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
            <FeatherIcon icon="bell" /> <span className="badge" />
						
						</a>
						<div className="dropdown-menu notifications">
							<div className="topnav-dropdown-header">
								<span className="notification-title">Notifications</span>
								<a href="#" className="clear-noti"> Clear All </a>
							</div>
							<div className="noti-content">
								<ul className="notification-list">
									<li className="notification-message">
										<a href="#">
											<div className="media d-flex">
												<span className="avatar avatar-sm flex-shrink-0">
													<img className="avatar-img rounded-circle" alt="User Image" src={IMG01}/>
												</span>
												<div className="media-body flex-grow-1">
													<p className="noti-details"><span className="noti-title">Dr. Matthew Dodd</span> Schedule <span className="noti-title">her appointment</span></p>
													<p className="noti-time"><span className="notification-time">4 mins ago</span></p>
												</div>
											</div>
										</a>
									</li>
									<li className="notification-message">
										<a href="#">
											<div className="media d-flex">
												<span className="avatar avatar-sm flex-shrink-0">
													<img className="avatar-img rounded-circle" alt="User Image" src={IMG02}/>
												</span>
												<div className="media-body flex-grow-1">
													<p className="noti-details"><span className="noti-title">Bernice Hood</span> has booked her appointment to <span className="noti-title">Dr. Matthew Dodd</span></p>
													<p className="noti-time"><span className="notification-time">6 mins ago</span></p>
												</div>
											</div>
										</a>
									</li>
									<li className="notification-message">
										<a href="#">
											<div className="media d-flex">
												<span className="avatar avatar-sm flex-shrink-0">
													<img className="avatar-img rounded-circle" alt="User Image" src={IMG01}/>
												</span>
												<div className="media-body flex-grow-1">
												<p className="noti-details"><span className="noti-title">Joshua Miller</span> sent a amount of $210 for his <span className="noti-title">appointment</span></p>
												<p className="noti-time"><span className="notification-time">8 mins ago</span></p>
												</div>
											</div>
										</a>
									</li>
									<li className="notification-message">
										<a href="#">
											<div className="media d-flex">
												<span className="avatar avatar-sm flex-shrink-0">
													<img className="avatar-img rounded-circle" alt="User Image" src={avatar}/>
												</span>
												<div className="media-body flex-grow-1">
													<p className="noti-details"><span className="noti-title">Sammy Oneal</span> send a message <span className="noti-title"> to his doctor</span></p>
													<p className="noti-time"><span className="notification-time">12 mins ago</span></p>
												</div>
											</div>
										</a>
									</li>
								</ul>
							</div>
							<div className="topnav-dropdown-footer">
								<a href="#">View all Notifications</a>
							</div>
						</div>
					</li>
                 
          
          {/* /Notifications */}
          {/* User Menu */}
          <li className="nav-item dropdown main-drop">
            <Link
              to="#"
               className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              <span className="user-img">
                <img src={avatar} alt="" />
                <span className="status online" />
              </span>
            </Link>
            <div className="dropdown-menu">
              <div className="user-header">
                <div className="avatar avatar-sm">
                  <img
                    src={avatar}
                    alt="User Image"
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="user-text">
                  <h6>Donald Niles</h6>
                  <p className="text-muted mb-0">Administrator</p>
                </div>
              </div>
              <Link className="dropdown-item" to="/admin/profile">
                <i className="me-1"><FeatherIcon icon="user"/></i>My Profile
              </Link>
              <Link className="dropdown-item" to="/admin/settings">
              <i className="me-1"><FeatherIcon icon="edit"/></i> Settings
              </Link>
              <hr className="my-0 ms-2 me-2" />
              <Link className="dropdown-item" to="/admin/login">
              <i className="me-1"><FeatherIcon icon="log-out"/></i>
                Logout
              </Link>
            </div>
          </li>
          {/* /User Menu */}
        </ul>
        {/* /Header Menu */}
      </div>
  );
}


export default Header;
