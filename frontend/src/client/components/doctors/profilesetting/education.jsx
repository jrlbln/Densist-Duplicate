import React, { useState } from 'react';

function createUI({user, removeClick}) {
    return user.map((el, i) => (
        <div className="row form-row" key={i}>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="form-group">
                    <label>Degree</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <div className="form-group">
                    <label>College/Institute</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <div className="form-group">
                    <label>Year of Completion</label>
                    <input type="text" className="form-control" />
                </div>
            </div>

            {parseInt(i) !== 0 ? (
                <div className="col-12 col-md-6 col-lg-1">
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

const Education = () => {
	const [user, setUser] = useState([
		{
			degree: '',
			college: '',
			completion: '',
		},
	]);

	const removeClick = (e, i) => {
		let users = [...user];
		users.splice(i, 1);
		setUser(users);
	};

	const addClick = () => {
		setUser([...user, { degree: '', college: '', completion: '' }]);
	};

	return (
		<div className="card call-shadow">
			<div className="card-body">
				<h4 className="card-title">Education</h4>
				<div className="education-info">
					<div className="row form-row education-cont">
						<div className="col-12 col-md-10 col-lg-11">{createUI({user, removeClick})}</div>
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

export default Education;
