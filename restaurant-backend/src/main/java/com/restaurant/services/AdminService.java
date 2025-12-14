package com.restaurant.services;

import com.restaurant.model.Admin;
import com.restaurant.repository.AdminRepository;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class AdminService {

    private final AdminRepository adminRepository;

    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    // Inscription
    public Admin register(Admin admin) {
        return adminRepository.save(admin);
    }

    // Login
    public Optional<Admin> login(String email, String password) {
        Optional<Admin> admin = Optional.ofNullable(adminRepository.findByEmail(email));
        if (admin.isPresent() && admin.get().getPassword().equals(password)) {
            return admin;
        }
        return Optional.empty();
    }
}
