package com.example.server.main;
import java.util.ArrayList;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class zipController {
	
	@RequestMapping(value="/zip", method=RequestMethod.GET)
	public ArrayList<zipCode> getZipList(){
		
		zipCode zip1 = new zipCode();
		zip1.setZip("413216");
		zip1.setState("MH");
		zip1.setCity("Akkalkot");
		zip1.setCountry("India");
		
		 ArrayList<zipCode> ziplist = new ArrayList<zipCode>();
		 ziplist.add(zip1);
		
		return ziplist;
	}
	
	@RequestMapping(value="/zip/{zip}", method=RequestMethod.GET)
	public zipCode getZipCode(@PathVariable("zip") String zip) {
		zipCode zip1 = new zipCode();
		zip1.setZip("413215");
		zip1.setState("MH");
		zip1.setCity("Solapur");
		zip1.setCountry("India");
		
		return zip1;
	}
}