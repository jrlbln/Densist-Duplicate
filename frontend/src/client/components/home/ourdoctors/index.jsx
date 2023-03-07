import React from 'react';
import Slider from 'react-slick';
import doctor1 from '../../../assets/images/doctors/doctor-01.jpg';
import doctor2 from '../../../assets/images/doctors/doctor-02.jpg';
import doctor3 from '../../../assets/images/doctors/doctor-03.jpg';
import doctor4 from '../../../assets/images/doctors/doctor-04.jpg';
import doctor5 from '../../../assets/images/doctors/doctor-05.jpg';
import doctor6 from '../../../assets/images/doctors/doctor-06.jpg';
import doctor7 from '../../../assets/images/doctors/doctor-07.jpg';
import doctor8 from '../../../assets/images/doctors/doctor-08.jpg';
import { Link } from 'react-router-dom';



const OurDoctors = () => {
	const settings = {
		dots: false,
			autoplay:false,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
	};
	return (
		<section className="doctors-col">
			<div className="container">
				<div className="row justify-content-center">
					<div className="doctors-title text-center">
						<h6>MEET OUR DOCTORS</h6>
						<h2>Our Doctors</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<div className="doctor-slider slider slick-initialized slick-slider">
							<Slider {...settings}>
								<div className="profile-widget">
									<div className="doc-img">
										<Link to="/patient/doctor-profile">
											<img
												className="img-fluid"
												alt="User Image"
												src={doctor1}
											/>
										</Link>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<Link to="/patient/doctor-profile">Denby Cathey</Link>
										</h3>
										<p className="speciality">MBBS, MD - Ophthalmology</p>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">
												(66)
											</span>
										</div>
										<ul className="available-info">
											<li>
												<i className="fas fa-map-marker-alt"></i> Michigan,
												USA
											</li>
											<li>
												<i className="fas fa-calendar-check"></i> Available
												on Fri, 20 Mar
											</li>
											<li>
												<i className="fas fa-wallet"></i> $50 - $700
											</li>
										</ul>
									</div>
									<div className="pro-footer">
										<ul className="policy-menu text-center">
											<li>
												<a href="#0">View Profile</a>
											</li>
											<li>
												<a href="#0"> Book Now</a>
											</li>
										</ul>
									</div>
								</div>

								<div className="profile-widget">
									<div className="doc-img">
										<Link to="/patient/doctor-profile">
											<img
												className="img-fluid"
												alt="User Image"
												src={doctor2}
											/>
										</Link>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<Link to="/patient/doctor-profile">Orali Fisher</Link>
										</h3>
										<p className="speciality">BDS - Dental Cosmetology</p>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="far fa-star"></i>
											<span className="d-inline-block average-rating">
												(23)
											</span>
										</div>
										<ul className="available-info">
											<li>
												<i className="fas fa-map-marker-alt"></i> Florida,
												USA
											</li>
											<li>
												<i className="fas fa-calendar-check"></i> Available
												on Mon, 22 Sep
											</li>
											<li>
												<i className="fas fa-wallet"></i> $150 - $220
											</li>
										</ul>
									</div>
									<div className="pro-footer">
										<ul className="policy-menu text-center">
											<li>
												<a href="#0">View Profile</a>
											</li>
											<li>
												<a href="#0"> Book Now</a>
											</li>
										</ul>
									</div>
								</div>

								<div className="profile-widget">
									<div className="doc-img">
										<Link to="/patient/doctor-profile">
											<img
												className="img-fluid"
												alt="User Image"
												src={doctor2}
											/>
										</Link>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<Link to="/patient/doctor-profile">Gennaro Weiner</Link>
										</h3>
										<p className="speciality">MDS - Dental Cosmetology</p>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="far fa-star"></i>
											<span className="d-inline-block average-rating">
												(35)
											</span>
										</div>
										<ul className="available-info">
											<li>
												<i className="fas fa-map-marker-alt"></i> Newyork,
												USA
											</li>
											<li>
												<i className="fas fa-calendar-check"></i> Available
												on Fri, 22 Mar
											</li>
											<li>
												<i className="fas fa-wallet"></i> $50 - $300
											</li>
										</ul>
									</div>
									<div className="pro-footer">
										<ul className="policy-menu text-center">
											<li>
												<a href="#0">View Profile</a>
											</li>
											<li>
												<a href="#0"> Book Now</a>
											</li>
										</ul>
									</div>
								</div>

								<div className="profile-widget">
									<div className="doc-img">
										<Link to="/patient/doctor-profile">
											<img
												className="img-fluid"
												alt="User Image"
												src={doctor3}
											/>
										</Link>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<Link to="/patient/doctor-profile">Jerelyn Pino </Link>
										</h3>
										<p className="speciality">MBBS, DNB - Cardiology</p>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="far fa-star"></i>
											<span className="d-inline-block average-rating">
												(27)
											</span>
										</div>
										<ul className="available-info">
											<li>
												<i className="fas fa-map-marker-alt"></i> Georgia,
												USA
											</li>
											<li>
												<i className="fas fa-calendar-check"></i> Available
												on Fri, 22 Mar
											</li>
											<li>
												<i className="fas fa-wallet"></i> $100 - $400
											</li>
										</ul>
									</div>
									<div className="pro-footer">
										<ul className="policy-menu text-center">
											<li>
												<a href="#0">View Profile</a>
											</li>
											<li>
												<a href="#0"> Book Now</a>
											</li>
										</ul>
									</div>
								</div>

								<div className="profile-widget">
									<div className="doc-img">
										<Link to="/patient/doctor-profile">
											<img
												className="img-fluid"
												alt="User Image"
												src={doctor4}
											/>
										</Link>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<Link to="/patient/doctor-profile">Rieko Thrash</Link>
										</h3>
										<p className="speciality">MBBS, MS - General Surgery</p>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="far fa-star"></i>
											<span className="d-inline-block average-rating">
												(4)
											</span>
										</div>
										<ul className="available-info">
											<li>
												<i className="fas fa-calendar-check"></i> Louisiana,
												USA
											</li>
											<li>
												<i className="fas fa-wallet"></i> Available on Fri,
												22 Mar
											</li>
											<li>
												<i className="far fa-money-bill-alt"></i> $150 -
												$250
											</li>
										</ul>
									</div>
									<div className="pro-footer">
										<ul className="policy-menu text-center">
											<li>
												<a href="#0">View Profile</a>
											</li>
											<li>
												<a href="#0"> Book Now</a>
											</li>
										</ul>
									</div>
								</div>

								<div className="profile-widget">
									<div className="doc-img">
										<Link to="/patient/doctor-profile">
											<img
												className="img-fluid"
												alt="User Image"
												src={doctor3}
											/>
										</Link>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<Link to="/patient/doctor-profile">Ultima Douglas</Link>
										</h3>
										<p className="speciality">MS - Orthopaedics</p>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">
												(52)
											</span>
										</div>
										<ul className="available-info">
											<li>
												<i className="fas fa-map-marker-alt"></i> Texas, USA
											</li>
											<li>
												<i className="fas fa-calendar-check"></i> Available
												on Fri, 22 Mar
											</li>
											<li>
												<i className="fas fa-wallet"></i> $100 - $500
											</li>
										</ul>
									</div>
									<div className="pro-footer">
										<ul className="policy-menu text-center">
											<li>
												<a href="#0">View Profile</a>
											</li>
											<li>
												<a href="#0"> Book Now</a>
											</li>
										</ul>
									</div>
								</div>

								<div className="profile-widget">
									<div className="doc-img">
										<Link to="/patient/doctor-profile">
											<img
												className="img-fluid"
												alt="User Image"
												src={doctor3}
											/>
										</Link>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<Link to="/patient/doctor-profile">
												Neomah Oliveira
											</Link>
										</h3>
										<p className="speciality">MBBS, MD - General Medicine</p>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">
												(43)
											</span>
										</div>
										<ul className="available-info">
											<li>
												<i className="fas fa-map-marker-alt"></i> Kansas,
												USA
											</li>
											<li>
												<i className="fas fa-calendar-check"></i> Available
												on Fri, 22 Mar
											</li>
											<li>
												<i className="fas fa-wallet"></i> $100 - $1000
											</li>
										</ul>
									</div>
									<div className="pro-footer">
										<ul className="policy-menu text-center">
											<li>
												<a href="#0">View Profile</a>
											</li>
											<li>
												<a href="#0"> Book Now</a>
											</li>
										</ul>
									</div>
								</div>

								<div className="profile-widget">
									<div className="doc-img">
										<Link to="/patient/doctor-profile">
											<img
												className="img-fluid"
												alt="User Image"
												src={doctor3}
											/>
										</Link>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<Link to="/patient/doctor-profile">
												Jillisa Tremblay
											</Link>
										</h3>
										<p className="speciality">MBBS, MD - Dermatology</p>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="far fa-star"></i>
											<i className="far fa-star"></i>
											<span className="d-inline-block average-rating">
												(20)
											</span>
										</div>
										<ul className="available-info">
											<li>
												<i className="fas fa-map-marker-alt"></i>{' '}
												California, USA
											</li>
											<li>
												<i className="fas fa-calendar-check"></i> Available
												on Fri, 22 Mar
											</li>
											<li>
												<i className="fas fa-wallet"></i> $100 - $400
											</li>
										</ul>
									</div>
									<div className="pro-footer">
										<ul className="policy-menu text-center">
											<li>
												<a href="#0">View Profile</a>
											</li>
											<li>
												<a href="#0"> Book Now</a>
											</li>
										</ul>
									</div>
								</div>
							</Slider>
						</div>
						<div className="col-12 col-md-12 text-center pt-4">
							<a href="#" className="view-all">
								View All
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurDoctors;
