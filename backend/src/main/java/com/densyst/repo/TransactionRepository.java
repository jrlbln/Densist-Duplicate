package com.densyst.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.densyst.models.Transactions;

public interface TransactionRepository extends JpaRepository<Transactions, Long> {
	@Query(nativeQuery = true, value = "SELECT * FROM transactions WHERE user_id = ?1")
	public List<Transactions> getAllTransactionsbyId(Long id);
	
	
	@Query(nativeQuery = true, value = "SELECT * FROM transactions WHERE id = ?1")
	public Transactions getById(Long id);
}
