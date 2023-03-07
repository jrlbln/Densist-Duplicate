package com.densyst.models;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;

import org.hibernate.envers.Audited;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Audited
public class Transactions {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String service;
	private Double charge;
	private String status;
	private LocalDateTime dateTime = LocalDateTime.now();
	private LocalDate date_modified = LocalDate.now();
	
	@ManyToOne(targetEntity = Users.class)
	@JoinColumn(name = "user_id")
	@JsonIgnoreProperties({"id", "firstName", "middleName", "lastName", "contactNumber", "email", "address"})
	private Users user;

	@Column(name = "user_fullname")
	private String userFullName;

	@PrePersist
	@PreUpdate
	private void updateUserFullName() {
	if (user != null) {
	this.userFullName = user.getFirstName() + " " + user.getMiddleName() + " " + user.getLastName();
	}
	}

	public String getUserFullName() {
	if (userFullName == null && user != null) {
	updateUserFullName();
	}
	return userFullName;
	}
	

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getService() {
		return service;
	}
	public void setService(String service) {
		this.service = service;
	}
	public Double getCharge() {
		return charge;
	}
	public void setCharge(Double charge) {
		this.charge = charge;
	}
	public LocalDateTime getDateTime() {
		return dateTime;
	}
	public void setDateTime(LocalDateTime dateTime) {
		this.dateTime = dateTime;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public LocalDate getDate_modified() {
		return date_modified;
	}
	public void setDate_modified(LocalDate date_modified) {
		this.date_modified = date_modified;
	}

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	public void setUserFullName(String userFullName) {
		this.userFullName = userFullName;
	}
	
	
	
}
	
