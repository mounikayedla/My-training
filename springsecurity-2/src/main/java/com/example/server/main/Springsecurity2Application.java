package com.example.server.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration;

@SpringBootApplication(exclude = {ErrorMvcAutoConfiguration.class})
public class Springsecurity2Application {

	public static void main(String[] args) {
		SpringApplication.run(Springsecurity2Application.class, args);
	}

}
