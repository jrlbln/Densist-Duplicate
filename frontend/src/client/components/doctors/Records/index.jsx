import React from 'react'
import { Link } from 'react-router-dom'
import DoctorSidebar from '../sidebar'

const DentalRecords = () => {
  return (
    <>
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
							{/* Contact Form */}
                <section className="contact-form">
                <div className="container">
                <div className="section-header text-center">
                  <h2>Patient's Information</h2>
                </div>
                <div className="row">
                  <div className="col-md-12">
                  <form action="">
                    <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                      <label>
                        Firstname : <span>*</span>
                      </label>
                      <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                      <label>
                      Middlename :  <span>*</span>
                      </label>
                      <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                      <label>
                      Lastname : <span>*</span>
                      </label>
                      <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                      <label>Birthdate <span>*</span></label>
                      <input type="date" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-1">
                      <div className="form-group">
                      <label>Age</label>
                      <input type="text" className="form-control"  disabled/>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="form-group">
                      <label>
                      Address : <span>*</span>
                      </label>
                      <input type="text" className="form-control" />
                      </div>
                    </div>
                   
                    <div className="col-md-6">
                      <div className="form-group">
                      <label>
                      Service Offered : <span>*</span>
                      </label>
                      <textarea
                       placeholder="Service Offered"
                        className="form-control"
                        
                      />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                      <label>
                      Remarks : <span>*</span>
                      </label>
                      <textarea
                       placeholder="Remarks"
                        className="form-control"
                        
                      />
                      </div>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <button className="btn col-md-6 bg-primary">Save & preview</button>
                        <button className="btn col-md-6 bg-danger">Clear</button>
                    </div>
                    <div className="col-md-3"></div>
                    </div>
                  </form>
                  </div>
                </div>
                
                </div>
              </section>
              {/* /Contact Form */}
						</div>

					</div>
				</div>
			</div>
    
  </>
  )
}

export default DentalRecords