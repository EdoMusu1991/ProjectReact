package com.prova.project.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="prodotti")
public class Prodotto {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	@Column(name = "nome")
	private String nome;
	
	@Column(name = "prezzo")
	private int prezzo;
	
	@Column(name = "descrizione")
	private String descrizione;
	
	@Column(name = "quantita")
	private int quantita;
	
	@Column(name = "immagine")
	private String immagine;
	
	

	public Prodotto( ) {
		super();
	}
	
	public Prodotto( String nome, int prezzo, String descrizione, int quantita, String immagine) {
		super();
		
		this.nome = nome;
		this.prezzo = prezzo;
		this.descrizione = descrizione;
		this.quantita = quantita;
		this.immagine = immagine;
	}


	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public int getPrezzo() {
		return prezzo;
	}

	public void setPrezzo(int prezzo) {
		this.prezzo = prezzo;
	}

	public String getDescrizione() {
		return descrizione;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}

	public int getQuantita() {
		return quantita;
	}

	public void setQuantita(int quantita) {
		this.quantita = quantita;
	}

	public String getImmagine() {
		return immagine;
	}

	public void setImmagine(String immagine) {
		this.immagine = immagine;
	}

	
}
