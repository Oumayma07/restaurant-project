package com.restaurant.controller;

import com.restaurant.model.Admin;
import com.restaurant.repository.AdminRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admins")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {

    private final AdminRepository repository;

    public AdminController(AdminRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/register")
    public Admin register(@RequestBody Admin admin) {
        System.out.println("Admin reçu : " + admin.getEmail());
        return repository.save(admin);
    }

    @PostMapping("/login")
    public boolean login(@RequestBody Admin admin) {
        Admin existing = repository.findByEmail(admin.getEmail());
        return existing != null && existing.getPassword().equals(admin.getPassword());
    }
}
