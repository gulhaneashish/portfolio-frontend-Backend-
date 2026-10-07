package com.portfolio.portfolioback.Entity;





import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Getter
@Setter
@Table(name = "education")
@Entity
public class Eduction {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 100, nullable = false, unique = true)
    private String degree;
    @Column(length = 100, nullable = false, unique = true)
    private String college;
    @Column(length = 100, nullable = false, unique = true)
    private String year;
    @Column(length = 100, nullable = false, unique = true)
    private String score;
}
