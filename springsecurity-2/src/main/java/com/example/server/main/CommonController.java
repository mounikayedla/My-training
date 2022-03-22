package com.example.server.main;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class CommonController {

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public @ResponseBody String postLogin(String user) {
		String userName = null;
		if(user !=null) {
		   userName = user.trim();
		}
		return userName;
    }
}
