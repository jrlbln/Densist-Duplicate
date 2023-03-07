import React, { useState } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import SidebarNav from '../sidebar';
import { itemRender, onShowSizeChange } from '../../components/paginationfunction';
import { TransactionData } from '../../assets/json/transactionData';

const TransactionTableColumns = (setShow) => {
	return [
		{
			title: 'Invoice Number',
			dataIndex: 'id',
			render: (text, record) => (
				<Link to="/admin/invoice" className="invoice-link">
					{text}
				</Link>
			),
			sorter: (a, b) => a.id.length - b.id.length,
		},
		{
			title: 'Patient Id',
			dataIndex: 'patientid',
			sorter: (a, b) => a.patientid.length - b.patientid.length,
		},
		{
			title: 'Patient Name',
			dataIndex: 'patientName',
			render: (text, record) => (
				<h2 className="table-avatar">
					<Link to="/admin/profile" className="avatar avatar-sm me-2">
						<img alt="" src={record.patientimg} />
					</Link>
					<Link to="/admin/profile">{text}</Link>
				</h2>
			),
			sorter: (a, b) => a.patientName.length - b.patientName.length,
		},
		{
			title: 'Total Amount',
			dataIndex: 'Amount',
			sorter: (a, b) => a.Amount.length - b.Amount.length,
		},
		{
			title: 'Status',
			dataIndex: 'status',
			render: (text, record) => (
				<span className="badge rounded-pill bg-success inv-badge">{record.status}</span>
			),
			sorter: (a, b) => a.status.length - b.status.length,
		},
		{
			title: 'Actions',
			render: (text, record) => (
				<div className="actions">
					<a
						href="#0"
						className="btn btn-sm bg-danger-light"
						onClick={() => setShow('delete')}
					>
						<i className="fe fe-trash"></i> Delete
					</a>
				</div>
			),
		},
	];
};

const Transaction = () => {
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
							<div className="col-sm-12">
								<h3 className="page-title">Transactions</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item">
										<Link to="/admin">Dashboard</Link>
									</li>
									<li className="breadcrumb-item active">Transactions</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-12">
							<div className="card">
								<div className="card-body">
									<div className="table-responsive">
										<div className="row">
											<div className="col-sm-12">
												<Table
													className="table-striped"
													style={{ overflowX: 'auto' }}
													columns={TransactionTableColumns(setShow)}
													// bordered
													dataSource={TransactionData}
													rowKey={(record) => record.id}
													showSizeChanger={true}
													pagination={{
														total: TransactionData.length,
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
					</div>
				</div>

				{/* Delete Modal */}
				{/* Delete Modal */}
				<Modal show={show === 'delete' || show} onHide={handleClose} centered>
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
				{/* Delete Modal */}
			</div>
		</>
	);
};

export default Transaction;
