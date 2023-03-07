import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import SidebarNav from '../sidebar';
import { itemRender, onShowSizeChange } from '../../components/paginationfunction';
import { PatientData } from '../../assets/json/patientData';

export const PatientTableColumns = [
	{
		title: 'Patient Id',
		dataIndex: 'id',
		sorter: (a, b) => a.id.length - b.id.length,
	},
	{
		title: 'Patient Name',
		dataIndex: 'Name',
		render: (text, record) => (
			<h2 className="table-avatar">
				<Link to="/admin/profile" className="avatar avatar-sm me-2">
					<img alt="" src={record.image} />
				</Link>
				<Link to="/admin/profile">{text}</Link>
			</h2>
		),
		sorter: (a, b) => a.Name.length - b.Name.length,
	},
	{
		title: 'Age',
		dataIndex: 'age',
		sorter: (a, b) => a.age.length - b.age.length,
	},

	{
		title: 'address',
		dataIndex: 'address',
	},
	{
		title: 'Phone',
		dataIndex: 'Phone',
		sorter: (a, b) => a.Phone.length - b.Phone.length,
	},
	{
		title: 'Last Visit',
		dataIndex: 'Visit',
		sorter: (a, b) => a.Visit.length - b.Visit.length,
	},
	{
		title: 'Paid',
		dataIndex: 'Paid',
		sorter: (a, b) => a.Paid.length - b.Paid.length,
	},
];


const Patients = () => {
	return (
		<>
			<SidebarNav />
			<div className="page-wrapper">
				<div className="content container-fluid">
					<div className="page-header">
						<div className="row">
							<div className="col-sm-12">
								<h3 className="page-title">List of Patient</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item">
										<Link to="/admin">Dashboard</Link>
									</li>
									<li className="breadcrumb-item">
										<Link to="#0">Users</Link>
									</li>
									<li className="breadcrumb-item active">Patient</li>
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
											columns={PatientTableColumns}
											// bordered
											dataSource={PatientData}
											rowKey={(record) => record.id}
											showSizeChanger={true}
											pagination={{
												total: PatientData.length,
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
		</>
	);
};

export default Patients;
