import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import {
	Table,
	Header,
	HeaderRow,
	HeaderCell,
	Body,
	Row,
	Cell,
  } from '@table-library/react-table-library/table';
  
import Modal from 'react-bootstrap/Modal';
  const list = [
	{
	  id: '1',
	  name: 'VSCode',
	  deadline: new Date(2020, 1, 17),
	  type: 'SETUP',
	  isComplete: true,
	},
	{
	  id: '2',
	  name: 'JavaScript',
	  deadline: new Date(2020, 2, 28),
	  type: 'LEARN',
	  isComplete: true,
	},
	{
	  id: '3',
	  name: 'React',
	  deadline: new Date(2020, 3, 8),
	  type: 'LEARN',
	  isComplete: false,
	}
  ];

const TableComponent = ({callBack}) => {
    const [state, setState] = useState({
		show: false,
		iseditdelete: false,
	});
    const [search, setSearch] = React.useState('');
	const data = {
		nodes: list.filter((item) =>{
			return item.name.toLowerCase().includes(search.toLowerCase()) ||
			item.type.toLowerCase().includes(search.toLowerCase())
			}
		),
		
	  };
	const handleSearch = (event) => {
		setSearch(event.target.value);
	};
    console.log(state.iseditdelete)
    const handleClose = () =>setState({ ...state, iseditdelete: false, show: false });
    const handleEventClick = () =>setState({...state,iseditdelete: true,});
    const removeevent = () => {
		setState({ ...state, iseditdelete: false });
	};


    
  return (
    <><div className="row">
          <div className="col-md-3">
             
          </div><div className="col-md-4"></div>
          <div className="col-md-5 ">

              <label htmlFor="search">
                  Search name:
              </label>
              <input className="form-control" id="search" type="text" onChange={handleSearch} />


          </div>
      </div><div className="card card-table mt-3">
              <div className="card-body">
                  <div className="table-responsive">
                      <Table data={data} className="table table-hover table-center mb-1">
                          {(tableList) => (
                              <><Header>
                                  <HeaderRow>
                                      <HeaderCell>Dates</HeaderCell>
                                      <HeaderCell>Name</HeaderCell>
                                      <HeaderCell>Created by </HeaderCell>
                                      <HeaderCell>Action</HeaderCell>
                                  </HeaderRow>
                              </Header>
                                  <Body>
                                      {tableList.map((item) => (
                                          <Row key={item.id} item={item}>

                                              <Cell>
                                                  {item.deadline.toLocaleDateString(
                                                      'en-US',
                                                      {
                                                          year: 'numeric',
                                                          month: '2-digit',
                                                          day: '2-digit',
                                                      }
                                                  )}
                                              </Cell>
                                              <Cell>{item.name}</Cell>
                                              <Cell>{item.type}</Cell>
                                              <Cell>
                                                  <div className="table-action">
                                                      <Link to="#" onClick={handleEventClick} className="btn btn-sm bg-primary-light text-center" >
                                                          <i className="fa fa-plus"></i>
                                                      </Link>
                                                      <Link to="#" className="btn btn-sm  bg-info-light text-center" >
                                                          <i className="far fa-eye"></i>
                                                      </Link>
                                                  </div>
                                              </Cell>
                                          </Row>
                                      ))}
                                  </Body></>
                          )}


                      </Table>
                  </div>
              </div>
              
          </div>


          <Modal centered show={state.iseditdelete} onHide={handleClose}>
				<Modal.Header toggle={() => onupdateModalClose()}>Event</Modal.Header>
				<Modal.Body>asdasd</Modal.Body>
				<Modal.Footer>
					<button
						type="button"
						className="btn btn-danger submit-btn delete-event"
						data-bs-dismiss="modal"
						onClick={() => removeevent()}
					>
						Delete
					</button>
				</Modal.Footer>
			</Modal>
          
          </>
  )
}

export default TableComponent