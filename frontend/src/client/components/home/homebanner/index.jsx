import React from 'react';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
	return (
		<section className="section section-search">
			<div className="container">
				<div className="banner-wrapper">
					<div className="banner-header">
						<h6>We work to take care of your smile</h6>
						<h1>Great Smile For Healthy Lifestyle!</h1>
						<p>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
							illo inventore veritatis et quasi architecto beatae vitae dicta sunt
							explicabo
						</p>
						<a href="#" className="btn-yellow">
							Make an Appointment
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeBanner;
