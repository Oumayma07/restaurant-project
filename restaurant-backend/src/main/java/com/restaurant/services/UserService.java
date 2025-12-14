package com.restaurant.services;

import com.restaurant.model.User;
import com.restaurant.repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Inscription
    public User register(User user) {
        return userRepository.save(user);
    }

    // Login
    public Optional<User> login(String email, String password) {
        Optional<User> user = Optional.ofNullable(userRepository.findByEmail(email));
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return user;
        }
        return Optional.empty();
    }
}
