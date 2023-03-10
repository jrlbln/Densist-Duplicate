package com.densyst.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.densyst.dto.ResponseModel;
import com.densyst.models.Inventory;
import com.densyst.models.Transactions;
import com.densyst.repo.InventoryRepository;

@RestController
@RequestMapping("api/inventory/")
public class InventoryController {
		@Autowired
		private InventoryRepository inventoryRepo;
		
///////////////////////////////////////////////////////////////////GET   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\		
		
		@GetMapping("all")
		public List<Inventory> getAllInventory() {
			return inventoryRepo.findAll();
			}
		
		@GetMapping("item/{id}")
		public Inventory getInventory(@PathVariable Long id) {
			Optional<Inventory> inventory = inventoryRepo.findById(id);
			
			return inventory.get();
		}
		
		
		
		
		
//////////////////////////////////////////////////////////////////////POST   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
		@PostMapping("add")
		public ResponseEntity<ResponseModel> addItem(@RequestBody Inventory model) {
			Inventory save= inventoryRepo.save(model);
	    return ResponseEntity.ok().body(new ResponseModel(1,"Added Successfully",save));
		}
	}



//////////////////////////////////////////////////////////////////////PATCH   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

		
	

