package com.portfolio.portfolioback.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
@Table(name = "skills")
public class Skill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 100, nullable = false, unique = true)
    private String name;// Skill name
    @Column(length = 100, nullable = false)
    private int level;        // Skill percentage (0-100)
    @Column(length = 100, nullable = false)
    private String type;
}
