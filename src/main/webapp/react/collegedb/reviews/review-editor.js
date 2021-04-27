import reviewService from "./review-service"
const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;

const ReviewFormEditor = () => {
    const {id} = useParams()
    const [review, setReview] = useState({})
    useEffect(() => {
        if(id !=="new") {
            findReviewById(id)
        }
    }, []);
    const createReview = (review) => {
        reviewService.createReview(review)
            .then(() => history.back())
    }
    const findReviewById = (id) => {
        reviewService.findReviewById(id)
            .then(review => setReview(review))
    }
    const deleteReview = (id) => {
        reviewService.deleteReview(id)
            .then(() => history.back())
    }
    const updateReview =(id, newReview) => {
        reviewService.updateReview(id, newReview)
            .then(() => history.back())
    }
    return (
        <div>
            <h2>Review Editor</h2>
            <label>Id</label>
            <input className="form-control" value={review.id}/><br/>
            <label>Rating</label>
            <input className="form-control" onChange={(e) => setReview(review =>
                ({...review, rating: e.target.value}))} value={review.rating}/><br/>
            <label>Comment</label>
            <input className="form-control" onChange={(e) => setReview(review =>
                ({...review, comment: e.target.value}))} value={review.comment}/><br/>
            <label>Created</label>
            <input className="form-control" onChange={(e) => setReview(review =>
                ({...review, created: e.target.value}))} value={review.created}/><br/>
            <label>Updated</label>
            <input className="form-control" onChange={(e) => setReview(review =>
                ({...review, updated: e.target.value}))} value={review.updated}/><br/>
            <label>Reviewer</label>
            <input className="form-control" onChange={(e) => setReview(review =>
                ({...review, reviewerId: e.target.value}))} value={review.reviewerId}/><br/>
            <label>Book</label>
            <input className="form-control" onChange={(e) => setReview(review =>
                ({...review, bookId: e.target.value}))} value={review.bookId}/><br/>

            <Link to={`/students/${review.reviewerId}`}>
                Reviewer ID: {review.reviewerId}
            </Link>
            <ul className="list-group">
                {
                    review.reviewer && review.reviewer.map(reviewer =>
                    <li className='list-group-item' key={reviewer.id}>
                        <Link to={`/students/${reviewer.id}`}>
                            {reviewer.id},
                            {reviewer.firstName},
                            {reviewer.lastName}
                        </Link>
                    </li>)
                }
            </ul>

            <Link to={`/books/${review.bookId}`}>
                Book ID: {review.bookId}
            </Link>
            <ul className="list-group">
                {
                    review.book && review.book.map(book =>
                        <li className='list-group-item' key={book.id}>
                            <Link to={`/books/${book.id}`}>
                                {book.id},
                                {book.title},
                                {book.publisher},
                                {book.edition}
                            </Link>
                        </li>)
                }
            </ul>

            <button className="btn btn-warning" onClick={() => {history.back();}}>Cancel</button>
            <button className="btn btn-danger" onClick={() => deleteReview(review.id)}>Delete</button>
            <button className="btn btn-primary" onClick={() => updateReview(review.id, review)}>Save</button>
            <button className="btn btn-success" onClick={() => createReview(review)}>Create</button>
        </div>
    )
}

export default ReviewFormEditor