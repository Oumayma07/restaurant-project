package com.restaurant.controller;

import com.restaurant.model.User;
import com.restaurant.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private final UserRepository repository;

    public UserController(UserRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        System.out.println("User reçu : " + user.getEmail());
        return repository.save(user);
    }

    @PostMapping("/login")
    public boolean login(@RequestBody User user) {
        User existing = repository.findByEmail(user.getEmail());
        return existing != null && existing.getPassword().equals(user.getPassword());
    }
}
