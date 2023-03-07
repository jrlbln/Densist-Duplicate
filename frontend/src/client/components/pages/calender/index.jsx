import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import DatePicker from 'react-datepicker';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import StickyBox from "react-sticky-box";
// import {User,Avatar_19,Avatar_07,Avatar_06,Avatar_14} from '../../../Entryfile/imagepath.js'

const CalendarPage = () => {
	const [state, setState] = useState({
		startDate: new Date(),
		show: false,
		iseditdelete: false,
		addneweventobj: null,
		isnewevent: false,
		event_title: '',
		category_color: '',
		weekendsVisible: true,
		currentEvents: [],
		defaultEvents: [
			{
				title: 'Event Name 4',
				start: Date.now() + 148000000,
				className: 'bg-purple',
			},
			{
				title: 'Test Event 1',
				start: Date.now(),
				end: Date.now(),
				className: 'bg-success',
			},
			{
				title: 'Test Event 2',
				start: Date.now() + 168000000,
				className: 'bg-info',
			},
			{
				title: 'Test Event 3',
				start: Date.now() + 338000000,
				className: 'bg-primary',
			},
		],
	});

	const handleChange = (date) => setState({ ...state, startDate: date });

	const handleClose = () =>
		setState({ ...state, isnewevent: false, iseditdelete: false, show: false });

	const handleEventClick = (clickInfo, status) =>
		setState({
			...state,
			iseditdelete: true,
			event_title: clickInfo.event.title,
			calenderevent: clickInfo.event,
		});

	const handleDateSelect = (selectInfo) =>
		setState({ ...state, isnewevent: true, addneweventobj: selectInfo });

	const addnewevent = () => {
		const { event_title, category_color, addneweventobj } = state;
		let calendarApi = addneweventobj.view.calendar;

		calendarApi.unselect(); // clear date selection

		if (event_title) {
			calendarApi.addEvent({
				id: 10,
				title: event_title,
				className: category_color,
				start: addneweventobj.startStr,
				end: addneweventobj.endStr,
				allDay: addneweventobj.allDay,
			});
		}
		setState({ ...state, isnewevent: false });
	};

	const onupdateModalClose = () => {
		setState({ ...state, iseditdelete: false, event_title: '' });
	};

	const oncreateeventModalClose = () =>
		setState({ ...state, isnewevent: false, event_title: '' });

	const removeevent = () => {
		const { calenderevent } = state;
		calenderevent.remove();
		setState({ ...state, iseditdelete: false });
	};
	const clickupdateevent = () => {
		const { defaultEvents, calenderevent, event_title } = state;
		const newArray = defaultEvents;
		for (let i = 0; i < newArray.length; i++) {
			if (newArray[i].id === parseInt(calenderevent.id)) {
				newArray[i].title = event_title;
			}
		}
		setState({ ...state, defaultEvents: newArray, iseditdelete: false });
	};

	const handleClick = () => setState({ ...state, show: true });
	const rendereventclick = () => {
		const { event_title } = state;
		return (
			<form className="event-form">
				<label>Change event name</label>
				<div className="input-group">
					<input
						className="form-control"
						type="text"
						value={event_title}
						onChange={(event) => setState({ event_title: event.target.value })}
					/>
					<span className="input-group-prepend">
						<button
							type="button"
							className="btn btn-success btn-md"
							onClick={() => clickupdateevent()}
						>
							Save
						</button>
					</span>
				</div>
			</form>
		);
	};
	const renderaddnewevent = () => {
		const { event_title } = state;
		return (
			<form>
				<div className="row">
					<div className="col-md-12">
						<div className="form-group">
							<label className="control-label">Event Name</label>
							<input
								className="form-control"
								type="text"
								name="title"
								value={event_title}
								onChange={(event) => setState({ event_title: event.target.value })}
							/>
						</div>
					</div>
					<div className="col-md-12">
						<div className="form-group">
							<label className="control-label">Category</label>
							<select
								className="form-select form-control"
								name="category"
								onChange={(event) =>
									setState({ ...state, category_color: event.target.value })
								}
							>
								<option value="bg-danger">Danger</option>
								<option value="bg-success">Success</option>
								<option value="bg-purple">Purple</option>
								<option value="bg-primary">Primary</option>
								<option value="bg-pink">Pink</option>
								<option value="bg-info">Info</option>
								<option value="bg-inverse">Inverse</option>
								<option value="bg-orange">Orange</option>
								<option value="bg-brown">Brown</option>
								<option value="bg-teal">Teal</option>
								<option value="bg-warning">Warning</option>
							</select>
						</div>
					</div>
				</div>
			</form>
		);
	};

	const { defaultEvents, iseditdelete, isnewevent } = state;

	return (
		<div className="content-page">
			<div className="breadcrumb-bar">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col">
							<nav aria-label="breadcrumb" className="page-breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item">
										<Link to="/home">Home</Link>
									</li>
									<li className="breadcrumb-item active" aria-current="page">
										Calendar
									</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">Calendar</h2>
						</div>
						<div className="col-auto text-end float-end ms-auto">
							<a
								href="#0"
								className="btn btn-primary btn-sm"
								onClick={() => handleClick()}
							>
								Create Event
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Page Content */}
			<div className="content">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
						<StickyBox offsetTop={20} offsetBottom={20}>
							<div className="card call-shadow">
								<div className="card-header">
									<h4 className="card-title mb-0">Drag & Drop Event</h4>
								</div>
								<div className="card-body">
									<div id="calendar-events" className="mb-3">
										<div className="calendar-events">
											<i className="fas fa-circle text-info"></i> My Event One
										</div>
										<div className="calendar-events">
											<i className="fas fa-circle text-success"></i> My Event
											Two
										</div>
										<div className="calendar-events">
											<i className="fas fa-circle text-danger"></i> My Event
											Three
										</div>
										<div className="calendar-events">
											<i className="fas fa-circle text-warning"></i> My Event
											Four
										</div>
									</div>
									<div className="checkbox mb-3">
										<input id="drop-remove" type="checkbox" /> {' '}
										<label htmlFor="drop-remove">Remove after drop</label>
									</div>
									<a href="#0" data-bs-toggle="modal" data-bs-target="#add_new_event" className="btn btn-primary  w-100">
										<i className="fas fa-plus"></i> Add Category
									</a>
								</div>
							</div>
							</StickyBox>
						</div>
						<div className="col-md-7 col-lg-8 col-xl-9">
							<div className="card mb-0">
								<div className="card-body call-shadow">
									<div className="row">
										<div className="col-md-12">
											{/* Calendar */}
											{/* <div id="calendar" /> */}
											<FullCalendar
												plugins={[
													dayGridPlugin,
													timeGridPlugin,
													interactionPlugin,
												]}
												headerToolbar={{
													left: 'prev,next today',
													center: 'title',
													right: 'dayGridMonth,timeGridWeek,timeGridDay',
												}}
												initialView="dayGridMonth"
												editable={true}
												selectable={true}
												selectMirror={true}
												dayMaxEvents={true}
												weekends={state.weekendsVisible}
												initialEvents={defaultEvents} // alternatively, use the `events` setting to fetch from a feed
												select={handleDateSelect}
												// eventContent={renderEventContent} // custom render function
												eventClick={(clickInfo) =>
													handleEventClick(clickInfo)
												}
												// eventsSet={handleEvents} // called after events are initialized/added/changed/removed
												/* you can update a remote database when these fire:
                              eventAdd={function(){}}
                              eventChange={function(){}}
                              eventRemove={function(){}}
                              */
											/>
											{/* /Calendar */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* /Page Content */}
			{/* Add Event Modal */}
			<div id="add_event" className="modal custom-modal fade" role="dialog">
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Add Event</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">×</span>
							</button>
						</div>
						<div className="modal-body">
							<form>
								<div className="form-group">
									<label>
										Event Name <span className="text-danger">*</span>
									</label>
									<input className="form-control" type="text" />
								</div>
								<div className="form-group">
									<label>
										Event Date <span className="text-danger">*</span>
									</label>
									<div className="cal-icon">
										<input
											className="form-control datetimepicker"
											type="text"
										/>
									</div>
								</div>
								<div className="form-group">
									<label className="control-label">Category</label>
									<select className="form-select form-control">
										<option>Danger</option>
										<option>Success</option>
										<option>Purple</option>
										<option>Primary</option>
										<option>Pink</option>
										<option>Info</option>
										<option>Inverse</option>
										<option>Orange</option>
										<option>Brown</option>
										<option>Teal</option>
										<option>Warning</option>
									</select>
								</div>
								<div className="submit-section">
									<button className="btn btn-primary submit-btn">Submit</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			{/* /Add Event Modal */}
			{/* Event Modal */}
			<div className="modal custom-modal fade" id="event-modal">
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Event</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">×</span>
							</button>
						</div>
						<div className="modal-body" />
						<div className="modal-footer text-center">
							<button type="button" className="btn btn-success submit-btn save-event">
								Create event
							</button>
							<button
								type="button"
								className="btn btn-danger submit-btn delete-event"
								data-bs-dismiss="modal"
							>
								Delete
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* /Event Modal */}
			{/* <!-- Add Category Modal --> */}
		<div className="modal custom-modal fade" id="add_new_event">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h4 className="modal-title">Add Category</h4>
						<button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div className="modal-body">
						<form>
							<div className="form-group">
								<label>Category Name</label>
								<input className="form-control form-white" placeholder="Enter name" type="text" name="category-name" />
							</div>
							<div className="form-group">
								<label>Choose Category Color</label>
								<select className="form-select form-control form-white" data-placeholder="Choose a color..." name="category-color">
									<option value="success">Success</option>
									<option value="danger">Danger</option>
									<option value="info">Info</option>
									<option value="primary">Primary</option>
									<option value="warning">Warning</option>
									<option value="inverse">Inverse</option>
								</select>
							</div>
							<div className="submit-section text-center">
								<button type="button" className="btn btn-primary save-category submit-btn" data-bs-dismiss="modal">Save</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- /Add Category Modal --> */}
			{/* {Event Click} */}
			<Modal centered show={iseditdelete} onHide={handleClose}>
				<Modal.Header toggle={() => onupdateModalClose()}>Event</Modal.Header>
				<Modal.Body>{rendereventclick}</Modal.Body>
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
			<Modal centered show={isnewevent} onHide={handleClose}>
				<Modal.Header toggle={() => oncreateeventModalClose()}>Event</Modal.Header>
				<Modal.Body>{renderaddnewevent}</Modal.Body>
				<Modal.Footer>
					<button
						type="button"
						className="btn btn-success submit-btn delete-event"
						data-bs-dismiss="modal"
						onClick={() => addnewevent()}
					>
						Create event
					</button>
				</Modal.Footer>
			</Modal>

			<Modal show={state.show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Create Event</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<div className="form-group">
							<label>
								Event Name <span className="text-danger">*</span>
							</label>
							<input className="form-control" type="text" />
						</div>
						<div className="form-group">
							<label>
								Event Date <span className="text-danger">*</span>
							</label>
							<DatePicker
								selected={state.startDate}
								onChange={handleChange}
								className="form-control datetimepicker w-100"
							/>
						</div>
						<div className="submit-section">
							<button className="btn btn-primary submit-btn">Submit</button>
						</div>
					</form>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default CalendarPage;
