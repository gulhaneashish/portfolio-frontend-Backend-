package com.portfolio.portfolioback.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "contact")
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NAME", nullable = false, length = 100 )
    private String name;
    @Column(name = "EMAIL", nullable = false, length = 100 , unique = true)
    private String email;
    @Column(name = "PHONE", nullable = false, length = 10 , unique = true)
    private String phone;
    private String message;

}
