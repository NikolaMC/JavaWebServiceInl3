package com.example.JWSInl3.User;

import com.example.JWSInl3.Post.Post;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;

@Repository
public class UserRepository {
    private final Map<String, User> users = new HashMap<>();

    public boolean registerUser(User user) {
        if (users.containsKey(user.getName().toLowerCase())) { return false; }
        users.put(user.getName().toLowerCase(), user);
        return true;
    }

    public User getUser(String name) { return users.get(name.toLowerCase()); }

    public void removePost(String name, Post title) { getUser(name).getPosts().remove(title); }
}
