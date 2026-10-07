package com.portfolio.portfolioback.controller;

import com.portfolio.portfolioback.Entity.Skill;
import com.portfolio.portfolioback.Repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/skill")
@CrossOrigin(origins = "http://localhost:5173")
public class SkillController {

    @Autowired
    private SkillRepository skillRepository;


    @GetMapping
    public List<Skill> getAllSkills() {
        return skillRepository.findAll();
    }


    @GetMapping("/{type}")
    public List<Skill> getSkillsByType(@PathVariable String type) {
        return skillRepository.findByType(type);
    }
}
