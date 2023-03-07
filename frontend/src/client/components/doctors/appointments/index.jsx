import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import StickyBox from 'react-sticky-box';
import { IMG01, IMG02, IMG03, IMG04, IMG05, IMG06, IMG07, IMG08, IMG010, IMG011 } from './img';
import DoctorSidebar from '../sidebar';
const Appointments = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [showConfirm, setShowConfirm] = useState(false);
	const handleCloseConfirm = () => setShowConfirm(false);
	const handleShowConfirm = () => setShowConfirm(true);

	const [showReject, setShowReject] = useState(false);
	const handleCloseReject = () => setShowReject(false);
	const handleShowReject = () => setShowReject(true);

	return (
		<div className="content-page">
			<div className="breadcrumb-bar">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-md-12 col-12">
							<nav aria-label="breadcrumb" className="page-breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item">
										<Link to="/home">Home</Link>
									</li>
									<li className="breadcrumb-item active" aria-current="page">
										Appointments
									</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">Appointments</h2>
						</div>
					</div>
				</div>
			</div>

			<div className="content">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
							
								<StickyBox offsetTop={50} offsetBottom={20}>
									<DoctorSidebar />
								</StickyBox>

						</div>
						
						
						<div className="col-md-7 col-lg-8 col-xl-9">
							<div className="row">
								<div className="col-md-10 ">Patient Lists</div>
								<div className="col-md-2 ">
									<Link to="/doctor/schedule-timing"><i className="fa fa-cog fa-5"></i> Manage time slots</Link>
								</div>
							</div>
							
							<div className="appointments">
								<div className="appointment-list call-shadow">
									<div className="profile-info-widget">
										<Link
											to="/doctor/transaction"
											className="booking-doc-img"
										>
											<img src={IMG01} alt="User" />
										</Link>
										<div className="profile-det-info">
											<h3>
												<Link to="/doctor/transaction">
													Richard Wilsons
												</Link>
											</h3>
											<div className="patient-details">
												
												
												<h5>
													<i className="far fa-clock"></i> 14 Nov 2019,
													10.00 AM
												</h5>
												<h5>
													<i className="fas fa-map-marker-alt"></i>{' '}
													Newyork, United States
												</h5>
												<h5>
													<i className="fas fa-envelope"></i>{' '}
													richard@example.com
												</h5>
												<h5 className="mb-0">
													<i className="fas fa-phone"></i> +1 923 782 4575
												</h5>
												<h5>
													<i className="fas fa-check"></i> Pasta
												</h5>
											</div>
										</div>
									</div>
									<div className="appointment-action">
										<Link
											to="#0"
											className="btn btn-sm bg-info-light"
											onClick={handleShow}
										>
											<i className="far fa-eye"></i> View
										</Link>
										<Link to="#0" className="btn btn-sm bg-success-light" onClick={handleShowConfirm}>
											<i className="fas fa-check"></i> Accept
										</Link>
										<Link to="#0" className="btn btn-sm bg-danger-light" onClick={handleShowReject}>
											<i className="fas fa-times"></i> Reject
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/*view modal*/}
			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<h5 className="modal-title">Appointment Details</h5>
				</Modal.Header>
				<Modal.Body>
					<ul className="info-details">
						<li>
							<div className="details-header">
								<div className="row">
									<div className="col-md-6">
										<span className="title">#APT0001</span>
										<span className="text">21 Oct 2019 10:00 AM</span>
									</div>
									<div className="col-md-6">
										<div className="text-end">
											<button
												type="button"
												className="btn bg-success-light btn-sm"
												id="topup_status"
											>
												Completed
											</button>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<span className="title">Status:</span>
							<span className="text">Completed</span>
						</li>
						<li>
							<span className="title">Confirm Date:</span>
							<span className="text">29 Jun 2019</span>
						</li>
						<li>
							<span className="title">Paid Amount</span>
							<span className="text">$450</span>
						</li>
					</ul>
				</Modal.Body>
			</Modal>
			{/*view modal*/}
			<Modal show={showConfirm} onHide={handleCloseConfirm} centered>
				<Modal.Header closeButton>
					<h5 className="modal-title">Do you want to confirm?</h5>
				</Modal.Header>
				
				<Modal.Footer>
						<div className="appointment-action" centered>
							
							
										<Link to="#0" className="btn btn-lg bg-success">
											<i className="fas fa-check"></i> Confirm
										</Link>
										<Link to="#0" className="btn btn-lg bg-danger" >
											<i className="fas fa-times"></i> Cancel
										</Link>
							
										
					</div>
				</Modal.Footer>
			</Modal>
			{/*view modal*/}
			<Modal show={showReject} onHide={handleCloseReject} centered>
				<Modal.Header closeButton>
					<h5 className="modal-title">Do you want to reject?</h5>
				</Modal.Header>
				
				<Modal.Footer>
						<div className="appointment-action" centered>
							
							
										<Link to="#0" className="btn btn-lg bg-success">
											<i className="fas fa-check"></i> Confirm
										</Link>
										<Link to="#0" className="btn btn-lg bg-danger" >
											<i className="fas fa-times"></i> Cancel
										</Link>
							
										
					</div>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Appointments;
