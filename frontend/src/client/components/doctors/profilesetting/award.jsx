import React, { useState } from 'react';

const Memberships = () => {
	const [user, setUser] = useState([
		{
			Awards: '',
			Year: '',
		},
	]);

	const removeClick = (e, i) => {
		let users = [...user];
		users.splice(i, 1);
		setUser(users);
	};
	function addClick() {
		setUser([...user, { Awards: '', Year: '' }]);
	}
	function createUI() {
		return user.map((el, i) => (
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
	}
	return (
		<div className="card call-shadow">
			<div className="card-body">
				<h4 className="card-title">Awards</h4>
				<div className="education-info">
					<div className="row form-row education-cont">
						<div className="col-12 col-md-10 col-lg-11">{createUI()}</div>
					</div>
				</div>
				<div className="add-more">
					<a href="#0" className="add-education" onClick={addClick}>
						<i className="fa fa-plus-circle"></i> Add More
					</a>
				</div>
			</div>
		</div>
	);
};

export default Memberships;
