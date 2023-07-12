package com.example.ABCBank.controller;

import com.example.ABCBank.model.BankAccount;
import com.example.ABCBank.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/auth")
@RequiredArgsConstructor
public class TransactionController {

    @Autowired
    private TransactionService transactionService;


    @PostMapping("/transaction/{amount}/{bankAccountID}")
    public BankAccount transactionAmount(@PathVariable long bankAccountID, @PathVariable long amount){
        return transactionService.transaction(bankAccountID, amount);
    }


}