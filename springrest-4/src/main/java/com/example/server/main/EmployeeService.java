package com.example.server.main;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class EmployeeService 
{
@Autowired
EmployeeRepository employeeRepository;
//getting all books record by using the method findaAll() of CrudRepository
public List<Employee> getAllEmployees() 
{
List<Employee> employee = new ArrayList<Employee>();
employeeRepository.findAll().forEach(employee1 -> employee.add(employee1));
return employee;
}
//getting a specific record by using the method findById() of CrudRepository
public Employee getEmployeeById(int ID) 
{
return employeeRepository.findById(ID).get();
}
//saving a specific record by using the method save() of CrudRepository
public void saveOrUpdate(Employee employee) 
{
employeeRepository.save(employee);
}
//deleting a specific record by using the method deleteById() of CrudRepository
public void delete(int ID) 
{
employeeRepository.deleteById(ID);
}
//updating a record
public void update(Employee employee, int ID) {
employeeRepository.save(employee);
}
}