package com.example.ABCBank.model.dto;
import lombok.Data;

@Data
public class UserCreationDto {
    private String firstname;
    private String lastname;
    private String address;
    private String phone;
    private String nic;
    private String city;
    private String country;
    private String email;
    private String password;
}

