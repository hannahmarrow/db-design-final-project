package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Book;
import com.example.springtemplate.models.Review;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReviewRepository extends CrudRepository<Review, Integer> {
    @Query(value = "SELECT * FROM reviews", nativeQuery = true)
    public List<Review> findAllReviews();
    @Query(value = "SELECT * FROM reviews WHERE id=:reviewId", nativeQuery = true)
    public Review findReviewById(@Param("reviewId") Integer id);
    @Query(value = "SELECT * FROM reviews WHERE reviewer_id_id=:sid", nativeQuery = true)
    public List<Review> findReviewsForStudent(@Param("sid") Integer sid);
    @Query(value = "SELECT * FROM reviews WHERE book_id_id=:bid", nativeQuery = true)
    public List<Review> findReviewsForBook(@Param("bid") Integer bid);
}
