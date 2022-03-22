package com.example.server.main;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
@GetMapping("/")
public String sayHello() {
return ("<h1> Hi HelloWorld</h1>");

}
@GetMapping("/user")
public String user() {
	return ("<h1>welcome user</h1>");
}
@GetMapping("/admin")
public String admin() {
	return ("<h1>welcome admin</h1>");
}



}