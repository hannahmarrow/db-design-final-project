import reviewService, {findAllReviews, findReviewsForBook, findReviewsForStudent} from "./review-service"

const {Link, useHistory, useParams} = window.ReactRouterDOM;
const { useState, useEffect } = React;
const ReviewList = () => {
    const history = useHistory()
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        findAllReviews();
    },[])
    const findAllReviews = () => {
        reviewService.findAllReviews().then(reviews => setReviews(reviews))
    }
    return(
        <div>
            <h2>Book Review List</h2>
            <button onClick={() => history.push("/reviews/new")}>
                Add Review
            </button>
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
        </div>
    )
}


export default ReviewList;