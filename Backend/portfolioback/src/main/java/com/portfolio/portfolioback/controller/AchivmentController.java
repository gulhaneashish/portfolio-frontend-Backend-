package com.portfolio.portfolioback.controller;
import com.portfolio.portfolioback.Entity.Achivment;
import com.portfolio.portfolioback.Repository.AchivmentRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/achivment")
@CrossOrigin(origins = "http://localhost:5173")
public class AchivmentController {
    private final AchivmentRepository achievementRepository;

    public AchivmentController(AchivmentRepository achievementRepository) {
        this.achievementRepository = achievementRepository;
    }

    @GetMapping
    public ResponseEntity<List<Achivment>> getAllAchievements() {
        return ResponseEntity.ok(achievementRepository.findAll());
    }
}
