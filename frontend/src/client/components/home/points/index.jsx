import React from 'react';
import service1 from '../../../assets/images/service1.jpg';
import service2 from '../../../assets/images/service1.jpg';
import service3 from '../../../assets/images/service1.jpg';

const HomePoints = () => {
	return (
		<section className="top-service-col">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-6 col-lg-4 text-center">
						<div className="service-box">
							<div className="card">
								<div className="card-body">
									<div className="service-icon">
										<img src={service1} alt="" />
									</div>
									<h3>Cosmetic Dentistry</h3>
									<p>
										Sed ut perspiciatis unde omnis iste natus error sit
										voluptatem accusantium dolore ue laudantium, totam rem
										aperiam, eaque ipsa quae ab illo inventore.
									</p>
									<div className="service-btn">
										<a href="#">
											<i className="fas fa-chevron-right"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-4 text-center">
						<div className="service-box">
							<div className="card">
								<div className="card-body">
									<div className="service-icon">
										<img src={service2} alt="" />
									</div>
									<h3>Quick Examination</h3>
									<p>
										Sed ut perspiciatis unde omnis iste natus error sit
										voluptatem accusantium mque laudantium, totam rem aperiam,
										eaque ipsa error sit voluptatem.
									</p>
									<div className="service-btn">
										<a href="#">
											<i className="fas fa-chevron-right"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-4 text-center">
						<div className="service-box">
							<div className="card">
								<div className="card-body">
									<div className="service-icon">
										<img src={service3} alt="" />
									</div>
									<h3>Best Care</h3>
									<p>
										Sed ut perspiciatis unde omnis iste natus error sit
										voluptatem accusantium lauda ntium, totam rem aperiam, eaque
										ipsa quae ab illo iste natus.
									</p>
									<div className="service-btn">
										<a href="#">
											<i className="fas fa-chevron-right"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomePoints;
