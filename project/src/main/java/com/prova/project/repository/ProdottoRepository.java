package com.prova.project.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.prova.project.entity.Prodotto;


@Repository
public interface ProdottoRepository extends CrudRepository<Prodotto, Integer>{
	
	
	@Query(value= "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'prodotti'", nativeQuery = true)
	Iterable<String> findListTableName();
	
}

