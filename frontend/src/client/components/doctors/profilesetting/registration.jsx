import React, { useState } from 'react';

const createUI = (users,removeClick) => {
	return users.map((el, i) => (
		<div className="row form-row" key={i}>
			<div className="col-12 col-md-5">
				<div className="form-group">
					<label>Awards</label>
					<input type="text" className="form-control" />
				</div>
			</div>
			<div className="col-12 col-md-5">
				<div className="form-group">
					<label>Year</label>
					<input type="text" className="form-control" />
				</div>
			</div>
			{parseInt(i) !== 0 ? (
				<div className="col-12 col-md-2">
					<div className="delete-icon">
						<label className="d-md-block d-sm-none d-none">&nbsp;</label>
						<a
							href="#0"
							className="btn btn-danger trash"
							onClick={(e) => removeClick(e, i)}
						>
							<i className="far fa-trash-alt"></i>
						</a>
					</div>
				</div>
			) : (
				''
			)}
		</div>
	));
};

const Registration = () => {
	const [users, setUsers] = useState([{ Registrations: '', Year: '' }]);

	const removeClick = (e, i) => {
		let users = [...users];
		users.splice(i, 1);
		setUsers(users);
	};

	const addClick = () => setUsers([...users, { Registrations: '', Year: '' }]);

	return (
		<div className="card call-shadow">
			<div className="card-body">
				<h4 className="card-title">Registrations</h4>
				<div className="education-info">
					<div className="row form-row education-cont">
						<div className="col-12 col-md-10 col-lg-11">{createUI(users,removeClick)}</div>
					</div>
				</div>
				<div className="add-more">
					<a href="#0" className="add-education" onClick={addClick.bind(this)}>
						<i className="fa fa-plus-circle"></i> Add More
					</a>
				</div>
			</div>
		</div>
	);
};

export default Registration;
