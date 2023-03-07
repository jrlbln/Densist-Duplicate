package com.densyst.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.densyst.models.Schedule;
import com.densyst.models.Users;

public interface ScheduleRepository extends JpaRepository<Schedule, Long> {
	
	@Query(nativeQuery = true,value = "SELECT * FROM schedule where user_id =?1")
	Boolean findUser(Long id);

}
