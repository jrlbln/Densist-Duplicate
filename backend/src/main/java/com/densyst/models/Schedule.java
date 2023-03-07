package com.densyst.models;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;


@Entity
public class Schedule {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	 @ManyToOne(targetEntity = Users.class)
	private Users user;
	 
	 @ManyToOne(targetEntity = ScheduleTimeSlots.class, cascade=CascadeType.ALL)
	private ScheduleTimeSlots sunday;
	
	 @ManyToOne(targetEntity = ScheduleTimeSlots.class, cascade=CascadeType.ALL)
	private ScheduleTimeSlots monday;
	
	 @ManyToOne(targetEntity = ScheduleTimeSlots.class, cascade=CascadeType.ALL)
	private ScheduleTimeSlots tuesday;
	
	 @ManyToOne(targetEntity = ScheduleTimeSlots.class, cascade=CascadeType.ALL)
	private ScheduleTimeSlots wednesday;
	
	 @ManyToOne(targetEntity = ScheduleTimeSlots.class, cascade=CascadeType.ALL)
	private ScheduleTimeSlots thursday;
	
	 @ManyToOne(targetEntity = ScheduleTimeSlots.class, cascade=CascadeType.ALL)
	private ScheduleTimeSlots friday;
	
	 @ManyToOne(targetEntity = ScheduleTimeSlots.class, cascade=CascadeType.ALL)
	private ScheduleTimeSlots saturday;
	
	private LocalDate date_modified = LocalDate.now();
	
	
	public Schedule() {
		super();
	}

	public Schedule(ScheduleTimeSlots sunday, ScheduleTimeSlots monday, ScheduleTimeSlots tuesday,
			ScheduleTimeSlots wednesday, ScheduleTimeSlots thursday, ScheduleTimeSlots friday,
			ScheduleTimeSlots saturday,Users user ) {
		super();
		this.sunday = sunday;
		this.monday = monday;
		this.tuesday = tuesday;
		this.wednesday = wednesday;
		this.thursday = thursday;
		this.friday = friday;
		this.saturday = saturday;
		this.user =user;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	public ScheduleTimeSlots getSunday() {
		return sunday;
	}
	public void setSunday(ScheduleTimeSlots sunday) {
		this.sunday = sunday;
	}
	public ScheduleTimeSlots getMonday() {
		return monday;
	}
	public void setMonday(ScheduleTimeSlots monday) {
		this.monday = monday;
	}
	public ScheduleTimeSlots getTuesday() {
		return tuesday;
	}
	public void setTuesday(ScheduleTimeSlots tuesday) {
		this.tuesday = tuesday;
	}
	public ScheduleTimeSlots getWednesday() {
		return wednesday;
	}
	public void setWednesday(ScheduleTimeSlots wednesday) {
		this.wednesday = wednesday;
	}
	public ScheduleTimeSlots getThursday() {
		return thursday;
	}
	public void setThursday(ScheduleTimeSlots thursday) {
		this.thursday = thursday;
	}
	public ScheduleTimeSlots getFriday() {
		return friday;
	}
	public void setFriday(ScheduleTimeSlots friday) {
		this.friday = friday;
	}
	public ScheduleTimeSlots getSaturday() {
		return saturday;
	}
	public void setSaturday(ScheduleTimeSlots saturday) {
		this.saturday = saturday;
	}
	public LocalDate getDate_modified() {
		return date_modified;
	}
	public void setDate_modified(LocalDate date_modified) {
		this.date_modified = date_modified;
	}
	


}
