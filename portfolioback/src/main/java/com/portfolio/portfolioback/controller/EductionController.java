package com.portfolio.portfolioback.controller;

import com.portfolio.portfolioback.Entity.Eduction;
import com.portfolio.portfolioback.Repository.EductionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/education")
@CrossOrigin(origins ="http://localhost:5173")
public class EductionController {
    @Autowired
    private final EductionRepository educationRepository;

    public EductionController(EductionRepository educationRepository) {
        this.educationRepository = educationRepository;
    }

    @GetMapping
    public List<Eduction> getAllEducation() {
        return educationRepository.findAll();
    }
}
