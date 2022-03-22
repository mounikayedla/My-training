package com.example.server.main;  
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;  
import org.springframework.web.bind.annotation.RestController;  
//Controller  
@Controller  
public class HelloWorldController   
{  
//using get method and hello-world URI  
@GetMapping(path="/hello-world")  
public String helloWorld()  
{  
return "Hello World";  
}  
/*@GetMapping(path="/hello-world-bean")  
public HelloWorldBean helloWorldBean()  
{  
return new HelloWorldBean("Hello World"); //constructor of HelloWorldBean  
}  */
}  