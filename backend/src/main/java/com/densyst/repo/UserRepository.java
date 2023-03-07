package com.densyst.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.densyst.models.Users;

public interface UserRepository extends JpaRepository<Users, Long> {
	@Query(nativeQuery = true, value="SELECT * FROM users WHERE user_name= ?1")
	Users  findByUserName(String userName);
	
	@Query(nativeQuery = true, value="SELECT * FROM users WHERE id = ?1")
	Users  findUserById(Long id);
	
	
	@Query(nativeQuery = true, value="SELECT * FROM users WHERE role=?1")
	List<Users>  findUserbyType(String role);
	

}
