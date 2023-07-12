package com.example.ABCBank.controller;

import com.example.ABCBank.Repositories.BankAccountRepository;
import com.example.ABCBank.config.JwtService;
import com.example.ABCBank.model.BankAccount;
import com.example.ABCBank.model.User;
import com.example.ABCBank.service.BankAccountService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/auth")
@RequiredArgsConstructor
public class BankAccountController {

    @Autowired
    private BankAccountService bankAccountService;

    @Autowired
    private BankAccountRepository bankAccountRepository;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/createBankAccount")
    public User createBankAccount(HttpServletRequest request, @RequestBody BankAccount bankAccount) {
        try {
            User user = jwtService.getAuthUser(request);

            System.out.println(user.toString());
            return bankAccountService.createBankAccount(user, bankAccount);
        } catch (Exception e){
            return new User();
        }
    }

    @GetMapping("/pdf")
    public void generateBankDetails(HttpServletResponse response){
        response.setContentType("application/pdf");

        try {
            bankAccountService.generatePdf(response);
        }catch (Exception e){

        }
    }


}