import React, { useState } from 'react'


const editTimeSlots = (scheds, timeSlotss, day) => {
    const [inputValues, setInputValues] = useState({});
    const [counter, setCounter] = useState(scheds.timeslots[day].length);
    const handleClick = () => {
        setCounter(counter + 1);
        console.log(counter);
      };
      const handleOnChange = (e) => {
        const abc = {};
        abc[e.target.className] = e.target.value;
        setInputValues({ ...inputValues, ...abc });
      };
      console.log(timeSlotss)
   return(
    
   <>
        <h4 className="card-title d-flex justify-content-between">
                <span>Time Slots</span>
                <a className="edit-link" data-bs-toggle="modal" href="#edit_time_slot"><i className="fa fa-edit me-1"></i>Edit</a>
            </h4>

            {/* <!-- Slot List --> */}
            <div className="doc-times">
            {scheds.timeslots[day].map(time => (
                   <div className="doc-slot-list">
                        {time}
                    </div>
                ))}
                
                
            </div>
            {/* <!-- /Slot List --> */}

            
        {/* <!-- Add Time Slot Modal --> */}
        <div className="modal fade custom-modal" id="add_time_slot">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add Time Slots</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="hours-info">
                                <div className="row form-row hours-cont">
                                    <div className="col-12 col-md-10">
                                        <div className="row form-row">
                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Start Time</label>
                                                    <select className="form-select form-control">
                                                        <option>30 mins</option>
                                                        <option>12.00 am</option>
                                                        <option>12.30 am</option>
                                                        <option>1.00 am</option>
                                                        <option>1.30 am</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>End Time</label>
                                                    <select className="form-select form-control">
                                                        <option>30 mins</option>
                                                        <option>12.00 am</option>
                                                        <option>12.30 am</option>
                                                        <option>1.00 am</option>
                                                        <option>1.30 am</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="add-more mb-3">
                                <a href="#;" className="add-hours"><i className="fa fa-plus-circle"></i> Add More</a>
                            </div>
                            <div className="submit-section text-center">
                                <button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- /Add Time Slot Modal -->

        <!-- Edit Time Slot Modal --> */}
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
                                                                    key={option}
                                                                    selected={time == option}
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

                                <div className="add-more mb-3">
                                <a honClick={handleClick} className="add-hours"><i className="fa fa-plus-circle"></i> Add More</a>
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

   
   </>)

}

export default editTimeSlots
