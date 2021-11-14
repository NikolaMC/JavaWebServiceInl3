package com.example.JWSInl3.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/register")
    public void registerUser(@RequestBody User user, HttpServletResponse response) {
        if (!userService.registerUser(user)) { response.setStatus(409); }
        response.setStatus(201);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user, HttpServletResponse response) {
        String token = userService.login(user.getName().toLowerCase(), user.getPassword());

        if (token == null) {
            response.setStatus(406);
            return null;
        }
        response.setStatus(200);
        return token;
    }

    @PostMapping("/logout")
    public void logoutUser(@RequestHeader String token){
        userService.logout(token);
    }

}
