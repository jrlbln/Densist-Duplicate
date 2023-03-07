import React from "react";
import { Table } from "antd";
import SidebarNav from "../sidebar";
import { Switch } from "antd";
import {
  itemRender,
  onShowSizeChange,
} from "../../components/paginationfunction";
import { Link } from "react-router-dom";
import { AppointmentData } from "../../assets/json/appointmentsData";

const  AppointmentColumnsData = [
  {
    title: "Doctor Name",
    dataIndex: "Name",
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
    title: "Speciality",
    dataIndex: "Speciality",
    sorter: (a, b) => a.Speciality.length - b.Speciality.length,
  },
  {
    title: "Patient Name",
    dataIndex: "PatientName",
    render: (text, record) => (
      <h2 className="table-avatar">
        <Link to="/admin/profile" className="avatar avatar-sm me-2">
          <img alt="" src={record.PatientImg} />
        </Link>
        <Link to="/admin/profile">{record.PatientName}</Link>
      </h2>
    ),
    sorter: (a, b) => a.PatientName.length - b.PatientName.length,
  },
  {
    title: "Appointment Time",
    dataIndex: "AppointmentTime",
    render: (text, record) => (
      <>
        <span>{record.AppointmentDate}</span>
        <span className="text-primary d-block">{text}</span>
      </>
    ),
    sorter: (a, b) => a.AppointmentTime.length - b.AppointmentTime.length,
  },
  {
    title: "Status",
    dataIndex: "status",

    render: (e) => <Switch />,
    sorter: (a, b) => a.status.length - b.status.length,
  },
  {
    title: "Amount",
    dataIndex: "Amount",
    sorter: (a, b) => a.Amount.length - b.Amount.length,
  },
];


const Appointments = () => {
  const data = AppointmentData;


  return (
    <>
      <SidebarNav />
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Appointments</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Appointments</li>
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
                      style={{ overflowX: "auto" }}
                      columns={AppointmentColumnsData}
                      // bordered
                      dataSource={data}
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
      </div>
    </>
  );
};

export default Appointments;
