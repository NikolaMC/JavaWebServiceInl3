package com.example.JWSInl3.Post;

import com.example.JWSInl3.User.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;

    public Post createPost(Post post, User user) {
        if (postRepository.createPost(post, user) != null) {
            return new Post(post.getTitle(), post.getContent(), post.getName());
        }
        return null;
    }

    public Collection<Post> getAllPosts() { return postRepository.getAllPosts(); }

    public boolean deletePost(String post) {
        if (post.toLowerCase().equals(postRepository.getSpecificPost(post).getTitle())) {
            postRepository.removePost(post.toLowerCase());
            return true;
        }
        return false;
    }
}
