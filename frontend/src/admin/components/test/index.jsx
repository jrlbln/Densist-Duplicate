import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Test extends Component {
	render() {
		return (
			<>
				<div className="sidebar" id="sidebar">
					<div className="sidebar-inner slimscroll">
						<div id="sidebar-menu" className="sidebar-menu">
							<ul>
								<li className="menu-title">
									<span>Main</span>
								</li>
								<li className="active">
									<Link to="/admin">
										<i className="fe fe-home"></i> <span>Dashboard</span>
									</Link>
								</li>
								<li>
									<Link to="appointment-list.html">
										<i className="fe fe-layout"></i> <span>Appointments</span>
									</Link>
								</li>
								<li>
									<Link to="specialities.html">
										<i className="fe fe-users"></i> <span>Specialities</span>
									</Link>
								</li>
								<li>
									<Link to="doctor-list.html">
										<i className="fe fe-user-plus"></i> <span>Doctors</span>
									</Link>
								</li>
								<li>
									<Link to="patient-list.html">
										<i className="fe fe-user"></i> <span>Patients</span>
									</Link>
								</li>
								<li>
									<Link to="reviews.html">
										<i className="fe fe-star-o"></i> <span>Reviews</span>
									</Link>
								</li>
								<li>
									<Link to="transactions-list.html">
										<i className="fe fe-activity"></i> <span>Transactions</span>
									</Link>
								</li>
								<li>
									<Link to="settings.html">
										<i className="fe fe-vector"></i> <span>Settings</span>
									</Link>
								</li>
								<li className="submenu">
									<Link to="#">
										<i className="fe fe-document"></i> <span> Reports</span>{' '}
										<span className="menu-arrow"></span>
									</Link>
									<ul>
										<li>
											<Link to="invoice-report.html">Invoice Reports</Link>
										</li>
									</ul>
								</li>
								<li className="menu-title">
									<span>Pages</span>
								</li>
								<li>
									<Link to="profile.html">
										<i className="fe fe-user-plus"></i> <span>Profile</span>
									</Link>
								</li>
								<li className="submenu">
									<Link to="#">
										<i className="fe fe-document"></i>{' '}
										<span> Authentication </span>{' '}
										<span className="menu-arrow"></span>
									</Link>
									<ul>
										<li>
											<Link to="login.html"> Login </Link>
										</li>
										<li>
											<Link to="register.html"> Register </Link>
										</li>
										<li>
											<Link to="forgot-password.html"> Forgot Password </Link>
										</li>
										<li>
											<Link to="lock-screen.html"> Lock Screen </Link>
										</li>
									</ul>
								</li>
								<li className="submenu">
									<Link to="#">
										<i className="fe fe-warning"></i> <span> Error Pages </span>{' '}
										<span className="menu-arrow"></span>
									</Link>
									<ul>
										<li>
											<Link to="error-404.html">404 Error </Link>
										</li>
										<li>
											<Link to="error-500.html">500 Error </Link>
										</li>
									</ul>
								</li>
								<li>
									<Link to="blank-page.html">
										<i className="fe fe-file"></i> <span>Blank Page</span>
									</Link>
								</li>
								<li className="menu-title">
									<span>UI Interface</span>
								</li>
								<li>
									<Link to="components.html">
										<i className="fe fe-vector"></i> <span>Components</span>
									</Link>
								</li>
								<li className="submenu">
									<Link to="#">
										<i className="fe fe-layout"></i> <span> Forms </span>{' '}
										<span className="menu-arrow"></span>
									</Link>
									<ul>
										<li>
											<Link to="form-basic-inputs.html">Basic Inputs </Link>
										</li>
										<li>
											<Link to="form-input-groups.html">Input Groups </Link>
										</li>
										<li>
											<Link to="form-horizontal.html">Horizontal Form </Link>
										</li>
										<li>
											<Link to="form-vertical.html"> Vertical Form </Link>
										</li>
										<li>
											<Link to="form-mask.html"> Form Mask </Link>
										</li>
										<li>
											<Link to="form-validation.html"> Form Validation </Link>
										</li>
									</ul>
								</li>
								<li className="submenu">
									<Link to="#">
										<i className="fe fe-table"></i> <span> Tables </span>{' '}
										<span className="menu-arrow"></span>
									</Link>
									<ul>
										<li>
											<Link to="tables-basic.html">Basic Tables </Link>
										</li>
										<li>
											<Link to="data-tables.html">Data Table </Link>
										</li>
									</ul>
								</li>
								<li className="submenu">
									<Link to="#0">
										<i className="fe fe-code"></i> <span>Multi Level</span>{' '}
										<span className="menu-arrow"></span>
									</Link>
									<ul>
										<li className="submenu">
											<Link to="#0">
												{' '}
												<span>Level 1</span>{' '}
												<span className="menu-arrow"></span>
											</Link>
											<ul>
												<li>
													<Link to="#0">
														<span>Level 2</span>
													</Link>
												</li>
												<li className="submenu">
													<Link to="#0">
														{' '}
														<span> Level 2</span>{' '}
														<span className="menu-arrow"></span>
													</Link>
													<ul>
														<li>
															<Link to="#0">Level 3</Link>
														</li>
														<li>
															<Link to="#0">Level 3</Link>
														</li>
													</ul>
												</li>
												<li>
													<Link to="#0">
														{' '}
														<span>Level 2</span>
													</Link>
												</li>
											</ul>
										</li>
										<li>
											<Link to="#0">
												{' '}
												<span>Level 1</span>
											</Link>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Test;
