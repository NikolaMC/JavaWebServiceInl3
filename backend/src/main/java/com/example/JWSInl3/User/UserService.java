package com.example.JWSInl3.User;

import com.example.JWSInl3.Post.Post;
import com.example.JWSInl3.Post.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    PostRepository postRepository;

    private Map<String, User> tokens = new HashMap<>();

    public boolean registerUser(User user) {
        return userRepository.registerUser(user);
    }

    public String login(String name, String password) {
        User user = userRepository.getUser(name);

        if (user == null) { return null; }
        if (!user.getPassword().equals(password)) { return null; }

        String token = UUID.randomUUID().toString();
        tokens.put(token, user);
        return token;
    }

    public void logout(String token) { tokens.remove(token); }

    public User validate(String token) { return tokens.get(token); }

    public boolean removePost(String name, String title) {
        if (name == null || title == null) { return false; }

        Post post = postRepository.getSpecificPost(title);
        userRepository.removePost(name, post);
        return true;
    }
}
