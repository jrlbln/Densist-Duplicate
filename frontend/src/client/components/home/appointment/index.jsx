import React from 'react';

const Appointment = () => {
	return (
		<>
			<section className="appoinment-section">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12 col-lg-12">
							<div className="section-header text-center">
								<h6>Appointment</h6>
								<h2 className="text-white">Book An Appointment</h2>
								<p className="text-white">
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
									quae ab illo inventore veritatis et quasi architecto beatae
									vitae dicta sunt explicabo, sed ut perspiciatis unde omnis iste
									natus error sit voluptatem accusantium.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="appmt-form location-col">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12 col-lg-12">
							<div className="card">
								<div className="card-body">
									<div className="row">
										<div className="col-12 col-md-6 col-lg-4">
											<div className="form-group">
												<label>Name</label>
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="col-12 col-md-6 col-lg-4">
											<div className="form-group">
												<label>Email</label>
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="col-12 col-md-6 col-lg-4">
											<div className="form-group">
												<label>Mobile Number</label>
												<input type="text" className="form-control" />
											</div>
										</div>

										<div className="col-12 col-md-6 col-lg-4">
											<div className="form-group">
												<label>Doctor Name</label>
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="col-12 col-md-6 col-lg-4">
											<div className="form-group mb-0">
												<label>Date</label>
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="col-12 col-md-6 col-lg-4">
											<div className="form-group">
												<label>Time</label>
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="col-12 col-md-12 text-center">
											<a href="#0" className="btn-yellow">
												Make an Appointment
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Appointment;
