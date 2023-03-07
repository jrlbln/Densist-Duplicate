package com.densyst.controller;

import java.net.URISyntaxException;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.densyst.dto.Login;
import com.densyst.dto.ResponseModel;
import com.densyst.models.Users;
import com.densyst.repo.UserRepository;
import com.densyst.util.JWTUtility;

@RestController
@RequestMapping("api/user/")
public class UserController {
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private JWTUtility jwtUtility;
	
	BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
//////////////////////////////////////////////////////////////////////GET   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

	@GetMapping("all")
	 public List<Users> getUsers() {
       return userRepo.findAll();
   }
	

	@GetMapping("{id}")
    public ResponseEntity<ResponseModel> getUser(@PathVariable Long id) {
		 Optional<Users> getUser = userRepo.findById(id);
		 if(getUser.isEmpty()) {
			 return ResponseEntity.ok().body(new ResponseModel(0,"No data found"));
		 }else {
			return ResponseEntity.ok().body(new ResponseModel(1, "Get user", null, getUser));
		 }
    }
	
	
	
	@GetMapping("type/{type}")
	 public List<Users> getAllUsersByRole(@PathVariable String type) {
      return userRepo.findUserbyType(type);
  }
	
	
	
	
	
	
	


//////////////////////////////////////////////////////////////////////	POST   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	 @PostMapping("register")
	 public ResponseEntity<ResponseModel> registerUser(@RequestBody Users user)
		{
		 Optional<Users> findUser = Optional.ofNullable(userRepo.findByUserName(user.getUserName()));
		 if(findUser.isPresent()) {
			 return ResponseEntity.ok().body(new ResponseModel(0, "Username already exists", "", null));
		 }else {
			 	String hashedPassword = bcrypt.encode(user.getPassword());
			 	user.setPassword(hashedPassword);
			 	Users save = userRepo.save(user);
				return ResponseEntity.ok().body(new ResponseModel(1, "Added Successfully", null, save));
		 }
		}
	 
	 @PostMapping("login")
	 public ResponseEntity<ResponseModel> login(@RequestBody Login model){
		 try {
			 Optional<Users> user =Optional.ofNullable(userRepo.findByUserName(model.getUsername()));
			 Users getUser = user.get();
			 if(user.isPresent() && getUser.getUserName().equals(model.getUsername()) && bcrypt.matches(model.getPassword(), getUser.getPassword()) && getUser.getActive()) {
				 ResponseModel responseModel = new ResponseModel(1, "Login successful",jwtUtility.generateToken(getUser.getLastName()) ,getUser);
	                return ResponseEntity.ok().body(responseModel);
			 }else if(!getUser.getActive()) {
				 return ResponseEntity.ok().body(new ResponseModel(0, "Your account has been deactivated", "", null));
			 }else {
				 return ResponseEntity.ok().body(new ResponseModel(0, "Username and password is incorrect", "", null));
			 }
			 
		 }catch (NoSuchElementException e) {
	            return ResponseEntity.ok().body(new ResponseModel(0, "No record data", "", null));
	        }   
	 }
	 




















//////////////////////////////////////////////////////////////////////PATCH   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

	 
	 	@PatchMapping("edit/{id}")
		public ResponseEntity<ResponseModel> updateProfile(@PathVariable("id") Long id, @RequestBody Users user)
				throws URISyntaxException
		{
			Optional<Users> userExist = userRepo.findById(id);
			if (userExist.isEmpty()){
				 return ResponseEntity.ok().body(new ResponseModel(0, "No record data", "", null));
			}
			else {
				userExist.get().setFirstName(user.getFirstName());
				userExist.get().setMiddleName(user.getMiddleName());
				userExist.get().setLastName(user.getLastName());
				userExist.get().setBirthdate(user.getBirthdate());
				userExist.get().setAddress(user.getAddress());
				userExist.get().setContactNumber(user.getContactNumber());
				userExist.get().setEmail(user.getEmail());
				Users save =userRepo.save(userExist.get());
				return ResponseEntity.ok().body(new ResponseModel(1, "Update Successfully", null, save));
			}
		}
	 	
	 	@PatchMapping("security/{id}")
		public ResponseEntity<ResponseModel> updateProfile(@PathVariable("id") Long id, @RequestBody Login model)
				throws URISyntaxException{
			Optional<Users> userExist = userRepo.findById(id);
			if (userExist.isEmpty()){
				 return ResponseEntity.ok().body(new ResponseModel(0, "No record data", "", null));
			}
			else {
				userExist.get().setUserName(model.getUsername());
				userExist.get().setPassword(model.getPassword());
				Users save =userRepo.save(userExist.get());
				return ResponseEntity.ok().body(new ResponseModel(1, "Updated Successfully", null, save));
			}
		}
	 	
	 	@PatchMapping("deactivate/{id}")
		public ResponseEntity<ResponseModel> deactivateUser(@PathVariable("id") Long id)
				throws URISyntaxException{
			Optional<Users> userExist = userRepo.findById(id);
			if (userExist.isEmpty()){
				 return ResponseEntity.ok().body(new ResponseModel(0, "No record data", "", null));
			}
			else {
				userExist.get().setActive(false);
				Users save =userRepo.save(userExist.get());
				return ResponseEntity.ok().body(new ResponseModel(1, "Updated Successfully", null, save));
			}
		}
	 	
	 	@PatchMapping("activate/{id}")
		public ResponseEntity<ResponseModel> activateUser(@PathVariable("id") Long id)
				throws URISyntaxException{
			Optional<Users> userExist = userRepo.findById(id);
			if (userExist.isEmpty()){
				 return ResponseEntity.ok().body(new ResponseModel(0, "No record data", "", null));
			}
			else {
				userExist.get().setActive(true);
				Users save =userRepo.save(userExist.get());
				return ResponseEntity.ok().body(new ResponseModel(1, "Updated Successfully", null, save));
			}
		}
	 	
	 	
	 	@PatchMapping("modify/type/user/{id}")
		public ResponseEntity<ResponseModel> modifyRole(@PathVariable("id") Long id)
				throws URISyntaxException{
			Optional<Users> userExist = userRepo.findById(id);
			if (userExist.isEmpty()){
				 return ResponseEntity.ok().body(new ResponseModel(0, "No record data", "", null));
			}
			else {
				
				
					userExist.get().setRole("Admin");
				
				Users save =userRepo.save(userExist.get());
				return ResponseEntity.ok().body(new ResponseModel(1, "Updated Successfully", null, save));
			}
		}



















//////////////////////////////////////////////////////////////////////DELETE   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


	 








	
	
	
}
