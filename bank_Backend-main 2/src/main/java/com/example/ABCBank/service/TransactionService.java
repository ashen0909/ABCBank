package com.example.ABCBank.service;

import com.example.ABCBank.model.BankAccount;
import com.example.ABCBank.model.Transaction;
import com.example.ABCBank.model.TransactionType;
import com.example.ABCBank.Repositories.BankAccountRepository;
import com.example.ABCBank.Repositories.TransactionRepository;
import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class TransactionService {

  @Autowired
  private  TransactionRepository transactionRepository;

    @Autowired
    private BankAccountRepository bankAccountRepository;

    @Autowired
    private BankAccountService bankAccountService;


    public BankAccount transaction(Long bankAccountID, Long amount){
        BankAccount bankAccount = bankAccountService.findsById(bankAccountID);
        Transaction transactions = new Transaction();
        bankAccount.setAccountBalance(bankAccount.getAccountBalance() + amount);
        long balance = bankAccount.getAccountBalance();
        transactions.setType(TransactionType.DEPOSIT);
        transactions.setAmount(amount);

        List<Transaction> transactionList = bankAccount.getTransactions();
        transactionList.add(transactions);
        bankAccount.setTransactions(transactionList);
        transactionRepository.save(transactions);
        return bankAccountRepository.save(bankAccount);
    }


}
