package com.portfolio.portfolioback.Repository;

import com.portfolio.portfolioback.Entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SkillRepository extends JpaRepository<Skill,Integer> {
    List<Skill> findByType(String type);
}
