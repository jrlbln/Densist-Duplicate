package com.densyst.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.densyst.models.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
	
	@Query(nativeQuery = true, value = "SELECT * FROM appointment where status =?1")
	List<Appointment> getStatus(String status);
	
	

}
