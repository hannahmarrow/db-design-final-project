package com.example.springtemplate.daos;

import com.example.springtemplate.models.Book;
import com.example.springtemplate.models.Review;
import com.example.springtemplate.models.Student;
import com.example.springtemplate.repositories.BookRepository;
import com.example.springtemplate.repositories.ReviewRepository;
import com.example.springtemplate.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ReviewDao {
    @Autowired
    ReviewRepository reviewRepository;

    @PostMapping("/api/reviews")
    public Review createReview(@RequestBody Review review) {
        return reviewRepository.save(review);
    }

    @GetMapping("/api/reviews")
    public List<Review> findAllReviews() {
        return reviewRepository.findAllReviews();
    }

    @GetMapping("/api/reviews/{reviewId}")
    public Review findReviewById(
            @PathVariable("reviewId") Integer id) {
        return reviewRepository.findReviewById(id);
    }

    @GetMapping("/api/reviews/book/{bid}/reviews")
    public List<Review> findReviewsForBook(
            @PathVariable("bid") Integer bid) {
        return reviewRepository.findReviewsForBook(bid);
    }

    @GetMapping("/api/reviews/student/{sid}/reviews")
    public List<Review> findReviewsForStudent(
            @PathVariable("sid") Integer sid) {
        return reviewRepository.findReviewsForStudent(sid);
    }

    @PutMapping("/api/reviews/{reviewId}")
    public Review updateReview(
            @PathVariable("reviewId") Integer id,
            @RequestBody() Review newReview) {
        Review review = this.findReviewById(id);
        review.setRating(newReview.getRating());
        review.setComment(newReview.getComment());
        review.setUpdated(newReview.getUpdated());
        return reviewRepository.save(review);
    }

    @DeleteMapping("/api/reviews/{reviewId}")
    public void deleteReview(
            @PathVariable("reviewId") Integer id) {
        reviewRepository.deleteById(id);
    }
}
