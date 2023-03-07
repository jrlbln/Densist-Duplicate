import React,{useState} from "react";
import DoctorSidebar from "../sidebar";
import { Link } from "react-router-dom";
import getDayNameToday from "../../../../utils/dateFormats";
import timeslots from "./timeslots";
import { timeSlotss ,scheds,  } from "./data";


const ScheduleTiming = (props) => {
    const [day, setDay] = useState(0);
    const isActive =(className, dateName) => {
         if(dateName ===  getDayNameToday()){
            return className += ' active';
        }else{
            return className;
        }
    }

        const [inputValues, setInputValues] = useState({});
        const [counter, setCounter] = useState(0);
        
        const handleAdd = () => {
            setCounter(counter + 1);
          };
        const handleOnChange = (e) => {
            const abc = {};
            abc[e.target.className] = e.target.value;
            setInputValues({ ...inputValues, ...abc });
        };
        const handleDays=(x)=>{
           
        }

    return (
        <div>

            <div className="breadcrumb-bar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-12">
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Schedule Timings</li>
                                </ol>
                            </nav>
                            <h2 className="breadcrumb-title">Schedule Timings</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            <DoctorSidebar />
                        </div>
                        <div className="col-md-7 col-lg-8 col-xl-9">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Schedule Timings</h4>
                                            <div className="profile-box">
                                               
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="card schedule-widget mb-0">
                                                            {/* <!-- Schedule Header --> */}
                                                            <div className="schedule-header">

                                                                {/* <!-- Schedule Nav --> */}
                                                                <div className="schedule-nav">
                                                                    <ul className="nav nav-tabs nav-justified">
                                                                        <li className="nav-item">
                                                                            <a onClick={()=>{ setDay(0); setCounter(0)}} className={isActive("nav-link","Sunday")} data-bs-toggle="tab" href="#slot_sunday">Sunday</a>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <a onClick={()=>{ setDay(1); setCounter(0)}} className={isActive("nav-link","Monday")} data-bs-toggle="tab" href="#slot_monday">Monday</a>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <a onClick={()=>{ setDay(2); setCounter(0)}} className={isActive("nav-link","Tuesday")} data-bs-toggle="tab" href="#slot_tuesday">Tuesday</a>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <a onClick={()=>{ setDay(3); setCounter(0)}} className={isActive("nav-link","Wednesday")} data-bs-toggle="tab" href="#slot_wednesday">Wednesday</a>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <a onClick={()=>{ setDay(4); setCounter(0)}} className={isActive("nav-link","Thursday")} data-bs-toggle="tab" href="#slot_thursday">Thursday</a>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <a onClick={()=>{ setDay(5); setCounter(0)}} className={isActive("nav-link","Friday")} data-bs-toggle="tab" href="#slot_friday">Friday</a>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <a onClick={()=>{ setDay(6); setCounter(0)}} className={isActive("nav-link","Saturday")} data-bs-toggle="tab" href="#slot_saturday">Saturday</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                {/* <!-- /Schedule Nav --> */}

                                                            </div>
                                                            {/* <!-- /Schedule Header -->
                        
                                                            <!-- Schedule Content --> */}
                                                            <div className="tab-content schedule-cont">

                                                                {/* <!-- Sunday Slot --> */}
                                                                <div id="slot_sunday" className={isActive("tab-pane fade show","Sunday")}>
                                                                   {timeslots(0)}
                                                                </div>
                                                                {/* <!-- /Sunday Slot -->

                                                                <!-- Monday Slot --> */}
                                                                <div id="y" className={isActive("tab-pane fade show ","Monday")}>
                                                                {timeslots(1)}
                                                                </div>
                                                                {/* <!-- /Monday Slot -->

                                                                <!-- Tuesday Slot --> */}
                                                                <div id="slot_tuesday" className={isActive("tab-pane fade show","Tuesday")}>
                                                                {timeslots(2)}
                                                                </div>
                                                                {/* <!-- /Tuesday Slot -->

                                                                <!-- Wednesday Slot --> */}
                                                                <div id="slot_wednesday" className={isActive("tab-pane fade show","Wednesday")}>
                                                                {timeslots(3)}
                                                                </div>
                                                                {/* <!-- /Wednesday Slot --> */}

                                                                {/* <!-- Thursday Slot --> */}
                                                                <div id="slot_thursday" className={isActive("tab-pane fade show","Thursday")}>
                                                                {timeslots(4)}
                                                                </div>
                                                                {/* <!-- /Thursday Slot --> */}

                                                                {/* <!-- Friday Slot --> */}
                                                                <div id="slot_friday" className={isActive("tab-pane fade show","Friday")}>
                                                                {timeslots(5)}
                                                                </div>
                                                                {/* <!-- /Friday Slot --> */}

                                                                {/* <!-- Saturday Slot --> */}
                                                                <div id="slot_saturday" className={isActive("tab-pane fade show","Saturday")}>
                                                                {timeslots(6)}
                                                                </div>
                                                                {/* <!-- /Saturday Slot --> */}

                                                            </div>
                                                            {/* <!-- /Schedule Content --> */}


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


             {/* <!-- Add Time Slot Modal --> */}
             <div className="modal fade custom-modal" id="add_time_slot">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <form>
                                <div className="hours-info">
                                    <div className="row form-row hours-cont">
                                        <label>Time slots</label>
                                                <div className="col-12 col-md-12">
                                                        <div className="row form-row">
                                                            <div className="col-12 col-md-12">
                                                                <div className="form-group">
                                                                    <select className="form-select form-control">
                                                                        {timeSlotss.map((option) => (
                                                                            <option 
                                                                                value={option}
                                                                            >{option}</option>
                                                                        ))}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                </div>
                                        </div>
                                        {Array.from(Array(counter)).map((c, index) => {
                                                    return (
                                                        <div className="form-group">
                                                            <select className="form-select form-control">
                                                                {timeSlotss.map((option) => (
                                                                    <option value={option}>{option}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    );
                                                })}

                                    <div className="add-more mb-3">
                                    <a onClick={handleAdd} className="add-hours"><i className="fa fa-plus-circle"></i> Add More</a>
                                </div>

                                </div>

                                
                                <div className="submit-section text-center">
                                    <button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- /Add Time Slot Modal -->  */}


            {/* <!-- Edit Time Slot Modal --> */}
            <div className="modal fade custom-modal" id="edit_time_slot">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="hours-info">
                                    <div className="row form-row hours-cont">
                                        <label>Time slots</label>
                                        {scheds.timeslots[day].map((time )=> (
                                            <>
                                                <div className="col-12 col-md-12">
                                                        <div className="row form-row">
                                                            <div className="col-12 col-md-12">
                                                                <div className="form-group">
                                                                    <select className="form-select form-control">
                                                                        {timeSlotss.map((option) => (
                                                                            <option 
                                                                                selected={time === option}
                                                                                value={option}
                                                                            >{option}</option>
                                                                        ))}
                                                                    </select>
                                                                </div>
                                                                
                                                            </div>
                                                            
                                                        </div>
                                                </div>
                                             </>
                                        ))}
                                        </div>
                                        {Array.from(Array(counter)).map((c, index) => {
                                                    return (
                                                        <div className="form-group">
                                                            <select className="form-select form-control">
                                                                {timeSlotss.map((option) => (
                                                                    <option value={option}>{option}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    );
                                                })}

                                    <div className="add-more mb-3">
                                    <a onClick={handleAdd} className="add-hours"><i className="fa fa-plus-circle"></i> Add More</a>
                                </div>

                                </div>

                                
                                <div className="submit-section text-center">
                                    <button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Edit Time Slot Modal --> */}
        </div>
    );
}


export default ScheduleTiming;

