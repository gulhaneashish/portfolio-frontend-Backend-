package com.portfolio.portfolioback.Repository;

import com.portfolio.portfolioback.Entity.Achivment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AchivmentRepository extends JpaRepository<Achivment, Integer> {
}
