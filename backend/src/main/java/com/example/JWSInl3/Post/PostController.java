package com.example.JWSInl3.Post;

import com.example.JWSInl3.User.User;
import com.example.JWSInl3.User.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.Collection;

@RestController
@RequestMapping("/post")
public class PostController {

    @Autowired
    PostService postService;

    @Autowired
    UserService userService;

    @GetMapping("/all")
    public Collection<Post> getAllPosts(HttpServletResponse response) {
        return postService.getAllPosts();
    }

    @GetMapping("/user-posts")
    public Collection<Post> getUsersPosts(@RequestHeader("token") String token, HttpServletResponse response) {
        User user = userService.validate(token);
        if (user == null) {
            response.setStatus(401);
            return null;
        }
        return user.getPosts();
    }

    @PostMapping("/create")
    public Post createPost(@RequestHeader("token") String token, @RequestBody Post post, HttpServletResponse response) {
        User user = userService.validate(token);
        if (user == null || post == null) {
            response.setStatus(401);
            return null;
        }
        response.setStatus(201);
        return postService.createPost(post, user);
    }

    @DeleteMapping("/delete/{name}/{post}")
    public void deletePost(@RequestHeader("token") String token, @PathVariable String name, @PathVariable String post, HttpServletResponse response) {
        User user = userService.validate(token);
        if (user == null || post == null || name == null) { response.setStatus(401); }
        assert post != null;
        if (userService.removePost(name, post)) { response.setStatus(200); }
        if (postService.deletePost(post)) { response.setStatus(200); }
    }

}
