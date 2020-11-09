package com.prova.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.prova.project.entity.User;
import com.prova.project.repository.UserRepository;

@CrossOrigin(origins = "*", maxAge = 3600) //chiamate abilitate da qualunque porta
@RestController
@RequestMapping("/user")

public class UserController {
		
	@Autowired
	private UserRepository userRepository;


	@GetMapping("/allUsers")
    public @ResponseBody List<User> tabellaDatiDellUtente() {
		
																					System.out.println("    public @ResponseBody List<User> tabellaDatiDellUtente() {\r\n" + 
																											"");

       List<User> tableUser = (List<User>) userRepository.findAll();
       
       																				System.out.println("       List<User> tableUser = (List<User>) userRepository.findAll();\r\n" + 
       																										"");

        return tableUser;
    }

	  @DeleteMapping("/delete/{id}")
	  public void deleteCourse(@PathVariable int id) {
		 
		  userRepository.deleteById(id);
			System.out.println("		  userRepository.deleteById(id);\r\n" + 
					"");
	
	    return  ;
	  }
	  
	  //RICEVI UN UTENTE
	  
	  @GetMapping("users/{id}")
	  public User getUser(@PathVariable int id) {	
		  																							System.out.println("	  public User getUser(@PathVariable int id) ");
		  		 
			  User userCheck = userRepository.findById(id).get();
			  																							System.out.println("			  User userCheck = userRepository.findById(id).get();\r\n" + 
			  																												"");
			  return userCheck;

		 																						
	    
	  }
	   
	//CREA UN UTENTE 
	  @GetMapping("add")
	  public User addUser(@RequestBody User user) {	
		 
		  if ("admin".equals(user.getRuolo())|| "cliente".equals(user.getRuolo())){
		  
		  User newUser = new User(user.getNome(), user.getCognome(), user.getEmail(), user.getPassword(), user.getRuolo());
			userRepository.save(newUser);
			  																							System.out.println("			userRepository.save(newUser);\r\n" + 
		 																								"");
		  }  return null;

	    
		 																					
	  }
	  
	  //MODIFICA UTENTE 
	  @PutMapping("update/")
	  public User updateUser(@RequestBody User user) {	
		  																										System.out.println(" public User updateUser(@RequestBody User user) {	");
	if ("admin".equals(user.getRuolo())|| "cliente".equals(user.getRuolo())){
		  																										
          System.out.println(user.getId());
          System.out.println(user.getNome());
          System.out.println(user.getCognome());
          System.out.println(user.getPassword());
          System.out.println(user.getRuolo());
		  userRepository.save(user);
		  																										System.out.println("userRepository.save(user);");
		  																							
	}  return null;
	    
	  }
	  
	  //LOGIN UTENTE 
	  @PostMapping("login")
	  public User loginUser(@RequestBody User user) {	
		  
		  User newUser = new User(user.getNome(), user.getCognome(), user.getEmail(), user.getPassword(), user.getRuolo());
		
		 User userCheck =  userRepository.findByEmailAndPassword(newUser.getEmail(), newUser.getPassword());
			  																							System.out.println("userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());");
			  return userCheck;

		 																						
	    
	  }
	  
	  
	
	
}













