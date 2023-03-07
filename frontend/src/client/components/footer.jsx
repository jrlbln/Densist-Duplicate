import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/footer-logo.png';
const Footer = (props) => {
	const exclusionArray = [
		'/pages/doctor-grid',
		'/pages/doctor-list',
		'/pages/video-call',
		'/pages/voice-call',
		'/pages/chat-doctor',
		'/patient/doctor-list',
		'/patient/doctor-grid',
	];
	if (exclusionArray.indexOf(props.location.pathname) >= 0) {
		return '';
	}
	return (
		<footer className="footer">
			<div className="footer-top">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12 text-center">
							<Link to="/" className="footer-logo logo">
								<img src={logo} className="img-fluid" alt="Logo" />
							</Link>
						</div>
						<div className="social-icon media-btn mt-3 mb-2 text-center">
							<ul>
								<li>
									<a href="#0" target="_blank">
										<i className="fab fa-facebook-f"></i>{' '}
									</a>
								</li>
								<li>
									<a href="#0" target="_blank">
										<i className="fab fa-google-plus-g"></i>
									</a>
								</li>
								<li>
									<a href="#0" target="_blank">
										<i className="fab fa-instagram"></i>
									</a>
								</li>
								<li>
									<a href="#0" target="_blank">
										<i className="fab fa-twitter"></i>{' '}
									</a>
								</li>
							</ul>
						</div>
						
						<div className="col-12 mt-4 text-center">
							<ul className="policy-menu text-center">
								<li>
									<Link to="/aboutus">About Us</Link>
								</li>
								<li>
									<Link to="/doctor/doctor-dashboard">Doctors</Link>
								</li>
								<li>
									<Link to="/blog/blog-list">Blogs</Link>
								</li>
								<li>
									<a href="#0">Our Clinic</a>
								</li>
								<li>
									<a href="#0">FAQ</a>
								</li>
								<li>
									<Link to="/contactus">Contact Us</Link>
								</li>
								<li>
									<Link to="/pages/terms">Terms and Conditions</Link>
								</li>
								<li>
									<Link to="/pages/privacy-policy">Policy</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="footer-bottom">
				<div className="container-fluid">
					<div className="copyright">
						<div className="row">
							<div className="col-md-12 col-lg-12 text-center">
								<div className="copyright-text">
									<p className="mb-0">
										&copy; 2020{' '}
										<a href="#0" className="text-yellow">
											{' '}
											Dentalcare
										</a>{' '}
										All Rights Reserved.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
