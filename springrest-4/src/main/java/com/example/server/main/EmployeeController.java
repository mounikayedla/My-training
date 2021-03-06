package com.example.server.main;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

//mark class as Controller
@RestController
public class EmployeeController 
{
//autowire the BooksService class
@Autowired
EmployeeService employeeService;
//creating a get mapping that retrieves all the books detail from the database 
@GetMapping("/employee")
private List<Employee> getAllEmployee() 
{
return employeeService.getAllEmployees();
}
//creating a get mapping that retrieves the detail of a specific book
@GetMapping("/employee/{ID}")
private Employee getEmployee(@PathVariable("ID") int ID) 
{
return employeeService.getEmployeeById(ID);
}
//creating a delete mapping that deletes a specified book
@DeleteMapping("/employee/{ID}")
private void deleteEmployee(@PathVariable("ID") int ID) 
{
employeeService.delete(ID);
}
//creating post mapping that post the book detail in the database
@PostMapping("/employee")
private int saveEmployee(@RequestBody Employee employee) 
{
employeeService.saveOrUpdate(employee);
return employee.getID();
}
//creating put mapping that updates the book detail 
@PutMapping("/employee")
private Employee update(@RequestBody Employee employee) 
{
employeeService.saveOrUpdate(employee);
return employee;
}
}
