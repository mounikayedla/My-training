package com.example.server.main;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class Employee {
@Id
@Column
private int ID;
@Column
private String name;
@Column
private String dept;
@Column
private String designation;
@Column
private int salary;



public int getID() {
	return ID;
}
public void setID(int iD) {
	ID = iD;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getDept() {
	return dept;
}
public void setDept(String dept) {
	this.dept = dept;
}
public String getDesignation() {
	return designation;
}
public void setDesignation(String designation) {
	this.designation = designation;
}
public int getSalary() {
	return salary;
}
public void setSalary(int salary) {
	this.salary = salary;
}


}
