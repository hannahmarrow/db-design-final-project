package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String comment;
    private String created;
    private String updated;
    private Integer rating;
    @ManyToOne
    @JoinColumn(name="book_id_id")
    @JsonIgnore
    private Book book;
    @ManyToOne
    @JoinColumn(name="reviewer_id_id")
    @JsonIgnore
    private Student reviewer;

    @Transient
    public Integer getBookId() {
        if (this.book != null) {
            return this.book.getId();
        }
        return null;
    }

    @Transient
    public Integer getReviewerId() {
        if (this.reviewer != null) {
            return this.reviewer.getId();
        }
        return null;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getCreated() {
        return created;
    }

    public void setCreated(String created) {
        this.created = created;
    }

    public String getUpdated() {
        return updated;
    }

    public void setUpdated(String updated) {
        this.updated = updated;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public Student getReviewer() { return reviewer; }

    public void setReviewer(Student reviewer) {
        this.reviewer = reviewer;
    }

    public Review(String comment, String created, String updated, Integer rating, Book book, Student reviewer) {
        this.comment = comment;
        this.created = created;
        this.updated = updated;
        this.rating = rating;
        this.book = book;
        this.reviewer = reviewer;
    }

    public Review() {}
}
