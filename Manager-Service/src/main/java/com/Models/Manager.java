package com.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="manager")
public class Manager {
	@Id
	private String id;
private String name;
private String email;
private String contact;
private String address;
public String getId() {
	return id;
}
public void setId(String id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getContact() {
	return contact;
}
public void setContact(String contact) {
	this.contact = contact;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
@Override
public String toString() {
	return "Manager [id=" + id + ", name=" + name + ", email=" + email + ", contact=" + contact + ", address=" + address
			+ "]";
}
public Manager(String id, String name, String email, String contact, String address) {
	super();
	this.id = id;
	this.name = name;
	this.email = email;
	this.contact = contact;
	this.address = address;
}

}
