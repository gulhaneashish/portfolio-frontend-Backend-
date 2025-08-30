package com.portfolio.portfolioback.controller;

import com.portfolio.portfolioback.Entity.Contact;
import com.portfolio.portfolioback.Repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173" )
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    public ContactController(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }
    @PostMapping
    public ResponseEntity<Contact> saveContact(@RequestBody Contact contact) {

        Contact savedContact = contactRepository.save(contact);
        return ResponseEntity.ok(savedContact);
    }

    @GetMapping
    public ResponseEntity<List<Contact>> getAllProjects() {
        return ResponseEntity.ok(contactRepository.findAll());
    }
}
