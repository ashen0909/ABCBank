package com.example.ABCBank.controller;

import com.example.ABCBank.model.ResponseWrapper;
import com.example.ABCBank.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("roles")
@CrossOrigin(origins = "*", maxAge = 3600)
public class RoleController {

    @Autowired
    RoleService roleService;


    @GetMapping
    public ResponseWrapper getAllRoles (){

        try{
            return new ResponseWrapper<>(roleService.findAll(), "success", "fetched");
        }catch (Exception e){
            return new ResponseWrapper<>(null, "failed", e.getMessage());
        }

    }

    @PostMapping("/byName")
    public ResponseWrapper createRoleByName (@RequestBody String roleName){

        try{
            return new ResponseWrapper<>(roleService.create(roleName), "success", "created");
        }catch (Exception e){
            return new ResponseWrapper<>(null, "failed", e.getMessage());
        }

    }
}