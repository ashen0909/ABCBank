package com.example.ABCBank.controller;

import com.example.ABCBank.model.ResponseWrapper;
import com.example.ABCBank.model.User;
import com.example.ABCBank.model.dto.UserCreationDto;
import com.example.ABCBank.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1/auth")
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private UserService userService;



    @PostMapping("/dto")
    public ResponseWrapper createFromDto (@RequestBody UserCreationDto userCreationDto) {
        try{
            User user = userService.createFromDto(userCreationDto);
            return new ResponseWrapper<>(user, "success", "created");
        }catch (Exception e){
            return new ResponseWrapper<>(null, "failed", e.getMessage());
        }
    }

    @GetMapping
    public ResponseWrapper getAllUsers () {

        try {
            return new ResponseWrapper<>(userService.getAllUsers(), "success", "fetched");
        } catch (Exception e) {
            return new ResponseWrapper<>(null, "failed", e.getMessage());
        }

    }
}


