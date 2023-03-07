import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { Modal } from 'react-bootstrap';
import SidebarNav from '../sidebar';
import { itemRender, onShowSizeChange } from '../../components/paginationfunction';
import { InvoiceReportData } from '../../assets/json/invoiceReportData';

const InvoiceReportColumnsData = (setShow) => {
	return [
		{
			title: 'Invoice Number',
			dataIndex: 'id',
			render: (text) => (
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
			title: 'Created Date',
			dataIndex: 'date',

			sorter: (a, b) => a.date.length - b.date.length,
		},
		{
			title: 'Status',
			dataIndex: 'status',
			render: (record) => (
				<span className="badge rounded-pill bg-success inv-badge">{record}</span>
			),
			sorter: (a, b) => a.status.length - b.status.length,
		},
		{
			title: 'Actions',
			render: (text, record) => (
				<div className="actions">
					<a
						href="#0"
						className="btn btn-sm bg-success-light"
						onClick={() => setShow('edit')}
					>
						<i className="fe fe-pencil"></i> Edit
					</a>
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

const InvoiceReport = () => {
	const [show, setShow] = useState('');

	const handleClose = () => setShow('');

	return (
		<>
			<SidebarNav />

			<div className="page-wrapper">
				<div className="content container-fluid">
					<div className="page-header">
						<div className="row">
							<div className="col-sm-12">
								<h3 className="page-title">Invoice Report</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item">
										<Link to="/admin">Dashboard</Link>
									</li>
									<li className="breadcrumb-item active">Invoice Report</li>
								</ul>
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
											columns={InvoiceReportColumnsData(setShow)}
											// bordered
											dataSource={InvoiceReportData}
											rowKey={(record) => record.id}
											showSizeChanger={true}
											pagination={{
												total: InvoiceReportData.length,
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
				<Modal show={show === 'edit'} onHide={handleClose} centered>
					<Modal.Header closeButton>
						<Modal.Title>
							<h4 className="modal-title">Edit Invoice Report</h4>
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div className="modal-body">
							<form>
								<div className="row form-row">
									<div className="col-12 col-sm-6">
										<div className="form-group">
											<label>Invoice Number</label>
											<input
												type="text"
												className="form-control"
												value="#INV-0001"
											/>
										</div>
									</div>
									<div className="col-12 col-sm-6">
										<div className="form-group">
											<label>Patient ID</label>
											<input
												type="text"
												className="form-control"
												value="	#PT002"
											/>
										</div>
									</div>
									<div className="col-12 col-sm-6">
										<div className="form-group">
											<label>Patient Name</label>
											<input
												type="text"
												className="form-control"
												value="R Amer"
											/>
										</div>
									</div>
									<div className="col-12 col-sm-6">
										<div className="form-group">
											<label>Patient Image</label>
											<input type="file" className="form-control" />
										</div>
									</div>
									<div className="col-12 col-sm-6">
										<div className="form-group">
											<label>Total Amount</label>
											<input
												type="text"
												className="form-control"
												value="$200.00"
											/>
										</div>
									</div>
									<div className="col-12 col-sm-6">
										<div className="form-group">
											<label>Created Date</label>
											<input
												type="text"
												className="form-control"
												value="29th Oct 2019"
											/>
										</div>
									</div>
								</div>
								<button type="submit" className="btn btn-primary w-100">
									Save Changes
								</button>
							</form>
						</div>
					</Modal.Body>
				</Modal>
				{/* Edit Modal */}
				{/* Delete Modal */}
				<Modal show={show === 'delete'} onHide={handleClose} centered>
					<Modal.Body className="text-center">
						<h4 className="modal-title">Delete</h4>
						<div className="form-content p-2">
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

export default InvoiceReport;
