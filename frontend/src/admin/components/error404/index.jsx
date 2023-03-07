import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
	return (
		<div className="main-wrapper">
			<dv className="error-page">
				<div className="error-box">
					<h1>404</h1>
					<h3 className="h2 mb-3">
						<i className="fa fa-warning"></i> Oops! Page not found!
					</h3>
					<p className="h4 font-weight-normal">The page you requested was not found.</p>
					<Link to="/admin" className="btn btn-primary">
						Back to Home
					</Link>
				</div>
			</dv>
		</div>
	);
};
export default Error;
