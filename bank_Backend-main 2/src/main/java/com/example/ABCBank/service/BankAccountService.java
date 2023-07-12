package com.example.ABCBank.service;

import com.example.ABCBank.Repositories.BankAccountRepository;
import com.example.ABCBank.Repositories.UserRepository;
import com.example.ABCBank.model.BankAccount;
import com.example.ABCBank.model.User;
import com.lowagie.text.Document;
import com.lowagie.text.PageSize;
import com.lowagie.text.Paragraph;
import com.lowagie.text.Phrase;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;
import jakarta.persistence.EntityNotFoundException;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
@Transactional
public class BankAccountService {

    @Autowired
    private BankAccountRepository bankAccountRepository;

    @Autowired
    private UserRepository userRepository;

    public User createBankAccount(User user, BankAccount bankAccount) {
        List<BankAccount> bankAccounts = user.getBankAccount();
        bankAccounts.add(bankAccount);
        user.setBankAccount(bankAccounts);
        return userRepository.save(user);
    }

    public BankAccount findsById(Long bankAccountID) {
        return bankAccountRepository.findById(bankAccountID).orElseThrow(() -> new EntityNotFoundException("Bank account not found"));
    }

    public String deleteBankAccount(Long bankAccountID){
        BankAccount bankAccount = bankAccountRepository.findById(bankAccountID).orElseThrow(() -> new EntityNotFoundException("Bank account not found"));
        bankAccountRepository.delete(bankAccount);

        return "Bank Account with ID "+ bankAccountID +" deleted.";

    }

    public void generatePdf(HttpServletResponse response) throws IOException {

        //create a pdf document with a a4 size
        Document document = new Document(PageSize.A4);

        //create a pdf write to actually edit the document
        PdfWriter writer = PdfWriter.getInstance(document, response.getOutputStream());

        //open the document for editing
        document.open();

        //create paragraph text to add to the document
        Paragraph paragraph = new Paragraph("Hello World. this is test document");

        //add paragraph
        document.add(paragraph);

        //create table with 2 column
        PdfPTable table = new PdfPTable(2);

        //set width of the table with respect to the page size
        table.setWidthPercentage(100f);

        //create a cell in the table
        PdfPCell headerCell = new PdfPCell();

        headerCell.setPhrase(new Phrase("Fist Name"));

        table.addCell(headerCell);

        headerCell.setPhrase(new Phrase("Last Name"));

        table.addCell(headerCell);

        document.add(table);


        document.close();
        writer.close();
    }


}