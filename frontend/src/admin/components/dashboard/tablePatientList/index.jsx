import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import IMG01 from '../../../assets/images/doctors/doctor-thumb-01.jpg';
import IMG02 from '../../../assets/images/doctors/doctor-thumb-02.jpg';
import IMG03 from '../../../assets/images/doctors/doctor-thumb-03.jpg';
import { Link } from 'react-router-dom';

const data = [
	{
		id: 1,
		image: IMG01,
		Name: 'Dr. Ruby Perrin',
		Phone: '8286329170',
		LastVisit: '20 Oct 2019',
		Paid: '$100.00',
	},
	{
		id: 2,
		image: IMG02,
		Name: 'Dr. Darren Elde',
		Phone: '2077299974',
		LastVisit: '22 Oct 2019',
		Paid: '$200.00',
	},
	{
		id: 3,
		image: IMG03,
		Name: 'Dr. Deborah ',
		Phone: '2607247769',
		LastVisit: '21 Oct 2019',
		Paid: '$250.00',
	},
];

const columns = [
	{
		title: 'Doctor Name',
		dataIndex: 'Name',
		render: (text, record) => (
			<h2 className="table-avatar">
				<Link to="/admin/profile" className="avatar avatar-sm me-2">
					<img alt="" src={record.image} />
				</Link>
				<Link to="/admin/profile">{text}</Link>
			</h2>
		),
	},
	{
		title: 'Phone',
		dataIndex: 'Phone',
	},
	{
		title: 'LastVisit',
		dataIndex: 'LastVisit',
	},
	{
		title: 'Paid',
		dataIndex: 'Paid',
	},
];

const TablePatientsList = () => {
	return (
		<div>
			<Table
				className="table-striped"
				style={{ overflowX: 'auto' }}
				columns={columns}
				// bordered
				dataSource={data}
				rowKey={(record) => record.id}
				pagination={false}
			/>
		</div>
	);
};

export default TablePatientsList;
