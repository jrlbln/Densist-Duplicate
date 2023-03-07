import React from 'react';
import Feature1 from '../../../assets/images/feature1.png';
import Feature2 from '../../../assets/images/feature2.png';
import Feature3 from '../../../assets/images/feature3.png';
import Feature4 from '../../../assets/images/feature4.png';
import Feature5 from '../../../assets/images/feature5.png';

const Connectus = () => {
	return (
		<section className="feature-section">
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-6">
						<div className="left">
							<h6>Connecting with us</h6>
							<h2>We Are Providing A Very Good Care and Safety!</h2>
						</div>
					</div>
					<div className="col-12 col-md-6">
						<div className="right">
							<p>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo
								inve ntore veritatis et quasi architecto beatae vitae dicta sunt
								explicabo, sed ut perspiciatis unde omnis iste natus error.
							</p>
							<a href="#" className="btn-yellow">
								Make an Appointment
							</a>
						</div>
					</div>
				</div>
				<div className="row feature-column">
					<div className="feature-box">
						<div className="inner-feature-box text-center">
							<div className="feature-icon">
								<img src={Feature1} alt="" />
							</div>
							<h4>
								Review Your <br />
								Medical Records
							</h4>
							<p>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								error.
							</p>
							<div className="feature-btn">
								<a href="#">
									<i className="fas fa-chevron-right"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="feature-box">
						<div className="inner-feature-box text-center">
							<div className="feature-icon">
								<img src={Feature2} alt="" />
							</div>
							<h4>
								Monthly Checkups <br />
								Available
							</h4>
							<p>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								error.
							</p>
							<div className="feature-btn">
								<a href="#">
									<i className="fas fa-chevron-right"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="feature-box">
						<div className="inner-feature-box text-center">
							<div className="feature-icon">
								<img src={Feature3} alt="" />
							</div>
							<h4>
								Check Blood
								<br />
								Pressures
							</h4>
							<p>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								error.
							</p>
							<div className="feature-btn">
								<a href="#">
									<i className="fas fa-chevron-right"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="feature-box">
						<div className="inner-feature-box text-center">
							<div className="feature-icon">
								<img src={Feature4} alt="" />
							</div>
							<h4>
								Well Qualified
								<br />
								Doctors
							</h4>
							<p>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								error.
							</p>
							<div className="feature-btn">
								<a href="#">
									<i className="fas fa-chevron-right"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="feature-box">
						<div className="inner-feature-box text-center">
							<div className="feature-icon">
								<img src={Feature5} alt="" />
							</div>
							<h4>
								24/7 Emergency
								<br />
								Helps
							</h4>
							<p>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								error.
							</p>
							<div className="feature-btn">
								<a href="#">
									<i className="fas fa-chevron-right"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Connectus;
