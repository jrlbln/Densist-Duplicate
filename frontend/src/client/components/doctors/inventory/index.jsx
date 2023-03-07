import React from "react";
import DoctorSidebar from "../sidebar";
import { Link } from "react-router-dom";
import TableComponent from "./table";






const Inventory = () => {
	const [show, setShow] = React.useState(false);
	const callBack = payload => {
        setShow(payload)
    }


  return (
    <div>
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
										Profile
									</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">Profile</h2>
						</div>
					</div>
				</div>
			</div>

			<div className="content">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar dct-dashbd-lft">
                            <DoctorSidebar/>
						</div>
						<div className="col-md-7 col-lg-8 col-xl-9 dct-appoinment">
							<div className="card">
								<div className="card-body pt-0">
								<div className="user-tabs">
										<ul className="nav nav-tabs nav-tabs-bottom nav-justified flex-wrap">
											<li className="nav-item">
												<a className="nav-link active" href="#pat_appointments" data-bs-toggle="tab">Inventory Masterlist</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" href="#pres" data-bs-toggle="tab"><span>Restock</span></a>
											</li>
											<li className="nav-item">
												<a className="nav-link" href="#medical" data-bs-toggle="tab"><span className="med-records">Add New Item</span></a>
											</li>
											<li className="nav-item">
												<a className="nav-link" href="#billing" data-bs-toggle="tab"><span>Stock Management</span></a>
											</li>
										</ul>
									</div>
									<div className="tab-content">

										{/* <!-- Appointment Tab --> */}
										<div className="tab-pane fade show active" id="pat_appointments" >
                                            <TableComponent callBack= {callBack} /> 
										</div>
										{/* <!-- /Appointment Tab -->
										
										<!-- Prescription Tab --> */}
										<div className="tab-pane fade" id="pres">
											<div className="text-end">
												<Link to="#"className="add-new-btn" data-bs-toggle="modal" data-bs-target="#add_medical_records">Add Prescription</Link>
											</div>
											<div className="card card-table mb-0">
                                              <TableComponent callBack= {callBack} /> 
											</div>
										</div>
										{/* <!-- /Prescription Tab -->

										<!-- Medical Records Tab --> */}
										<div className="tab-pane fade" id="medical">
											<div className="text-end">
												<Link to="#" className="add-new-btn" data-bs-toggle="modal" data-bs-target="#add_medical_records">Add Medical Records</Link>
											</div>
											<div className="card card-table mb-0">
                                              <TableComponent callBack= {callBack} /> 
											</div>
										</div>
										{/* <!-- /Medical Records Tab -->
										
										<!-- Billing Tab --> */}
										<div className="tab-pane" id="billing">
											<div className="text-end">
												<Link className="add-new-btn" to="/add-billing">Add Billing</Link>
											</div>
											<div className="card card-table mb-0">
                                              <TableComponent callBack= {callBack} /> 
											</div>
										</div>
										{/* <!-- Billing Tab --> */}

									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>

			<div  className="modal fade custom-modal" id="add_medical_records">
				<div className="modal-dialog modal-dialog-centered modal-lg" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h3 className="modal-title">Medical Records</h3>
							<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						</div>
						<form>
							<div className="modal-body">
								<div className="form-group">
									<label>Date</label>
									<input type="text" className="form-control datetimepicker" defaultValue="31-10-2019" />
								</div>
								<div className="form-group">
									<label>Description ( Optional )</label>
									<textarea className="form-control"></textarea>
								</div>
								<div className="form-group">
									<label>Upload File</label>
									<input type="file" className="form-control" />
								</div>
								<div className="submit-section text-center">
									<button type="submit" className="btn btn-primary submit-btn">Submit</button>
									<button type="button" className="btn btn-secondary submit-btn" data-bs-dismiss="modal">Cancel</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
	</div>
  )
}

export default Inventory







