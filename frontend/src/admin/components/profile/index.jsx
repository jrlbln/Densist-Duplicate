import React, { useState, useEffect } from 'react';
import SidebarNav from '../sidebar';
import IMG01 from '../../assets/images/profiles/avatar-01.jpg'
import { Link } from 'react-router-dom';
import { Tabs, Tab, key } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import DatePicker from "react-datepicker";

const Profile = () => {

	const [select, setSelect] = useState();
	const [show, setShow] = useState();
	const handleSelect = (key) => {

		setSelect({ key })
	}
	const [date, setDate] = useState(new Date());
	const handleChange = (date) => {
		setDate(date)
	}

	return (
		<div>
			<SidebarNav />
			<div className="page-wrapper">
				<div className="content container-fluid">

					<div className="page-header">
						<div className="row">
							<div className="col">
								<h3 className="page-title">Profile</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/admin">Dashboard</Link></li>
									<li className="breadcrumb-item active">Profile</li>
								</ul>
							</div>
						</div>
					</div>
					{/* page header */}
					<div className="row">
						<div className="col-md-12">
							<div className="profile-header">
								<div className="row align-items-center">
									<div className="col-auto profile-image">
										<Link to="#0">
											<img className="rounded-circle" alt="User" src={IMG01} />
										</Link>
									</div>
									<div className="col ml-md-n2 profile-user-info">
										<h4 className="user-name mb-0">James Ballenger</h4>
										<h6 className="text-muted">ryantaylor@admin.com</h6>
										<div className="user-Location"><i className="fa fa-map-marker" aria-hidden="true"></i> Florida, United States</div>
										<div className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
									</div>
									<div className="col-auto profile-btn">

										<Link to="#0" className="btn btn-primary" >
											Edit
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div> {/* row */}

					<Tabs
						className="profile tab-view"
						activeKey={key}
						onSelect={handleSelect}
						id="controlled-tab-example"
					>


						<Tab className="nav-link" eventKey={1} title="About">
							<div className="row">
								<div className="col-lg-12">
									<div className="card">
										<div className="card-body content-left">
											<h5 className="card-title d-flex justify-content-between">
												<span>Personal Details</span>
												<a className="edit-link" data-bs-toggle="modal" href="#edit_personal_details"><i className="fa fa-edit me-1"></i>Edit</a>
											</h5>
											<div className="row">
												<p className="col-sm-2 text-muted text-sm-end mb-0 mb-sm-3">Name</p>
												<p className="col-sm-10">John Doe</p>
											</div>
											<div className="row">
												<p className="col-sm-2 text-muted text-sm-end mb-0 mb-sm-3">Date of Birth</p>
												<p className="col-sm-10">24 Jul 1983</p>
											</div>
											<div className="row">
												<p className="col-sm-2 text-muted text-sm-end mb-0 mb-sm-3">Email ID</p>
												<p className="col-sm-10">johndoe@example.com</p>
											</div>
											<div className="row">
												<p className="col-sm-2 text-muted text-sm-end mb-0 mb-sm-3">Mobile</p>
												<p className="col-sm-10">305-310-5857</p>
											</div>
											<div className="row">
												<p className="col-sm-2 text-muted text-sm-end mb-0">Address</p>
												<p className="col-sm-10 mb-0">4663  Agriculture Lane,<br />
													Miami,<br />
													Florida - 33165,<br />
													United States.</p>
											</div>
										</div>
									</div>


									<div className="modal fade" id="edit_personal_details" aria-hidden="true" role="dialog">
										<div className="modal-dialog modal-dialog-centered" role="document" >
											<div className="modal-content">
												<div className="modal-header">
													<h5 className="modal-title">Personal Details</h5>
													<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
													</button>
												</div>
												<div className="modal-body">
													<form>
														<div className="row form-row">
															<div className="col-12 col-sm-6">
																<div className="form-group">
																	<label>First Name</label>
																	<input type="text" readOnly={true} className="form-control" />
																</div>
															</div>
															<div className="col-12 col-sm-6">
																<div className="form-group">
																	<label>Last Name</label>
																	<input type="text" readOnly={true} className="form-control" />
																</div>
															</div>
															<div className="col-12">
																<div className="form-group">
																	<label>Date of Birth</label>
																	<div className="cal-icon">
																		<DatePicker
																			selected={date}
																			onChange={handleChange}
																			className="form-control date-icon"
																			placeholder="DD/MM/YYYY"
																		/>
																	</div>
																</div>
															</div>
															<div className="col-12 col-sm-6">
																<div className="form-group">
																	<label>Email ID</label>
																	<input type="email" readOnly={true} className="form-control"
																		defaultValue="johndoe@example.com" />
																</div>
															</div>
															<div className="col-12 col-sm-6">
																<div className="form-group">
																	<label>Mobile</label>
																	<input type="text" readOnly={true} defaultValue="+1 202-555-0125" className="form-control" />
																</div>
															</div>
															<div className="col-12">
																<h5 className="form-title"><span>Address</span></h5>
															</div>
															<div className="col-12">
																<div className="form-group">
																	<label>Address</label>
																	<input type="text" readOnly={true} className="form-control"
																		defaultValue="4663 Agriculture Lane" />
																</div>
															</div>
															<div className="col-12 col-sm-6">
																<div className="form-group">
																	<label>City</label>
																	<input type="text" readOnly={true} className="form-control" />
																</div>
															</div>
															<div className="col-12 col-sm-6">
																<div className="form-group">
																	<label>State</label>
																	<input type="text" readOnly={true} className="form-control" />
																</div>
															</div>
															<div className="col-12 col-sm-6">
																<div className="form-group">
																	<label>Zip Code</label>
																	<input type="text" readOnly={true} className="form-control" />
																</div>
															</div>
															<div className="col-12 col-sm-6">
																<div className="form-group">
																	<label>Country</label>
																	<input type="text" readOnly={true} className="form-control" />
																</div>
															</div>
														</div>
														<button type="submit" className="btn btn-primary btn-block">Save Changes</button>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

						</Tab>

						<Tab className="nav-item" eventKey={2} title="Password">
							<div className="row">
								<div className="col-lg-12">
									<div className="card">
										<div className="card-body">
											<h5 className="card-title">Change Password</h5>
											<div className="row">
												<div className="col-md-10 col-lg-6">
													<form>
														<div className="form-group">
															<label>Old Password</label>
															<input type="password" onChange={(e) => console.log()} className="form-control" />
														</div>
														<div className="form-group">
															<label>New Password</label>
															<input type="password" onChange={(e) => console.log()} className="form-control" />
														</div>
														<div className="form-group">
															<label>Confirm Password</label>
															<input type="password" onChange={(e) => console.log()} className="form-control" />
														</div>
														<button className="btn btn-primary" type="submit">Save Changes</button>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Tab>

					</Tabs>

				</div>
			</div>
			{/* modal */}
			<div className="modal fade" id="edit_personal_details" aria-hidden="true" role="dialog">
				<div className="modal-dialog modal-dialog-centered" role="document" >
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Personal Details</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<form>
								<div className="row form-row">
									<div className="col-12 col-sm-6">
										<div className="form-group">
											<label>First Name</label>
											<input type="text" className="form-control" defaultValue="John" />
										</div>
									</div>
									<div className="col-12 col-sm-6">
										<div className="form-group">
											<label>Last Name</label>
											<input type="text" className="form-control" defaultValue="Doe" />
										</div>
									</div>
									<div className="col-12">
										<div className="form-group">
											<label>Date of Birth</label>
											<div className="cal-icon">
												<input type="text" className="form-control" defaultValue="24-07-1983" />

											</div>
										</div>
									</div>
									<div className="col-12 col-sm-6">
										<div className="form-group">
											<label>Email ID</label>
											<input type="email" className="form-control" defaultValue="johndoe@example.com" />
										</div>
									</div>
									<div className="col-12 col-sm-6">
										<div className="form-group">
											<label>Mobile</label>
											<input type="text" defaultValue="+1 202-555-0125" className="form-control" />
										</div>
									</div>
									<div className="col-12">
										<h5 className="form-title"><span>Address</span></h5>
									</div>
									<div className="col-12">
										<div className="form-group">
											<label>Address</label>
											<input type="text" className="form-control" defaultValue="4663 Agriculture Lane" />
										</div>
									</div>
									<div className="col-12 col-sm-6">
										<div className="form-group">
											<label>City</label>
											<input type="text" className="form-control" defaultValue="Miami" />
										</div>
									</div>
									<div className="col-12 col-sm-6">
										<div className="form-group">
											<label>State</label>
											<input type="text" className="form-control" defaultValue="Florida" />
										</div>
									</div>
									<div className="col-12 col-sm-6">
										<div className="form-group">
											<label>Zip Code</label>
											<input type="text" className="form-control" defaultValue="22434" />
										</div>
									</div>
									<div className="col-12 col-sm-6">
										<div className="form-group">
											<label>Country</label>
											<input type="text" className="form-control" defaultValue="United States" />
										</div>
									</div>
								</div>
								<button type="submit" className="btn btn-primary w-100">Save Changes</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			{/* modal */}
		</div>

	);
}


export default Profile;