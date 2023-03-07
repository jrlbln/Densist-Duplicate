import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import {
	vect1,
	vect2,
	vect3,
	feature7,
	feature8,
	feature9,
	feature10,
	feature11,
	feature12,
	patient1,
	patient2,
	patient3,
	patient4,
	feature01,
	feature02,
	feature03,
	feature04,
	feature05,
} from '../aboutus/img';
import Slider from 'react-slick';

const Aboutus = (props) => {

	useEffect(() => {
		document.body.classList.add("about-page");
	 
		return () => document.body.classList.remove("about-page");
		}, []);
	

	const settings = {
		arrows: false,
		dots: true,
		autoplay: false,
		infinite: true,
		prevArrow: false,
		nextArrow: false,
		rtl: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 776,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 567,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<div className='content-page'>
			{/* Breadcrumb */}
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
										About Us
									</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">About Us</h2>
						</div>
					</div>
				</div>
			</div>
			{/* /Breadcrumb */}

			<section className="about-section">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<a href="#" className="about-titile mb-4">
								About EDDOC
							</a>
							<h3 className="mb-4">Company Profile</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta
								luctus est interdum pretium. Fusce id tortor fringilla, suscipit
								turpis ac, varius ex. Cras vel metus ligula. Nam enim ligula,
								bibendum a iaculis ut, cursus id augue. Proin vitae purus id tortor
								vehicula scelerisque non in libero.
							</p>
							<p className="mb-0">
								Nulla non turpis sit amet purus pharetra sollicitudin. Proin rutrum
								urna ut suscipit ullamcorper. Proin sapien felis, dignissim non
								finibus eget, luctus vel purus. Pellentesque efficitur congue orci
								ornare accumsan. Nullam ultrices libero vel imperdiet scelerisque.
								Donec vel mauris eros.
							</p>
						</div>
						<div className="col-md-6"></div>
					</div>
				</div>
			</section>
			<section className="select-category">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-4 col-md-6 category-col d-flex">
							<div className="category-subox pb-0 d-flex flex-wrap w-100">
								<h4>Visit a Doctor</h4>
								<p>
									We hire the best specialists to deliver top-notch diagnostic
									services for you.
								</p>
								<div className="subox-img">
									<div className="subox-circle">
										<img src={vect1} alt="" width="42" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 category-col d-flex">
							<div className="category-subox pb-0 d-flex flex-wrap w-100">
								<h4>Find a Pharmacy</h4>
								<p>
									We provide the a wide range of medical services, so every person
									could have the opportunity.
								</p>
								<div className="subox-img">
									<div className="subox-circle">
										<img src={vect2} alt="" width="42" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 category-col d-flex">
							<div className="category-subox pb-0 d-flex flex-wrap w-100">
								<h4>Find a Lab</h4>
								<p>
									We use the first-className medical equipment for timely
									diagnostics of various diseases.
								</p>
								<div className="subox-img">
									<div className="subox-circle">
										<img src={vect3} alt="" width="42" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section section-featurebox">
				<div className="container">
					<div className="section-header text-center">
						<h2>Available Features in Our Clinic</h2>
						<p className="sub-title">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
					<div className="row justify-content-center">
						<div className="feature-col-list">
							<div className="feature-col">
								<div className="feature-subox d-flex flex-wrap justify-content-center">
									<img src={feature7} className="img-fluid" alt="Features" />
									<h4>Operation</h4>
								</div>
							</div>
							<div className="feature-col">
								<div className="feature-subox d-flex flex-wrap justify-content-center">
									<img src={feature9} className="img-fluid" alt="Features" />
									<h4>Medical</h4>
								</div>
							</div>
							<div className="feature-col">
								<div className="feature-subox d-flex flex-wrap justify-content-center">
									<img src={feature8} className="img-fluid" alt="Features" />
									<h4>Patient Ward</h4>
								</div>
							</div>
							<div className="feature-col">
								<div className="feature-subox d-flex flex-wrap justify-content-center">
									<img src={feature10} className="img-fluid" alt="Features" />
									<h4>Test Room</h4>
								</div>
							</div>
							<div className="feature-col">
								<div className="feature-subox d-flex flex-wrap justify-content-center">
									<img src={feature11} className="img-fluid" alt="Features" />
									<h4>ICU</h4>
								</div>
							</div>
							<div className="feature-col">
								<div className="feature-subox d-flex flex-wrap justify-content-center">
									<img src={feature12} className="img-fluid" alt="Features" />
									<h4>Laboratory</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- Clinic and Specialities --> */}
			<section className="section section-specialities">
				<div className="container">
					<div className="section-header text-center">
						<h2>Clinic and Specialities</h2>
						<p className="sub-title">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
					<div className="row feature-column">
						<div className="feature-box">
							<div className="inner-feature-box text-center">
								<div className="feature-icon">
									<img src={feature01} alt="" />
								</div>
								<h4>Review Your Medical Records</h4>
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
									<img src={feature02} alt="" />
								</div>
								<h4>Monthly Checkups Available</h4>
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
						<div className="feature-box d-flex">
							<div className="inner-feature-box text-center">
								<div className="feature-icon">
									<img src={feature03} alt="" />
								</div>
								<h4>Check Blood Pressures</h4>
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
						<div className="feature-box d-flex">
							<div className="inner-feature-box text-center">
								<div className="feature-icon">
									<img src={feature04} alt="" />
								</div>
								<h4>Well Qualified Doctors</h4>
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
						<div className="feature-box d-flex">
							<div className="inner-feature-box text-center">
								<div className="feature-icon">
									<img src={feature05} alt="" />
								</div>
								<h4>24/7 Emergency Helps</h4>
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
			{/* <!-- Clinic and Specialities --> */}

			{/* Testimonial Section */}
			<section className="section section-testimonial">
				<div className="container">
					<div className="section-header text-center mb-4">
						<h2>Testimonials</h2>
						<p className="sub-title">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-12">
							{/* Slider */}

							<div className="testimonial-slider slider">
								{/* Slider Item */}
								<Slider {...settings}>
									<div className="testimonial-item text-center">
										<div className="testimonial-img">
											<img
												src={patient1}
												className="img-fluid"
												alt="Speciality"
											/>
										</div>
										<div className="testimonial-content">
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing
												elit, sed do eiusmod tempor incididunt ut labore et
												dolore magna aliqua.
											</p>
											<p className="user-name">- Jennifer Robinson</p>
											<p className="user-location mb-0">Leland, USA</p>
										</div>
									</div>
									{/* /Slider Item */}
									{/* Slider Item */}
									<div className="testimonial-item text-center">
										<div className="testimonial-img">
											<img
												src={patient2}
												className="img-fluid"
												alt="Speciality"
											/>
										</div>
										<div className="testimonial-content">
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing
												elit, sed do eiusmod tempor incididunt ut labore et
												dolore magna aliqua.
											</p>
											<p className="user-name">- Denise Stevens</p>
											<p className="user-location mb-0">Abington, USA</p>
										</div>
									</div>
									{/* /Slider Item */}
									{/* Slider Item */}
									<div className="testimonial-item text-center">
										<div className="testimonial-img">
											<img
												src={patient3}
												className="img-fluid"
												alt="Speciality"
											/>
										</div>
										<div className="testimonial-content">
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing
												elit, sed do eiusmod tempor incididunt ut labore et
												dolore magna aliqua.
											</p>
											<p className="user-name">- Charles Ortega</p>
											<p className="user-location mb-0">El Paso, USA</p>
										</div>
									</div>
									{/* /Slider Item */}
									{/* Slider Item */}
									<div className="testimonial-item text-center">
										<div className="testimonial-img">
											<img src={patient4} className="img-fluid" alt="" />
										</div>
										<div className="testimonial-content">
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing
												elit, sed do eiusmod tempor incididunt ut labore et
												dolore magna aliqua.
											</p>
											<p className="user-name">- Jennifer Robinson</p>
											<p className="user-location mb-0">Leland, USA</p>
										</div>
									</div>
								</Slider>
								{/* /Slider Item */}
							</div>

							{/* /Slider */}
						</div>
					</div>
				</div>
			</section>
			{/* Testimonial Section */}
		</div>
	);
};

export default Aboutus;
