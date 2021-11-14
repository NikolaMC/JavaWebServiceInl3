package com.example.JWSInl3.User;

import com.example.JWSInl3.Post.Post;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class User {
    private String name, password;
    private List<Post> posts;

    public User(String name, String password) {
        this.name = name;
        this.password = password;
        this.posts = new ArrayList<>();
    }
}
