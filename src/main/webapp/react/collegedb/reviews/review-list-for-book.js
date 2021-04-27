import reviewService, {findReviewsForBook} from "./review-service"

const { useState, useEffect } = React;
const { useParams, Link } = window.ReactRouterDOM;

const ReviewListForBook = () => {
    const {bookId} = useParams();
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        findReviewsForBook(bookId)
    }, [])
    const findReviewsForBook = (bookId) => {
        reviewService.findReviewsForBook(bookId)
            .then(reviews => setReviews(reviews))
    }
    return(
        <div>
            <h2>
               Reviews
            </h2>
            <ul>
                {
                    reviews.map(review =>
                        <li key={review.id}>
                            <Link to={`/reviews/${review.id}`}>
                                {review.rating},
                                {review.comment},
                                {review.created},
                                {review.updated}
                            </Link>
                        </li>)
                }
            </ul>
            <button className="btn btn-warning" onClick={() => {history.back();}}>Cancel</button>
        </div>
    )
}

export default ReviewListForBook;