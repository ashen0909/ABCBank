package com.example.ABCBank.model.dto;

import com.example.ABCBank.model.Role;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class UserDto {

    private Long id;
    private String firstname;

    private String lastname;

    private String address;

    private String phone;

    private String nic;

    private String city;

    private String country;

    private String email;

    private List<Role> role;
}
