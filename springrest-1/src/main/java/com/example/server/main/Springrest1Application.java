package com.example.server.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration;

@SpringBootApplication(exclude = {ErrorMvcAutoConfiguration.class})
public class Springrest1Application {

	public static void main(String[] args) {
		SpringApplication.run(Springrest1Application.class);
	}

}
