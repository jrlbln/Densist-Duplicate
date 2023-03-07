package com.densyst.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ScheduleTimeSlots {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private Boolean time08_00am;
	private Boolean time09_00am;
	private Boolean time10_00am;
	private Boolean time11_00am;
	private Boolean time12_00pm;
	private Boolean time01_00pm;
	private Boolean time02_00pm;
	private Boolean time03_00pm;
	private Boolean time04_00pm;
	private Boolean time05_00pm;
	private Boolean time06_00pm;
	private Boolean time07_00pm;
	private Boolean time08_00pm;
	
	
	public ScheduleTimeSlots() {
		super();
		this.time08_00am  = false;
		this.time09_00am  = false;
		this.time10_00am  = false;
		this.time11_00am  = false;
		this.time12_00pm  = false;
		this.time01_00pm  = false;
		this.time02_00pm  = false;
		this.time03_00pm  = false;
		this.time04_00pm  = false;
		this.time05_00pm  = false;
		this.time06_00pm  = false;
		this.time07_00pm  = false;
		this.time08_00pm  = false;
	}
	
	public ScheduleTimeSlots(Boolean time08_00am, Boolean time09_00am, Boolean time10_00am, Boolean time11_00am,
			Boolean time12_00pm, Boolean time01_00pm, Boolean time02_00pm, Boolean time03_00pm, Boolean time04_00pm,
			Boolean time05_00pm, Boolean time06_00pm, Boolean time07_00pm, Boolean time08_00pm) {
		super();
		this.time08_00am = time08_00am;
		this.time09_00am = time09_00am;
		this.time10_00am = time10_00am;
		this.time11_00am = time11_00am;
		this.time12_00pm = time12_00pm;
		this.time01_00pm = time01_00pm;
		this.time02_00pm = time02_00pm;
		this.time03_00pm = time03_00pm;
		this.time04_00pm = time04_00pm;
		this.time05_00pm = time05_00pm;
		this.time06_00pm = time06_00pm;
		this.time07_00pm = time07_00pm;
		this.time08_00pm = time08_00pm;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Boolean getTime08_00am() {
		return time08_00am;
	}
	public void setTime08_00am(Boolean time08_00am) {
		this.time08_00am = time08_00am;
	}
	public Boolean getTime10_00am() {
		return time10_00am;
	}
	public void setTime10_00am(Boolean time10_00am) {
		this.time10_00am = time10_00am;
	}
	public Boolean getTime12_00pm() {
		return time12_00pm;
	}
	public void setTime12_00pm(Boolean time12_00pm) {
		this.time12_00pm = time12_00pm;
	}
	public Boolean getTime02_00pm() {
		return time02_00pm;
	}
	public void setTime02_00pm(Boolean time02_00pm) {
		this.time02_00pm = time02_00pm;
	}
	public Boolean getTime04_00pm() {
		return time04_00pm;
	}
	public void setTime04_00pm(Boolean time04_00pm) {
		this.time04_00pm = time04_00pm;
	}
	public Boolean getTime06_00pm() {
		return time06_00pm;
	}
	public Boolean getTime09_00am() {
		return time09_00am;
	}
	public void setTime09_00am(Boolean time09_00am) {
		this.time09_00am = time09_00am;
	}
	public Boolean getTime11_00am() {
		return time11_00am;
	}
	public void setTime11_00am(Boolean time11_00am) {
		this.time11_00am = time11_00am;
	}
	public Boolean getTime01_00pm() {
		return time01_00pm;
	}
	public void setTime01_00pm(Boolean time01_00pm) {
		this.time01_00pm = time01_00pm;
	}
	public Boolean getTime03_00pm() {
		return time03_00pm;
	}
	public void setTime03_00pm(Boolean time03_00pm) {
		this.time03_00pm = time03_00pm;
	}
	public Boolean getTime05_00pm() {
		return time05_00pm;
	}
	public void setTime05_00pm(Boolean time05_00pm) {
		this.time05_00pm = time05_00pm;
	}
	public Boolean getTime07_00pm() {
		return time07_00pm;
	}
	public void setTime07_00pm(Boolean time07_00pm) {
		this.time07_00pm = time07_00pm;
	}
	public void setTime06_00pm(Boolean time06_00pm) {
		this.time06_00pm = time06_00pm;
	}
	public Boolean getTime08_00pm() {
		return time08_00pm;
	}
	public void setTime08_00pm(Boolean time08_00pm) {
		this.time08_00pm = time08_00pm;
	}
	
	
	
}
