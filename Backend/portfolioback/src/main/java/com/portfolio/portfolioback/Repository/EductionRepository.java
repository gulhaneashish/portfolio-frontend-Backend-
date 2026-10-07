package com.portfolio.portfolioback.Repository;

import com.portfolio.portfolioback.Entity.Eduction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EductionRepository extends JpaRepository<Eduction, String> {
}
