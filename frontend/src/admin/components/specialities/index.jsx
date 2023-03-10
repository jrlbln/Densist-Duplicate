import React, { useState } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import SidebarNav from '../sidebar';
import { Modal } from 'react-bootstrap';
import { itemRender, onShowSizeChange } from '../../components/paginationfunction';
import IMG01 from '../../assets/images/specialities/specialities-01.png';
import IMG02 from '../../assets/images/specialities/specialities-02.png';
import IMG03 from '../../assets/images/specialities/specialities-03.png';
import IMG04 from '../../assets/images/specialities/specialities-04.png';
import IMG05 from '../../assets/images/specialities/specialities-05.png';

export const SpecialistTableColumns = (handleShow) => {
	return [
		{
			title: '#',
			dataIndex: 'id',
			sorter: (a, b) => a.id.length - b.id.length,
		},
		{
			title: 'Speciality',
			dataIndex: 'specialities',
			render: (text, record) => (
				<h2 className="table-avatar">
					<Link to="/admin/profile" className="avatar avatar-sm me-2">
						<img src={record.image} className="avatar-img" alt="" />
					</Link>
					<Link to="/admin/profile">{record.specialities}</Link>
				</h2>
			),
			sorter: (a, b) => a.specialities.length - b.specialities.length,
		},
		{
			title: 'Actions',
			render: (text, record) => (
				<div className="actions">
					<a
						href="#0"
						className="btn btn-sm bg-success-light"
						onClick={() => handleShow('edit')}
					>
						<i className="fe fe-pencil"></i> Edit
					</a>
					<a
						href="#0"
						className="btn btn-sm bg-danger-light"
						onClick={() => handleShow('delete')}
					>
						<i className="fe fe-trash"></i> Delete
					</a>
				</div>
			),
		},
	];
};

const data = [
	{ id: '#SP001', image: IMG01, specialities: 'Cardiologist' },
	{ id: '#SP002', image: IMG02, specialities: 'Dentist' },
	{ id: '#SP003', image: IMG03, specialities: 'Neurology' },
	{ id: '#SP004', image: IMG04, specialities: 'Orthopedic' },
	{ id: '#SP005', image: IMG05, specialities: 'Urology' },
];

const Specialities = () => {
	const [show, setShow] = useState(null);
	const handleClose = () => setShow(false);
	const handleShow = (id) => setShow(id);

	return (
		<>
			<SidebarNav />
			<div className="page-wrapper">
				<div className="content container-fluid">
					<div className="page-header">
						<div className="row">
							<div className="col-sm-7 col-auto">
								<h3 className="page-title">Specialities</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item">
										<Link to="/admin">Dashboard</Link>
									</li>
									<li className="breadcrumb-item active">Specialities</li>
								</ul>
							</div>
							<div className="col-sm-5 col">
								<a
									href="#0"
									className="btn btn-primary float-end mt-2"
									onClick={() => handleShow('add')}
								>
									Add
								</a>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-12">
							<div className="card">
								<div className="card-body">
									<div className="table-responsive">
										<Table
											className="table-striped"
											style={{ overflowX: 'auto' }}
											columns={SpecialistTableColumns(handleShow)}
											// bordered
											dataSource={data}
											ascend={true}
											rowKey={(record) => record.id}
											showSizeChanger={true}
											pagination={{
												total: data.length,
												showTotal: (total, range) =>
													`Showing ${range[0]} to ${range[1]} of ${total} entries`,
												showSizeChanger: true,
												onShowSizeChange: onShowSizeChange,
												itemRender: itemRender,
											}}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Edit Modal */}
				<Modal show={show === 'edit' || show === 'add'} onHide={handleClose} centered>
					<Modal.Header closeButton>
						<Modal.Title>
							<h5 className="modal-title">
								{show === 'edit' ? 'Edit Specialities' : 'Add Specialiies'}
							</h5>
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form>
							<div className="row form-row">
								<div className="col-12 col-sm-6">
									<div className="form-group">
										<label>Specialities</label>
										<input type="text" className="form-control" />
									</div>
								</div>
								<div className="col-12 col-sm-6">
									<div className="form-group">
										<label>Image</label>
										<input type="file" className="form-control" />
									</div>
								</div>
							</div>
							<button type="submit" className="btn btn-primary w-100">
								Save Changes
							</button>
						</form>
					</Modal.Body>
				</Modal>
				{/* Edit Modal */}
				{/* Delete Modal */}
				<Modal show={show === 'delete'} onHide={handleClose} centered>
					<Modal.Body className="text-center">
						<div className="form-content p-2">
							<h4 className="modal-title">Delete</h4>
							<p className="mb-4">Are you sure want to delete?</p>
							<button type="button" className="btn btn-primary" onClick={handleClose}>
								Save{' '}
							</button>
							<button
								type="button"
								className="btn btn-danger"
								data-bs-dismiss="modal"
								onClick={handleClose}
							>
								Close
							</button>
						</div>
					</Modal.Body>
				</Modal>
				{/* Delete Modal */}
			</div>
		</>
	);
};

export default Specialities;
