package com.example.JWSInl3.Post;

import com.example.JWSInl3.User.User;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Repository
public class PostRepository {
    private Map<String, Post> posts = new HashMap<>();

    public Post createPost(Post post, User user) {
        user.getPosts().add(post);
        return posts.put(post.getTitle().toLowerCase(), post);
    }

    public Post getSpecificPost(String post) {
        Post specificPost = posts.get(post.toLowerCase());

        if (specificPost != null) { return posts.get(post); }

        return null;
    }

    public Collection<Post> getAllPosts() {
        return posts.values();
    }

    public void removePost(String title) {
        posts.remove(title);
    }
}
