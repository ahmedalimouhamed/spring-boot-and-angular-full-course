package com.in28minutes.rest.webservices.restfulwebservices.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class BasicAuthenticationController {
    @GetMapping("/basicauth")
    public AuthenticationBean helloWorldBean(){
        //throw new RuntimeException("Some error has happend");
        return new AuthenticationBean("You are authenticated");
    }
}
