package com.densyst.models;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.hibernate.envers.Audited;


@Entity
@Audited
public class Appointment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String service;
	private LocalDateTime dateTime;
	private String status;
	
	@ManyToOne(targetEntity = Users.class)
	private Users user;
	
	private LocalDate date_modified = LocalDate.now();
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getService() {
		return service;
	}
	public Users getUser() {
		return user;
	}
	public void setUser(Users user) {
		this.user = user;
	}
	public void setService(String service) {
		this.service = service;
	}
	public LocalDateTime getDateTime() {
		return dateTime;
	}
	public void setDateTime(LocalDateTime dateTime) {
		this.dateTime = dateTime;
	}
	public LocalDate getDate_modified() {
		return date_modified;
	}
	public void setDate_modified(LocalDate date_modified) {
		this.date_modified = date_modified;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {	
		this.status = status;
	}
	
	

}
