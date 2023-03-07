import React, { useEffect, useState, } from 'react';
import { Link, withRouter } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";

const SidebarNav = (props) => {

  let pathname = props.location.pathname;

  const [isSideMenu, setSideMenu] = useState("");
  const [isSideMenuNew, setSideMenuNew] = useState("");
  const [isSideMenuTwo, setSideMenuTwo] = useState("");
  const toggleSidebar = (value) => {
    console.log(value);
    setSideMenu(value);
  };

  const toggleSidebarNew = (value) => {
    console.log(value);
    setSideMenuNew(value);

  };
  const toggleSidebarTwo = (value) => {
    console.log(value);
    setSideMenuTwo(value);

  };

  return (
    <>
      <div className="sidebar" id="sidebar">
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          autoHeight
          autoHeightMin={0}
          autoHeightMax="95vh"
          thumbMinSize={30}
          universal={false}
          hideTracksWhenNotNeeded={true}
        >
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                <li className="menu-title">
                  <span>Main</span>
                </li>
                <li className={pathname === '/admin' ? "active" : ""}>
                  <Link to="/admin"><i className="fe fe-home" /> <span>Dashboard</span></Link>
                </li>
                <li className={pathname.includes('appointments') ? "active" : ""}>
                  <Link to="/admin/appointments"><i className="fe fe-layout" /> <span>Appointments</span></Link>
                </li>
                <li className={pathname.includes('specialities') ? "active" : ""}>
                  <Link to="/admin/specialities"><i className="fe fe-users" /> <span>Specialities</span></Link>
                </li>
                <li className={pathname.includes('doctors') ? "active" : ""}>
                  <Link to="/admin/doctors"><i className="fe fe-user-plus" /> <span>Doctors</span></Link>
                </li>
                <li className={pathname.includes('patients') ? "active" : ""}>
                  <Link to="/admin/patients"><i className="fe fe-user" /> <span>Patients</span></Link>
                </li>
                <li className={pathname.includes('reviews') ? "active" : ""}>
                  <Link to="/admin/reviews"><i className="fe fe-star-o" /> <span>Reviews</span></Link>
                </li>
                <li className={pathname.includes('transaction') ? "active" : ""}>
                  <Link to="/admin/transaction"><i className="fe fe-activity" /> <span>Transactions</span></Link>
                </li>
                <li className={pathname.includes('settings') ? "active" : ""}>
                  <Link to="/admin/settings"><i className="fe fe-vector" /> <span>Settings</span></Link>
                </li>
                <li className="submenu">
                  <a href="#" className= {isSideMenu == "reports" ? "subdrop" : ""} onClick={()=>toggleSidebar(isSideMenu=="reports" ? "" : "reports")}><i className="fe fe-document" /> <span> Reports</span> <span className="menu-arrow" /></a>
                  {isSideMenu == "reports" ?
                  <ul style={{ display: isSideMenu== "reports"? "block" : "none" }}>
                    <li><Link to="/admin/invoice-report" className={pathname.includes('invoice-report') ? "active" : ""}>Invoice Reports</Link></li>
                  </ul>
                  : ""
							}
                </li>
                <li className="menu-title">
                  <span>Pages</span>
                </li>
                <li className={pathname.includes('profile') ? "active" : ""}>
                  <Link to="/admin/profile"><i className="fe fe-user-plus" /> <span>Profile</span></Link>
                </li>
                <li className="submenu">
                  <a href="#" className= {isSideMenu == "authentication" ? "subdrop" : ""} onClick={()=>toggleSidebar(isSideMenu=="authentication" ? "" : "authentication")}><i className="fe fe-document" /> <span> Authentication </span> <span className="menu-arrow" /></a>
                  <ul style={{ display: isSideMenu== "authentication"? "block" : "none" }}>
                    <li className={pathname.includes('login') ? "active" : ""}><Link to="/admin/login"> Login </Link></li>
                    <li className={pathname.includes('register') ? "active" : ""}><Link to="/admin/register"> Register </Link></li>
                    <li className={pathname.includes('forgotPassword') ? "active" : ""}><Link to="/admin/forgotPassword"> Forgot Password </Link></li>
                    <li className={pathname.includes('lockscreen') ? "active" : ""}><Link to="/admin/lockscreen"> Lock Screen </Link></li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#" className= {isSideMenu == "errorpages" ? "subdrop" : ""} onClick={()=>toggleSidebar(isSideMenu=="errorpages" ? "" : "errorpages")}><i className="fe fe-warning" /> <span> Error Pages </span> <span className="menu-arrow" /></a>
                  <ul style={{ display: isSideMenu== "errorpages"? "block" : "none" }}>
                    <li className={pathname.includes('404') ? "active" : ""}><Link to="/admin/404">404 Error </Link></li>
                    <li className={pathname.includes('500') ? "active" : ""}><Link to="/admin/500">500 Error </Link></li>
                  </ul>
                </li>
                <li className={pathname.includes('blank-page') ? "active" : ""}>
                  <Link to="/admin/blank-page"><i className="fe fe-file" /> <span>Blank Page</span></Link>
                </li>
                <li className="menu-title">
                  <span>UI Interface</span>
                </li>
                <li className={pathname.includes('components') ? "active" : ""}>
                  <Link to="/admin/components"><i className="fe fe-vector" /> <span>Components</span></Link>
                </li>
                <li className="submenu">
                  <a href="#" className= {isSideMenu == "forms" ? "subdrop" : ""} onClick={()=>toggleSidebar(isSideMenu=="forms" ? "" : "forms")}><i className="fe fe-layout" /> <span> Forms </span> <span className="menu-arrow" /></a>
                  <ul style={{ display: isSideMenu== "forms"? "block" : "none" }}>
                    <li className={pathname.includes('basic-input') ? "active" : ""}><Link to="/admin/basic-input">Basic Inputs </Link></li>
                    <li className={pathname.includes('form-input-group') ? "active" : ""}><Link to="/admin/form-input-group">Input Groups </Link></li>
                    <li className={pathname.includes('form-horizontal') ? "active" : ""}><Link to="/admin/form-horizontal">Horizontal Form </Link></li>
                    <li className={pathname.includes('form-vertical') ? "active" : ""}><Link to="/admin/form-vertical"> Vertical Form </Link></li>
                    <li className={pathname.includes('form-mask') ? "active" : ""}><Link to="/admin/form-mask"> Form Mask </Link></li>
                    <li className={pathname.includes('form-validation') ? "active" : ""}><Link to="/admin/form-validation"> Form Validation </Link></li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#" className= {isSideMenu == "tables" ? "subdrop" : ""} onClick={()=>toggleSidebar(isSideMenu=="tables" ? "" : "tables")}><i className="fe fe-table" /> <span> Tables </span> <span className="menu-arrow" /></a>
                  <ul style={{ display: isSideMenu== "tables"? "block" : "none" }}>
                    <li className={pathname.includes('tables-basic') ? "active" : ""}><Link to="/admin/tables-basic">Basic Tables </Link></li>
                    <li className={pathname.includes('data-tables') ? "active" : ""}><Link to="/admin/data-tables"> Data Table </Link></li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#"  className= {isSideMenu == "multi" ? "subdrop" : ""} onClick={()=>toggleSidebar(isSideMenu=="multi" ? "" : "multi")}><i className="fe fe-code" /> <span>Multi Level</span> <span className="menu-arrow" /></a>
                  <ul style={{ display: isSideMenu== "multi"? "block" : "none" }}>
                    <li className="submenu">
                      <a href="#" className= {isSideMenuNew == "multi1" ? "subdrop" : ""} onClick={()=>toggleSidebarNew(isSideMenuNew=="multi1" ? "" : "multi1")}> <span>Level 1</span> <span className="menu-arrow" /></a>
                      <ul style={{ display: isSideMenuNew== "multi1"? "block" : "none" }}>
                        <li><a href=""><span>Level 2</span></a></li>
                        <li className="submenu">
                          <a href="#" className= {isSideMenuTwo == "multi1" ? "subdrop" : ""} onClick={()=>toggleSidebarTwo(isSideMenuNew=="multi2" ? "" : "multi2")}> <span> Level 2</span> <span className="menu-arrow" /></a>
                          <ul style={{ display: isSideMenuTwo== "multi2"? "block" : "none" }}>
                            <li><a href="">Level 3</a></li>
                            <li><a href="">Level 3</a></li>
                          </ul>
                        </li>
                        <li><a href=""> <span>Level 2</span></a></li>
                      </ul>
                    </li>
                    <li>
                      <a href=""> <span>Level 1</span></a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </Scrollbars>
      </div>
    </>
  );
}


export default withRouter(SidebarNav);
