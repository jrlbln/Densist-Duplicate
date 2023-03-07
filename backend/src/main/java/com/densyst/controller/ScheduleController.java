package com.densyst.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.densyst.dto.ResponseModel;
import com.densyst.models.Schedule;
import com.densyst.models.ScheduleTimeSlots;
import com.densyst.models.Users;
import com.densyst.repo.ScheduleRepository;
import com.densyst.repo.UserRepository;

@RestController
@RequestMapping("api/schedule/")
public class ScheduleController {
	@Autowired
	private ScheduleRepository schedRepo;
	
	@Autowired 
	private UserRepository userRepo;
	
	
	
//////////////////////////////////////////////////////////////////////GET   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	@GetMapping("all")
	public List<Schedule> getAllAppointments(){
		return schedRepo.findAll();
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


//////////////////////////////////////////////////////////////////////POST   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

	@PostMapping("add/user/{id}")
	public ResponseEntity<ResponseModel> addSchedule(@RequestBody Schedule model, @PathVariable Long id){
		Optional<Users> getUser = userRepo.findById(id);
		
		if(		model.getMonday() == null && 
				model.getTuesday() == null && 
				model.getWednesday() == null && 
				model.getThursday() == null && 
				model.getFriday() == null && 
				model.getSaturday() == null && 
				model.getSunday() == null) {
			ScheduleTimeSlots slots = new ScheduleTimeSlots();
			Schedule sched = new Schedule(slots,slots,slots,slots,slots,slots,slots,getUser.get());
			schedRepo.save(sched);
			return ResponseEntity.ok().body(new ResponseModel(1,"Added Successfully",sched));
		}else {
			model.setUser(getUser.get());
			schedRepo.save(model);
			return ResponseEntity.ok().body(new ResponseModel(1,"Added Successfully",model));
		}
	}





















//////////////////////////////////////////////////////////////////////PATCH   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\




















//////////////////////////////////////////////////////////////////////DELETE   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\














}
