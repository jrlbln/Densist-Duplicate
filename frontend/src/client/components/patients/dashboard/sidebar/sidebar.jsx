import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import IMG01 from '../../../../assets/images/patients/patient.jpg';
export const DashboardSidebar = (props) => {
	const location = useLocation();
	console.log(location.pathname,'pathname');
	return (
		<div className="profile-sidebar call-shadow">
			<div className="widget-profile pro-widget-content">
				<div className="profile-info-widget">
					<a href="#0" className="booking-doc-img">
						<img src={IMG01} alt="User" />
					</a>
					<div className="profile-det-info">
						<h3>Richard Wilson</h3>
						<div className="patient-details">
							<h5>
								<i className="fas fa-birthday-cake"></i> 24 Jul 1983, 38 years
							</h5>
							<h5 className="mb-0">
								<i className="fas fa-map-marker-alt"></i> Newyork, USA
							</h5>
						</div>
					</div>
				</div>
			</div>
			<div className="dashboard-widget">
				<nav className="dashboard-menu">
					<ul>
						<li className={location.pathname.includes("/patient/dashboard") ? "active": ""}>
							<Link to="/patient/dashboard">
								<i className="fas fa-columns"></i>
								<span>Dashboard</span>
							</Link>
						</li>
						
						<li className={location.pathname.includes("/patient/appointment") ? "active": ""}>
							<Link to="/patient/appointment">
								<i className="fas fa-calendar-check"></i>
								<span>Appointments</span>
							</Link>
						</li>
						<li className={location.pathname.includes("/patient/transaction") ? "active": ""}>
							<Link to="/patient/transaction">
								<i className="fa fa-address-book"></i>
								<span>Transaction</span>
							</Link>
						</li>
						<li className={location.pathname.includes("/patient/records") ? "active": ""}>
							<Link to="/patient/records">
								<i className="fa fa-address-card"></i>
								<span>Dental Records</span>
							</Link>
						</li>
						{/* <li className={location.pathname.includes("/patient/favourites") ? "active": ""}>
							<Link to="/patient/favourites">
								<i className="fas fa-bookmark"></i>
								<span>Favourites</span>
							</Link>
						</li> */}
						{/* <li className={location.pathname.includes("/doctor/chat-doctor") ? "active": ""}>
							<Link to="/doctor/chat-doctor">
								<i className="fas fa-comments"></i>
								<span>Message</span>
								<small className="unread-msg">23</small>
							</Link>
						</li>
						<li className={location.pathname.includes("/patient/profile") ? "active": ""}>
							<Link to="/patient/profile">
								<i className="fas fa-user-cog"></i>
								<span>Profile Settings</span>
							</Link>
						</li>
						<li className={location.pathname.includes("/patient/change-password") ? "active": ""}>
							<Link to="/patient/change-password">
								<i className="fas fa-lock"></i>
								<span>Change Password</span>
							</Link>
						</li>
						<li>
							<Link to="/">
								<i className="fas fa-sign-out-alt"></i>
								<span>Logout</span>
							</Link>
						</li> */}
					</ul>
				</nav>
			</div>
		</div>
	);
};
export default DashboardSidebar;
