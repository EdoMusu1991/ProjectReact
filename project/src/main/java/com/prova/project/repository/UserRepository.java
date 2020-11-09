package com.prova.project.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.prova.project.entity.User;


@Repository
public interface UserRepository extends CrudRepository<User, Integer>{
	
	User findByEmailAndPassword(String email, String password);
	
	@Query(value= "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'users'", nativeQuery = true)
	Iterable<String> findListTableName();
	
}

