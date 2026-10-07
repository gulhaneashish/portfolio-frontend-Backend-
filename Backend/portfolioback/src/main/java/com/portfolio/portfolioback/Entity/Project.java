package com.portfolio.portfolioback.Entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Arrays;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "projects")
public class Project {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "TITLE", nullable = false, length = 250)
    private String title;

    @Column(name = "DESCRIPTION", nullable = false, length = 500)
    private String description;

    @Column(name = "TAGS", length = 500)
    private String tags; // comma-separated

    @Column(name = "IMAGE", length = 500)
    private String image;

    @Column(name = "DEMO", length = 500)
    private String demo;

    @Column(name = "CODE", length = 500)
    private String code;


    @Transient
    public List<String> getTagList() {
        if (tags == null || tags.isEmpty()) return List.of();
        return Arrays.asList(tags.split(","));
    }

}
