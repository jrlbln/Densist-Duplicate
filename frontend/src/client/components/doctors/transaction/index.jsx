import React, { useState, useEffect } from "react";
import DoctorSidebar from "../sidebar";
import { Link } from "react-router-dom";
import { Tab, Tabs, Modal } from "react-bootstrap";
import { IMG01, IMG02, IMG03, IMG04, IMG05, IMG06, IMG07, IMG08, IMG09, IMG10, } from "./img";
import {
	Table,
	Header,
	HeaderRow,
	HeaderCell,
	Body,
	Row,
	Cell,
  } from '@table-library/react-table-library/table';

  const list = [
	{
	  id: '1',
	  name: 'VSCode',
	  deadline: new Date(2020, 1, 17),
	  type: 'SETUP',
	  isComplete: true,
	},
	{
	  id: '2',
	  name: 'JavaScript',
	  deadline: new Date(2020, 2, 28),
	  type: 'LEARN',
	  isComplete: true,
	},
	{
	  id: '3',
	  name: 'React',
	  deadline: new Date(2020, 3, 8),
	  type: 'LEARN',
	  isComplete: false,
	}
  ];

const PatientProfile = (props) => {
	
	const [search, setSearch] = React.useState('');
	const data = {
		nodes: list.filter((item) =>{
			return item.name.toLowerCase().includes(search.toLowerCase()) ||
			item.type.toLowerCase().includes(search.toLowerCase())
			}
		),
		
	  };
	const handleSearch = (event) => {
		console.log(data.nodes);
		console.log(search);
		setSearch(event.target.value);
	};


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
							{/* <PatientSidebar /> */}
							<DoctorSidebar/>
						</div>
						<div className="col-md-7 col-lg-8 col-xl-9 dct-appoinment">
							<div className="card">
								<div className="card-body pt-0">
								<div className="user-tabs">
										<ul className="nav nav-tabs nav-tabs-bottom nav-justified flex-wrap">
											
											<li className="nav-item">
												<a className="nav-link active" href="#pres" data-bs-toggle="tab"><span>Transaction</span></a>
											</li>
											
										</ul>
									</div>
									<div className="tab-content">

										
										{/* <!-- Prescription Tab --> */}
										<div className="tab-pane fade show active" id="pres">
											<div className="row">
												<div className="col-md-3">
													<Link to="#" className="add-new-btn text-center" data-bs-toggle="modal" data-bs-target="#add_transaction">
														<i className="fa fa-plus"></i> Add transactions
													</Link>
												</div><div className="col-md-4"></div>
												<div className="col-md-5 ">
												
														<label htmlFor="search">
															Search name:
														</label>
														<input className="form-control" id="search" type="text" onChange={handleSearch} />
												
												
												</div>
											</div>
											
											<div className="card card-table mt-3">
												<div className="card-body">
													<div className="table-responsive">
														<Table data={data} className="table table-hover table-center mb-1">
														{(tableList) => (
															<><Header>
																	<HeaderRow>
																		<HeaderCell >Dates</HeaderCell>
																		<HeaderCell>Name</HeaderCell>
																		<HeaderCell>Created by </HeaderCell>
																		<HeaderCell>Action</HeaderCell>
																	</HeaderRow>
																</Header>
																<Body>
																		{tableList.map((item) => (
																			<Row key={item.id} item={item}>
																				
																				<Cell>
																					{item.deadline.toLocaleDateString(
																						'en-US',
																						{
																							year: 'numeric',
																							month: '2-digit',
																							day: '2-digit',
																						}
																					)}
																				</Cell>
																				<Cell>{item.name}</Cell>
																				<Cell>{item.type}</Cell>
																				<Cell>
																				<div className="table-action">
																					<Link to="#" className="btn btn-sm bg-primary-light text-center" data-bs-toggle="modal" data-bs-target="#add_transaction">
																						<i className="fa fa-plus"></i> 
																					</Link>
																					<Link to="#" className="btn btn-sm  bg-info-light text-center" data-bs-toggle="modal" data-bs-target="#add_transaction">
																						<i className="far fa-eye"></i> 
																					</Link>
																				</div>
																				</Cell>
																			</Row>
																		))}
																	</Body></>
														)}
															
															
														</Table>
													</div>
												</div>
											</div>
										</div>
										{/* {/* <!-- /Prescription Tab --> */}

										

									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
			<div className="modal fade custom-modal" id="add_transaction">
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
	);
}


export default PatientProfile;