import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import loginBanner from '../../assets/images/login-banner.png';
//icon
import config from 'config';

import { Link } from 'react-router-dom';
const LoginContainer = () => {
	const history = useHistory();
	useEffect(() => {
		document.body.classList.add('account-page');

		return () => document.body.classList.remove('account-page');
	}, []);



	return (
		<div className='content'>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-8 offset-md-2">
						<div className="account-content">
							<div className="row align-items-center justify-content-center">
								<div className="col-md-7 col-lg-6 login-left">
									<img
										src={loginBanner}
										className="img-fluid"
										alt="EDDOC Login"
									/>
								</div>
								<div className="col-md-12 col-lg-6 login-right">
									<div className="login-header">
										<h3>
											Login <span>EDDOC</span>
										</h3>
									</div>
									<form action={`${config.publicPath}doctor/doctor-dashboard`}>
										<div className="form-group form-focus">
											<input type="email" className="form-control floating" />
											<label className="focus-label">Email</label>
										</div>
										<div className="form-group form-focus">
											<input
												type="password"
												className="form-control floating"
											/>
											<label className="focus-label">Password</label>
										</div>
										<div className="text-end">
											<Link to="/forgot-password" className="forgot-link">
												Forgot Password ?
											</Link>
										</div>
										<button
											className="btn btn-primary  w-100 btn-lg login-btn"
											type="submit"
											onClick={()=> history.push("/doctor/doctor-dashboard")}
										>
											Login
										</button>
									
										
										<div className="text-center dont-have">
											Don’t have an account? {' '}
											<Link to="/register">Register</Link>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginContainer;
