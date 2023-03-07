import React from "react";
import { Table } from "antd";
import SidebarNav from "../sidebar";
import { itemRender, onShowSizeChange, } from "../../components/paginationfunction";
import { Link } from "react-router-dom";
import {ReviewsData} from '../../assets/json/reviewsData';

const Reviews = () => {

  const data = ReviewsData

  const columns = [
    {
      title: "Patient Name",
      dataIndex: "Name",
      render: (text, record) => (
        <h2 className="table-avatar">
          <a href="#0" className="avatar avatar-sm me-2">
            <img alt="" src={record.image} />
          </a>
          <a href="#0">{text}</a>
        </h2>
      ),
      sorter: (a, b) => a.Name.length - b.Name.length,
    },
    {
      title: "Doctor Name",
      dataIndex: "doctorname",
      render: (text, record) => (
        <h2 className="table-avatar">
          <a href="#0" className="avatar avatar-sm me-2">
            <img alt="" src={record.doctorimage} />
          </a>
          <a href="#0">{text}</a>
        </h2>
      ),
      sorter: (a, b) => a.doctorname.length - b.doctorname.length,
    },
    {
      title: "Reviews",
      render: () => (
        <>
          <i className="fe fe-star text-warning"></i>
          <i className="fe fe-star text-warning"></i>
          <i className="fe fe-star text-warning"></i>
          <i className="fe fe-star text-warning"></i>
          <i className="fe fe-star-o text-secondary"></i>
        </>
      ),
    },
    {
      title: "Description",
      dataIndex: "Description",
      sorter: (a, b) => a.Description.length - b.Description.length,
    },

    {
      title: "Date",
      dataIndex: "date",
      render: (text, record) => (
        <>
          {record.date}
          <br />
          <small>{record.time}</small>
        </>
      ),
      sorter: (a, b) => a.date.length - b.date.length,
    },
    {
      title: "Action",
      render: (text, record) => (
        <div className="actions">
          <a className="btn btn-sm bg-danger-light" data-bs-toggle="modal" href="#delete_modal">
            <i className="fe fe-trash"></i> Delete
          </a>

        </div>
      ),
    },
  ];

  return (
    <>
      <SidebarNav />
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Reviews</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Reviews</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">

                    <Table
                      className="table-striped"
                      style={{ overflowX: "auto" }}
                      columns={columns}
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
        {/* Delete Modal */}
        <div className="modal fade" id="delete_modal" aria-hidden="true" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document" >
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-content p-2">
                  <h4 className="modal-title">Delete</h4>
                  <p className="mb-4">Are you sure want to delete?</p>
                  <button type="button" className="btn btn-primary">Save </button>
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Delete Modal */}
      </div>
    </>
  );
}

export default Reviews;
