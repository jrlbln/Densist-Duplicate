import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//icon

import { faHospital } from "@fortawesome/free-regular-svg-icons";
import logo from "../assets/images/logo.png";
import IMG01 from "../assets/images/doctors/doctor-thumb-02.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import { useEffect } from "react";
import config from "config";

const Header = (props) => {

  const [isSideMenu, setSideMenu] = useState("")
const [isSideMenuone,setSideMenuone] =useState("")
const [isSideMenutwo,setSideMenutwo] =useState("")
const toggleSidebar = (value) => {
console.log (value);
setSideMenu(value)

}
const toggleSidebarone = (value) => {
console.log (value);
setSideMenuone(value)

}
const toggleSidebartwo = (value) => {
console.log (value);
setSideMenutwo(value)

}
  console.log("Working", isSideMenu)

  let pathnames = window.location.pathname

  const [active, setActive] = useState(false);
  const url = pathnames.split("/").slice(0, -1).join("/");

  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };

  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

 
  return (
    <header className="header home">
      
        <nav className="navbar navbar-expand-lg header-nav">
        <div className="navbar-header">
          <a href="#0" id="mobile_btn" onClick={() => onHandleMobileMenu()}>
            <span className="bar-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </a>
          <Link to="/home" className="navbar-brand logo">
            <img src={logo} className="img-fluid" alt="Logo" />
          </Link>
        </div>
        <div className="main-menu-wrapper">
          <div className="menu-header">
            <Link to="/home" className="menu-logo">
              <img src={logo} className="img-fluid" alt="Logo" />
            </Link>
            <a
              href="#0"
              id="menu_close"
              className="menu-close"
              onClick={() => onhandleCloseMenu()}
            >
              <i className="fas fa-times"></i>
            </a>
          </div>
          <ul className="main-nav">
            <li className={pathnames.includes("/home") ? "active" : ""}><Link to="/home">Home</Link></li>

            <li className={`has-submenu ${url.includes("/doctor") || pathnames.includes("add-prescription") || pathnames.includes("edit-prescription") || pathnames.includes("add-billing") || pathnames.includes("edit-billing") ? "active" : ""}`}>
              <a  className={isSideMenu == "doctors" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="doctors" ? "": "doctors")} >Doctors <i className="fas fa-chevron-down" /></a>              
                  { isSideMenu == "doctors" ?   
              <ul className={`submenu`}>
                <li className={pathnames.includes("doctor-dashboard") ? "active" : ""}>
                  <Link to="/doctor/doctor-dashboard" onClick={() => onhandleCloseMenu()}>Doctor Dashboard</Link>
                </li>
                <li className={pathnames.includes("appointments") ? "active" : ""}>
                  <Link to="/doctor/appointments" onClick={() => onhandleCloseMenu()}>Appointments</Link>
                </li>
                <li className={pathnames.includes("schedule-timing") ? "active" : ""}>
                  <Link to="/doctor/schedule-timing" onClick={() => onhandleCloseMenu()}>Schedule Timing</Link>
                </li>
                <li className={pathnames.includes("my-patients") ? "active" : ""}>
                  <Link to="/doctor/my-patients" onClick={() => onhandleCloseMenu()}>Patients List</Link>
                </li>
                <li className={pathnames.includes("patient-profile") || pathnames.includes("add-prescription") || pathnames.includes("edit-prescription") || pathnames.includes("add-billing") || pathnames.includes("edit-billing") ? "active" : ""}>
                  <Link to="/doctor/transaction" onClick={() => onhandleCloseMenu()}>Patients Profile</Link>
                </li>
                <li className={pathnames.includes("chat-doctor") ? "active" : ""}>
                  <Link to="/doctor/chat-doctor" onClick={() => onhandleCloseMenu()}>Chat</Link>
                </li>
                <li className={pathnames.includes("invoice") ? "active" : ""}>
                  <Link to="/doctor/invoice" onClick={() => onhandleCloseMenu()}>Invoices</Link>
                </li>
                <li className={pathnames.includes("profile-setting") ? "active" : ""}>
                  <Link to="/doctor/profile-setting" onClick={() => onhandleCloseMenu()}>Profile Settings</Link>
                </li>
                <li className={pathnames.includes("review") ? "active" : ""}>
                  <Link to="/doctor/review" onClick={() => onhandleCloseMenu()}>Reviews</Link>
                </li>
                <li className={pathnames.includes("doctor-register") ? "active" : ""}>
                  <Link to="/doctor/doctor-register" onClick={() => onhandleCloseMenu()}>Doctor Register</Link>
                </li>
              </ul>
              :""
                }
            </li>
            <li className={`has-submenu ${url.includes("/patient") ? "active" : ""}`}>
                <a  className={isSideMenu == "patients" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="patients" ? "": "patients")} >Patients <i className="fas fa-chevron-down" /></a>              
                  { isSideMenu == "patients" ?  
                  
                  <ul className={`submenu`}>
                    <li className={`has-submenu ${pathnames.includes("doctor") && !pathnames.includes("doctor-profile") && !pathnames.includes("search-doctor") ? "" : ""}`}>
                      <a href="#0" className={isSideMenutwo == "doctor" ? "subdrop" : ""} onClick={()=> toggleSidebartwo(isSideMenutwo =="doctor" ? "": "doctor")}>Doctors </a>              
                  { isSideMenutwo == "doctor" ?  
                  <ul className="submenu">
                    <li className={pathnames.includes("doctor-grid") ? "active" : ""}>
                      <Link to="/patient/doctor-grid" onClick={()=>onhandleCloseMenu()}>Map Grid</Link>
                    </li>
                    <li className={pathnames.includes("doctor-list") ? "active" : ""}>
                      <Link to="/patient/doctor-list" onClick={()=>onhandleCloseMenu()}>Map List</Link>
                    </li>
                  </ul>:""
                  }
                    </li>
                    <li className={pathnames.includes("search-doctor") ? "active" : ""}>
                      <Link to="/patient/search-doctor" onClick={()=>onhandleCloseMenu()}>Search Doctor</Link>
                    </li>
                    <li className={pathnames.includes("doctor-profile") ? "active" : ""}>
                      <Link to="/patient/doctor-profile" onClick={()=>onhandleCloseMenu()}>Doctor Profile</Link>
                    </li>
                    <li className={pathnames.includes("booking") && !pathnames.includes("booking-success") ? "active" : ""}>
                      <Link to="/patient/booking" onClick={()=>onhandleCloseMenu()}>Booking</Link>
                    </li>
                    <li className={pathnames.includes("checkout") ? "active" : ""}>
                      <Link to="/patient/checkout" onClick={()=>onhandleCloseMenu()}>Checkout</Link>
                    </li>
                    <li className={pathnames.includes("booking-success") ? "active" : ""}>
                      <Link to="/patient/booking-success" onClick={()=>onhandleCloseMenu()}>Booking Success</Link>
                    </li>
                    <li className={pathnames.includes("dashboard") ? "active" : ""}>
                      <Link to="/patient/dashboard" onClick={()=>onhandleCloseMenu()}>Patient Dashboard</Link>
                    </li>
                    <li className={pathnames.includes("favourites") ? "active" : ""}>
                      <Link to="/patient/favourites" onClick={()=>onhandleCloseMenu()}>Favourites</Link>
                    </li>
                    <li className={pathnames.includes("patient-chat") ? "active" : ""}>
                      <Link to="/patient/patient-chat" onClick={()=>onhandleCloseMenu()}>Chat</Link>
                    </li>
                    <li className={pathnames.includes("profile") && !pathnames.includes("doctor-profile") ? "active" : ""}>
                      <Link to="/patient/profile" onClick={()=>onhandleCloseMenu()}>Profile Settings</Link>
                    </li>
                    <li className={pathnames.includes("change-password") ? "active" : ""}>
                      <Link to="/patient/change-password" onClick={()=>onhandleCloseMenu()}>Change Password</Link>
                    </li>
                  </ul>:""
                  }
              </li>
              <li className={`has-submenu ${url.includes("/pages") ? "active" : ""}`}>
              <a  className={isSideMenu == "pages" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="pages" ? "": "pages")} >Pages <i className="fas fa-chevron-down" /></a>              
                { isSideMenu == "pages" ?  
                
                <ul className={`submenu`}>
                  <li className={`${(pathnames).includes("/voice-call") ? "active" : ""}`}>
                    <Link to="/pages/voice-call" onClick={()=>onhandleCloseMenu()}>Voice Call</Link>
                  </li>
                  <li className={`${(pathnames).includes("/video-call") ? "active" : ""}`}>
                    <Link to="/pages/video-call" onClick={()=>onhandleCloseMenu()}>Video Call</Link>
                  </li>
  
                  <li className={`${(pathnames).includes("/calendar") ? "active" : ""}`}>
                    <Link to="/pages/calendar" onClick={()=>onhandleCloseMenu()}>Calendar</Link>
                  </li>
                  <li className={`${(pathnames).includes("/component") ? "active" : ""}`}>
                    <Link to="/pages/components" onClick={()=>onhandleCloseMenu()}>Components</Link>
                  </li>
                  
  
                  <li className={`has-submenu ${(pathnames).includes("/invoice-view") ? "active" : ""}`}>
                  <a href="#0" className={isSideMenuone == "invoices" ? "subdrop" : ""} onClick={()=> toggleSidebarone(isSideMenuone =="invoices" ? "": "invoices")} >Invoices </a>              
                    { isSideMenuone == "invoices" ?  
                    <ul className="submenu">
                      <li className={pathnames.includes("invoice") ? "active" : ""}><Link to="/pages/invoice" onClick={()=>onhandleCloseMenu()}>Invoices</Link></li>
                      <li className={pathnames.includes("-view") ? "active" : ""}><Link to="/pages/invoice-view" onClick={()=>onhandleCloseMenu()}>Invoice View</Link></li>
                    </ul>:""
                    }
                  </li>
                  <li className={`${(pathnames).includes("/blank-page") ? "active" : ""}`}>
                    <Link to="/pages/blank-page" onClick={()=>onhandleCloseMenu()}>Starter Page</Link>
                  </li>
                  <li className={pathnames.includes("/aboutus") ? "active" : ""}><Link to="/aboutus" onClick={()=>onhandleCloseMenu()}>About Us</Link></li>
                  <li className={pathnames.includes("/contactus") ? "active" : ""}><Link to="/contactus" onClick={()=>onhandleCloseMenu()}>Contact Us</Link></li>


                  <li className={pathnames.includes("login") ? "active" : ""}>
                    <Link to="/login" onClick={()=>onhandleCloseMenu()}>Login</Link>
                  </li>
                  <li className={pathnames.includes("/register") ? "active" : ""}>
                    <Link to="/register"onClick={()=>onhandleCloseMenu()}>Register</Link>
                  </li>
                  <li className={`${pathnames === "/forgot-password" ? "active" : ""}`}>
                    <Link to="/forgot-password" onClick={()=>onhandleCloseMenu()}>Forgot Password</Link>
                  </li>
                </ul>
                :""
                }
              </li>
              <li className={`has-submenu ${url.includes("/blog") ? "active" : ""}`}>
              <a  className={isSideMenu == "blog" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="blog" ? "": "blog")} >Blog <i className="fas fa-chevron-down" /></a>              
                { isSideMenu == "blog" ?                                      
                <ul className="submenu">
                  <li className={pathnames.includes("blog-list") ? "active" : ""}>
                    <Link to="/blog/blog-list" onClick={()=>onhandleCloseMenu()}>Blog List</Link>
                  </li>
                  <li className={pathnames.includes("blog-grid") ? "active" : ""}>
                    <Link to="/blog/blog-grid" onClick={()=>onhandleCloseMenu()}>Blog Grid</Link>
                  </li>
                  <li className={pathnames.includes("blog-details") ? "active" : ""}>
                    <Link to="/blog/blog-details" onClick={()=>onhandleCloseMenu()}>Blog Details</Link>
                  </li>
                </ul>:""
                }
              </li>
            <li><Link to="/admin" target="_blank" >Admin</Link></li>
            <li className="login-link" onClick={() => onhandleCloseMenu()}>
              <Link to="/">Login / Signup</Link>
            </li>
          </ul>
        </div>
        <ul className="nav header-navbar-rht">
   

        {props.location.pathname != "/register" && props.location.pathname != "/doctor/doctor-register" && props.location.pathname != "/home" && pathnames != "/template-pediatric/"  && props.location.pathname != "/blog/blog-list" && props.location.pathname != "/blog/blog-grid" && props.location.pathname != "/blog/blog-details" && props.location.pathname != "/aboutus"  && props.location.pathname != "/contactus"  && props.location.pathname != "/pages/calendar" && props.location.pathname != "/patient/doctor-profile" && props.location.pathname != "/patient/booking" && props.location.pathname != "/patient/booking-success" && props.location.pathname != "/forgot-password" && props.location.pathname != "/patient/checkout" && props.location.pathname != "/login" ? (
            <>
              <Dropdown className="user-drop nav-item dropdown has-arrow ">
                <Dropdown.Toggle id="dropdown-basic">
                  <img
                    className="rounded-circle"
                    src={IMG01}
                    width="31"
                    alt="Darren Elder"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <div className="user-header">
                    <div className="avatar avatar-sm">
                      <img
                        src={IMG01}
                        alt="User"
                        className="avatar-img rounded-circle"
                      />
                    </div>
                    <div className="user-text">
                      <h6>Darren Elder</h6>
                      <p className="text-muted mb-0">Doctor</p>
                    </div>
                  </div>
                  <Dropdown.Item href={`${config.publicPath}doctor/doctor-dashboard`}>
                    Dashboard
                  </Dropdown.Item>
                  <Dropdown.Item href={`${config.publicPath}doctor/profile-setting`}>
                    Profile Settings
                  </Dropdown.Item>
                  <Dropdown.Item href={`${config.publicPath}login`}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link header-login">
                  login / Signup{" "}
                </Link>
              </li>{" "}
            </>
          )}
        </ul>
      </nav>
        </header>
  );
};

export default Header;
