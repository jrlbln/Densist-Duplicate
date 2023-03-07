package com.densyst.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.densyst.models.Inventory;

public interface InventoryRepository extends JpaRepository<Inventory, Long> {

}
