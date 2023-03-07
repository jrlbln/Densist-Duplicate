import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardSidebar from '../dashboard/sidebar/sidebar';
import StickyBox from 'react-sticky-box';
const PatientAppointment = () => {
  return (
    <div className="content">
			<div className="container-fluid content-page">
				<div className="row">
					<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
						<StickyBox offsetTop={20} offsetBottom={20}>
							<DashboardSidebar />
						</StickyBox>
					</div>

					<div className="col-md-7 col-lg-8 col-xl-9">
					
						<div className="card call-shadow">
							<div className="card-body user-tabs pt-0">
								
								<div className="nav-item"  title="Appointments">
											<div className="card card-table mb-0">
												<div className="card-body">
													<div className="table-responsive">
														<table className="table table-hover table-center mb-0">
															<thead>
																<tr>
																	<th>Doctor</th>
																	<th>Appointment Date</th>
																	<th>Duration</th>
																	<th>Amount</th>
																	<th>Service</th>
																	<th>Status</th>
																	
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>
																		<h2 className="table-avatar">
																			<Link
																				to="/patient/doctor-profile"
																				className="avatar avatar-sm  me-2"
																			>
																				<img
																					className="avatar-img rounded-circle"
																					
																					alt="User"
																				/>
																			</Link>
																			<Link to="/patient/doctor-profile">
																				Dr. Ruby Perrin{' '}
																				<span>Dental</span>
																			</Link>
																		</h2>
																	</td>
																	<td>
																		14 Nov 2019{' '}
																		<span className="d-block text-info">
																			10.00 AM
																		</span>
																	</td>
																	<td>12 Nov 2019</td>
																	<td>$160</td>
																	<td>16 Nov 2019</td>
																	<td>
																		<span className="badge rounded-pill bg-success-light">
																			Confirm
																		</span>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default PatientAppointment