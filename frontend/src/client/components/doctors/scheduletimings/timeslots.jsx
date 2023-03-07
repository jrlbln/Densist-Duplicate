import React from 'react'
import { scheds } from "./data";

const timeslots = (day) => {
    console.log(day)
 if(scheds.timeslots[day].length === 0){
       
        return(
        <>  
            <h4 className="card-title d-flex justify-content-between">
                <span>Time Slots</span>
                <a className="edit-link" data-bs-toggle="modal" href="#add_time_slot" ><i className="fa fa-plus-circle"></i> Add Slot</a>
            </h4>
            <p className="text-muted mb-0">Not Available</p>

            
        </>
        )
    }else{
        
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

                
           

            

       
       </>)
    }
}

export default timeslots