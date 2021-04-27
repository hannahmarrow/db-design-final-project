import reviewService, {findReviewsForStudent} from "./review-service"

const { useState, useEffect } = React;
const { useParams, Link } = window.ReactRouterDOM;

const ReviewListForStudent = () => {
    const {studentId} = useParams();
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        findReviewsForStudent(studentId)
    }, [])
    const findReviewsForStudent = (studentId) => {
        reviewService.findReviewsForStudent(studentId)
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

export default ReviewListForStudent;