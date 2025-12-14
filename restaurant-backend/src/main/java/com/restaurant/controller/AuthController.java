package com.restaurant.controller;

import com.restaurant.model.User;
import com.restaurant.services.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        System.out.println("User reçu : " + user.getEmail());
        return userService.register(user);
    }

    @PostMapping("/login")
    public Object login(@RequestBody User loginData) {
        return userService.login(loginData.getEmail(), loginData.getPassword())
                .map(user -> new TokenResponse("fake-jwt-token")) // plus tard JWT réel
                .orElseThrow(() -> new RuntimeException("Email ou mot de passe incorrect"));
    }

    static class TokenResponse {
        public String token;
        public TokenResponse(String token) { this.token = token; }
    }
}
