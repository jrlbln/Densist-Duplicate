import React, { useEffect } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import {data} from './gridData';
import {
	IMG01,
	IMG02,
	IMG03,
	IMG04,
	IMG05,
	IMG06,
	IMG07,
	IMG08,
	IMG09,
	IMG10,
	IMG11,
	IMG12,
} from './img';
import Map from './Map';

const options = [
	{ value: 'Select', label: 'Select' },
	{ value: 'Rating', label: 'Rating' },
	{ value: 'Popular', label: 'Popular' },
	{ value: 'Lastest', label: 'Lastest' },
	{ value: 'Free', label: 'Free' },
];

const DoctorGrid = () => {
	useEffect(() => {
		document.body.classList.add('map-page');

		return () => document.body.classList.remove('map-page');
	}, []);

	return (
		<div className="content doctor-grid">
			<div className="container-fluid">
				<div className="row">
					<div className="col-xl-6 col-lg-12 order-md-last order-sm-last order-last map-left">
						<div className="row align-items-center mb-4">
							<div className="col-md-6 col">
								<h4>2245 Doctors found</h4>
							</div>

							<div className="col-md-6 col-auto">
								<div className="view-icons ">
									<Link to="/patient/doctor-grid" className="grid-view active">
										<i className="fas fa-th-large"></i>
									</Link>
									<Link to="/patient/doctor-list" className="list-view">
										<i className="fas fa-bars"></i>
									</Link>
								</div>
								<div className="sort-by d-sm-block d-none">
									<span className="sortby-fliter">
										<Select options={options} />
									</span>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-sm-6 col-md-4 col-xl-6">
								<div className="profile-widget call-shadow">
									<div className="doc-img">
										<Link to="/patient/doctor-profile">
											<img className="img-fluid" alt="User " src={IMG01} />
										</Link>
										<a href="#0" className="fav-btn">
											<i className="far fa-bookmark"></i>
										</a>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<Link to="/patient/doctor-profile">
												Dr. Ruby Perrin
											</Link>
											<i className="fas fa-check-circle verified"></i>
										</h3>
										<p className="speciality">
											MDS - Periodontology and Oral Implantology, BDS
										</p>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<span className="d-inline-block average-rating">
												(17)
											</span>
										</div>
										<ul className="available-info">
											<li>
												<i className="fas fa-map-marker-alt"></i> Florida,
												USA
											</li>
											<li>
												<i className="far fa-clock"></i> Available on Fri,
												22 Mar
											</li>
											<li>
												<i className="far fa-money-bill-alt"></i> $300 -
												$1000{' '}
												<i
													className="fas fa-info-circle"
													data-bs-toggle="tooltip"
													title="Lorem Ipsum"
												></i>
											</li>
										</ul>
										<div className="row row-sm">
											<div className="col-6">
												<Link
													to="/patient/doctor-profile"
													className="btn view-btn"
												>
													View Profile
												</Link>
											</div>
											<div className="col-6">
												<Link
													to="/patient/booking"
													className="btn book-btn"
												>
													Book Now
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-sm-6 col-md-4 col-xl-6">
								<div className="profile-widget call-shadow">
									<div className="doc-img">
										<Link to="/patient/doctor-profile">
											<img className="img-fluid" alt="User " src={IMG02} />
										</Link>
										<a href="#0" className="fav-btn">
											<i className="far fa-bookmark"></i>
										</a>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<Link to="/patient/doctor-profile">
												Dr. Darren Elder
											</Link>
											<i className="fas fa-check-circle verified"></i>
										</h3>
										<p className="speciality">
											BDS, MDS - Oral & Maxillofacial Surgery
										</p>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star"></i>
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
												<i className="far fa-clock"></i> Available on Fri,
												22 Mar
											</li>
											<li>
												<i className="far fa-money-bill-alt"></i> $50 - $300{' '}
												<i
													className="fas fa-info-circle"
													data-bs-toggle="tooltip"
													title="Lorem Ipsum"
												></i>
											</li>
										</ul>
										<div className="row row-sm">
											<div className="col-6">
												<Link
													to="/patient/doctor-profile"
													className="btn view-btn"
												>
													View Profile
												</Link>
											</div>
											<div className="col-6">
												<Link
													to="/patient/booking"
													className="btn book-btn"
												>
													Book Now
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-sm-6 col-md-4 col-xl-6">
								<div className="profile-widget call-shadow">
									<div className="doc-img">
										<Link to="/patient/doctor-profile">
											<img className="img-fluid" alt="User " src={IMG03} />
										</Link>
										<a href="#0" className="fav-btn">
											<i className="far fa-bookmark"></i>
										</a>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<Link to="/patient/doctor-profile">
												Dr. Deborah Angel
											</Link>
											<i className="fas fa-check-circle verified"></i>
										</h3>
										<p className="speciality">
											MBBS, MD - General Medicine, DNB - Cardiology
										</p>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star"></i>
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
												<i className="far fa-clock"></i> Available on Fri,
												22 Mar
											</li>
											<li>
												<i className="far fa-money-bill-alt"></i> $100 -
												$400{' '}
												<i
													className="fas fa-info-circle"
													data-bs-toggle="tooltip"
													title="Lorem Ipsum"
												></i>
											</li>
										</ul>
										<div className="row row-sm">
											<div className="col-6">
												<Link
													to="/patient/doctor-profile"
													className="btn view-btn"
												>
													View Profile
												</Link>
											</div>
											<div className="col-6">
												<Link
													to="/patient/booking"
													className="btn book-btn"
												>
													Book Now
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-sm-6 col-md-4 col-xl-6">
								<div className="profile-widget call-shadow">
									<div className="doc-img">
										<Link to="/patient/doctor-profile">
											<img className="img-fluid" alt="User " src={IMG04} />
										</Link>
										<a href="#0" className="fav-btn">
											<i className="far fa-bookmark"></i>
										</a>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<Link to="/patient/doctor-profile">
												Dr. Sofia Brient
											</Link>
											<i className="fas fa-check-circle verified"></i>
										</h3>
										<p className="speciality">
											MBBS, MS - General Surgery, MCh - Urology
										</p>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">
												(4)
											</span>
										</div>
										<ul className="available-info">
											<li>
												<i className="fas fa-map-marker-alt"></i> Louisiana,
												USA
											</li>
											<li>
												<i className="far fa-clock"></i> Available on Fri,
												22 Mar
											</li>
											<li>
												<i className="far fa-money-bill-alt"></i> $150 -
												$250{' '}
												<i
													className="fas fa-info-circle"
													data-bs-toggle="tooltip"
													title="Lorem Ipsum"
												></i>
											</li>
										</ul>
										<div className="row row-sm">
											<div className="col-6">
												<Link
													to="/patient/doctor-profile"
													className="btn view-btn"
												>
													View Profile
												</Link>
											</div>
											<div className="col-6">
												<Link
													to="/patient/booking"
													className="btn book-btn"
												>
													Book Now
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-sm-6 col-md-4 col-xl-6">
								<div className="profile-widget call-shadow">
									<div className="doc-img">
										<Link to="/patient/doctor-profile">
											<img className="img-fluid" alt="User " src={IMG05} />
										</Link>
										<a href="#0" className="fav-btn">
											<i className="far fa-bookmark"></i>
										</a>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<Link to="/patient/doctor-profile">
												Dr. Marvin Campbell
											</Link>
											<i className="fas fa-check-circle verified"></i>
										</h3>
										<p className="speciality">
											MBBS, MD - Ophthalmology, DNB - Ophthalmology
										</p>
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
												<i className="far fa-clock"></i> Available on Fri,
												22 Mar
											</li>
											<li>
												<i className="far fa-money-bill-alt"></i> $50 - $700 <i
													className="fas fa-info-circle"
													data-bs-toggle="tooltip"
													title="Lorem Ipsum"
												></i>
											</li>
										</ul>
										<div className="row row-sm">
											<div className="col-6">
												<Link
													to="/patient/doctor-profile"
													className="btn view-btn"
												>
													View Profile
												</Link>
											</div>
											<div className="col-6">
												<Link
													to="/patient/booking"
													className="btn book-btn"
												>
													Book Now
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-sm-6 col-md-4 col-xl-6">
								<div className="profile-widget call-shadow">
									<div className="doc-img">
										<Link to="/patient/doctor-profile">
											<img className="img-fluid" alt="User " src={IMG06} />
										</Link>
										<a href="#0" className="fav-btn">
											<i className="far fa-bookmark"></i>
										</a>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<Link to="/patient/doctor-profile">
												Dr. Katharine Berthold
											</Link>
											<i className="fas fa-check-circle verified"></i>
										</h3>
										<p className="speciality">
											MS - Orthopaedics, MBBS, M.Ch - Orthopaedics
										</p>
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
												<i className="far fa-clock"></i> Available on Fri,
												22 Mar
											</li>
											<li>
												<i className="far fa-money-bill-alt"></i> $100 - $500 <i
													className="fas fa-info-circle"
													data-bs-toggle="tooltip"
													title="Lorem Ipsum"
												></i>
											</li>
										</ul>
										<div className="row row-sm">
											<div className="col-6">
												<Link
													to="/patient/doctor-profile"
													className="btn view-btn"
												>
													View Profile
												</Link>
											</div>
											<div className="col-6">
												<Link
													to="/patient/booking"
													className="btn book-btn"
												>
													Book Now
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-sm-6 col-md-4 col-xl-6">
								<div className="profile-widget call-shadow">
									<div className="doc-img">
										<Link to="/patient/doctor-profile">
											<img className="img-fluid" alt="User " src={IMG07} />
										</Link>
										<a href="#0" className="fav-btn">
											<i className="far fa-bookmark"></i>
										</a>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<Link to="/patient/doctor-profile">
												Dr. Linda Tobin
											</Link>
											<i className="fas fa-check-circle verified"></i>
										</h3>
										<p className="speciality">
											MBBS, MD - General Medicine, DM - Neurology
										</p>
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
												<i className="far fa-clock"></i> Available on Fri,
												22 Mar
											</li>
											<li>
												<i className="far fa-money-bill-alt"></i> $100 - $1000 <i
													className="fas fa-info-circle"
													data-bs-toggle="tooltip"
													title="Lorem Ipsum"
												></i>
											</li>
										</ul>
										<div className="row row-sm">
											<div className="col-6">
												<Link
													to="/patient/doctor-profile"
													className="btn view-btn"
												>
													View Profile
												</Link>
											</div>
											<div className="col-6">
												<Link
													to="/patient/booking"
													className="btn book-btn"
												>
													Book Now
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-sm-6 col-md-4 col-xl-6">
								<div className="profile-widget call-shadow">
									<div className="doc-img">
										<Link to="/patient/doctor-profile">
											<img className="img-fluid" alt="User " src={IMG08} />
										</Link>
										<a href="#0" className="fav-btn">
											<i className="far fa-bookmark"></i>
										</a>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<Link to="/patient/doctor-profile">
												Dr. Paul Richard
											</Link>
											<i className="fas fa-check-circle verified"></i>
										</h3>
										<p className="speciality">
											MBBS, MD - Dermatology , Venereology & Lepros
										</p>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">
												(49)
											</span>
										</div>
										<ul className="available-info">
											<li>
												<i className="fas fa-map-marker-alt"></i>{' '}
												California, USA
											</li>
											<li>
												<i className="far fa-clock"></i> Available on Fri,
												22 Mar
											</li>
											<li>
												<i className="far fa-money-bill-alt"></i> $100 - $400 <i
													className="fas fa-info-circle"
													data-bs-toggle="tooltip"
													title="Lorem Ipsum"
												></i>
											</li>
										</ul>
										<div className="row row-sm">
											<div className="col-6">
												<Link
													to="/patient/doctor-profile"
													className="btn view-btn"
												>
													View Profile
												</Link>
											</div>
											<div className="col-6">
												<Link
													to="/patient/booking"
													className="btn book-btn"
												>
													Book Now
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-sm-6 col-md-4 col-xl-6">
								<div className="profile-widget call-shadow">
									<div className="doc-img">
										<Link to="/patient/doctor-profile">
											<img className="img-fluid" alt="User " src={IMG09} />
										</Link>
										<a href="#0" className="fav-btn">
											<i className="far fa-bookmark"></i>
										</a>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<Link to="/patient/doctor-profile">Dr. John Gibbs</Link>
											<i className="fas fa-check-circle verified"></i>
										</h3>
										<p className="speciality">
											MDS - Periodontology and Oral Implantology, BDS
										</p>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">
												(112)
											</span>
										</div>
										<ul className="available-info">
											<li>
												<i className="fas fa-map-marker-alt"></i> Oklahoma,
												USA
											</li>
											<li>
												<i className="far fa-clock"></i> Available on Fri,
												22 Mar
											</li>
											<li>
												<i className="far fa-money-bill-alt"></i> $500 - $2500 <i
													className="fas fa-info-circle"
													data-bs-toggle="tooltip"
													title="Lorem Ipsum"
												></i>
											</li>
										</ul>
										<div className="row row-sm">
											<div className="col-6">
												<Link
													to="/patient/doctor-profile"
													className="btn view-btn"
												>
													View Profile
												</Link>
											</div>
											<div className="col-6">
												<Link
													to="/patient/booking"
													className="btn book-btn"
												>
													Book Now
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-sm-6 col-md-4 col-xl-6">
								<div className="profile-widget call-shadow">
									<div className="doc-img">
										<Link to="/patient/doctor-profile">
											<img className="img-fluid" alt="User " src={IMG10} />
										</Link>
										<a href="#0" className="fav-btn">
											<i className="far fa-bookmark"></i>
										</a>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<Link to="/patient/doctor-profile">
												Dr. Olga Barlow
											</Link>
											<i className="fas fa-check-circle verified"></i>
										</h3>
										<p className="speciality">
											MDS - Periodontology and Oral Implantology, BDS
										</p>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">
												(65)
											</span>
										</div>
										<ul className="available-info">
											<li>
												<i className="fas fa-map-marker-alt"></i> Montana,
												USA
											</li>
											<li>
												<i className="far fa-clock"></i> Available on Fri,
												22 Mar
											</li>
											<li>
												<i className="far fa-money-bill-alt"></i> $75 - $250 <i
													className="fas fa-info-circle"
													data-bs-toggle="tooltip"
													title="Lorem Ipsum"
												></i>
											</li>
										</ul>
										<div className="row row-sm">
											<div className="col-6">
												<Link
													to="/patient/doctor-profile"
													className="btn view-btn"
												>
													View Profile
												</Link>
											</div>
											<div className="col-6">
												<Link
													to="/patient/booking"
													className="btn book-btn"
												>
													Book Now
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-sm-6 col-md-4 col-xl-6">
								<div className="profile-widget call-shadow">
									<div className="doc-img">
										<Link to="/patient/doctor-profile">
											<img className="img-fluid" alt="User " src={IMG11} />
										</Link>
										<a href="#0" className="fav-btn">
											<i className="far fa-bookmark"></i>
										</a>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<Link to="/patient/doctor-profile">
												Dr. Julia Washington
											</Link>
											<i className="fas fa-check-circle verified"></i>
										</h3>
										<p className="speciality">
											MBBS, MD - General Medicine, DM - Endocrinology
										</p>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">
												(5)
											</span>
										</div>
										<ul className="available-info">
											<li>
												<i className="fas fa-map-marker-alt"></i> Oklahoma,
												USA
											</li>
											<li>
												<i className="far fa-clock"></i> Available on Fri,
												22 Mar
											</li>
											<li>
												<i className="far fa-money-bill-alt"></i> $275 - $450 <i
													className="fas fa-info-circle"
													data-bs-toggle="tooltip"
													title="Lorem Ipsum"
												></i>
											</li>
										</ul>
										<div className="row row-sm">
											<div className="col-6">
												<Link
													to="/patient/doctor-profile"
													className="btn view-btn"
												>
													View Profile
												</Link>
											</div>
											<div className="col-6">
												<Link
													to="/patient/booking"
													className="btn book-btn"
												>
													Book Now
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-sm-6 col-md-4 col-xl-6">
								<div className="profile-widget call-shadow">
									<div className="doc-img">
										<Link to="/patient/doctor-profile">
											<img className="img-fluid" alt="User " src={IMG12} />
										</Link>
										<a href="#0" className="fav-btn">
											<i className="far fa-bookmark"></i>
										</a>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<Link to="/patient/doctor-profile">
												Dr. Shaun Aponte
											</Link>
											<i className="fas fa-check-circle verified"></i>
										</h3>
										<p className="speciality">
											MBBS, MS - ENT, Diploma in Otorhinolaryngology (DLO)
										</p>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">
												(5)
											</span>
										</div>
										<ul className="available-info">
											<li>
												<i className="fas fa-map-marker-alt"></i> Indiana,
												USA
											</li>
											<li>
												<i className="far fa-clock"></i> Available on Fri,
												22 Mar
											</li>
											<li>
												<i className="far fa-money-bill-alt"></i> $150 - $350 <i
													className="fas fa-info-circle"
													data-bs-toggle="tooltip"
													title="Lorem Ipsum"
												></i>
											</li>
										</ul>
										<div className="row row-sm">
											<div className="col-6">
												<Link
													to="/patient/doctor-profile"
													className="btn view-btn"
												>
													View Profile
												</Link>
											</div>
											<div className="col-6">
												<Link
													to="/patient/booking"
													className="btn book-btn"
												>
													Book Now
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="load-more text-center">
							<a className="btn btn-primary btn-sm" href="#0;">
								Load More
							</a>
						</div>
					</div>

					<div className="col-xl-6 col-lg-12 map-right">
						<div id="map" className="map-listing">
							<div style={{ height: '100vh', width: '100%' }}>
								<Map
									places={data}
									center={{ lat: -24.9923319, lng: 135.2252427 }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DoctorGrid;
