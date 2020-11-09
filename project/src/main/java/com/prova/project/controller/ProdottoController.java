package com.prova.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.prova.project.entity.Prodotto;
import com.prova.project.repository.ProdottoRepository;

@CrossOrigin(origins = "*", maxAge = 3600) //chiamate abilitate da qualunque porta
@RestController
@RequestMapping("/prodotto")

public class ProdottoController {
		
	@Autowired
	private ProdottoRepository prodottoRepository;


	@GetMapping("/allProdotti")
    public @ResponseBody List<Prodotto> tabellaDatiDellUtente() {
		
																					System.out.println("    public @ResponseBody List<Prodotto> tabellaDatiDellUtente() {\r\n" + 
																											"");

       List<Prodotto> tableProdotto = (List<Prodotto>) prodottoRepository.findAll();
       
       																				System.out.println("       List<Prodotto> tableProdotto = (List<Prodotto>) prodottoRepository.findAll();\r\n" + 
       																										"");

        return tableProdotto;
    }

	  @DeleteMapping("/delete/{id}")
	  public void deleteCourse(@PathVariable int id) {
		 
		  prodottoRepository.deleteById(id);
			System.out.println("prodottoRepository.deleteById(id);\r\n");
	
	    return  ;
	  }
	  
	  //RICEVI UN PRODOTTO
	  
	  @GetMapping("prodotti/{id}")
	  public Prodotto getProdotto(@PathVariable int id) {	
		  																							System.out.println("	  public Prodotto getProdotto(@PathVariable int id) ");
		  		 
			  Prodotto prodottoCheck = prodottoRepository.findById(id).get();
			  																							System.out.println("			  Prodotto prodottoCheck = prodottoRepository.findById(id).get();\r\n" + 
			  																												"");
			  return prodottoCheck;

		 																						
	    
	  }
	   
	//CREA UN PRODOTTO 
	  @GetMapping("add")
	  public Prodotto addProdotto(@RequestBody Prodotto prodotto) {	
		 
		  
		  Prodotto newProdotto = new Prodotto(prodotto.getNome(), prodotto.getPrezzo(), prodotto.getDescrizione(), prodotto.getQuantita(), prodotto.getImmagine());
			prodottoRepository.save(newProdotto);
			  																							System.out.println("			prodottoRepository.save(newProdotto);\r\n" + 
		 																								"");
		   return null;

	    
		 																					
	  }
	  
	  //MODIFICA PRODOTTO 
	  @PutMapping("update/")
	  public Prodotto updateProdotto(@RequestBody Prodotto prodotto) {	
		  																										System.out.println(" public Prodotto updateProdotto(@RequestBody Prodotto prodotto) {	");
		  																										
          System.out.println(prodotto.getId());
          System.out.println(prodotto.getNome());
          System.out.println(prodotto.getPrezzo());
          System.out.println(prodotto.getQuantita());
          System.out.println(prodotto.getImmagine());
		  prodottoRepository.save(prodotto);
		  																										System.out.println("prodottoRepository.save(prodotto);");
		  																							
	  return null;
	    
	  }
	  
  
	  
	
	
}













