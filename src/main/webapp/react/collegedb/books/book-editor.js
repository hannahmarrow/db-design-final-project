import bookService from "./book-service"
import reviewService from "reviews/review-service"
const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;
const BookFormEditor = () => {
    const {id} = useParams()
    const [book, setBook] = useState({})
    useEffect(() => {
        if(id !=="new") {
            findBookById(id)
        }
    }, []);
    const createBook = (book) => {
        bookService.createBook(book)
            .then(() => history.back())
    }
    const findBookById = (id) => {
        bookService.findBookById(id)
            .then(book => setBook(book))
    }
    const deleteBook = (id) => {
        bookService.deleteBook(id)
            .then(() => history.back())
    }
    const updateBook =(id, newBook) => {
        bookService.updateBook(id, newBook)
            .then(() => history.back())
    }
    return (
        <div>
            <h2>Book Editor</h2>
            <label>Id</label>
            <input className="form-control" value={book.id}/><br/>
            <label>Title</label>
            <input className="form-control" onChange={(e) => setBook(book =>
                ({...book, title: e.target.value}))} value={book.title}/><br/>
            <label>Publisher</label>
            <input className="form-control" onChange={(e) => setBook(book =>
                ({...book, publisher: e.target.value}))} value={book.publisher}/><br/>
            <label>Publish Date</label>
            <input className="form-control" onChange={(e) => setBook(book =>
                ({...book, publishDate: e.target.value}))} value={book.publishDate}/><br/>
            <label>Edition</label>
            <input className="form-control" onChange={(e) => setBook(book =>
                ({...book, edition: e.target.value}))} value={book.edition}/><br/>

                <Link to={`/reviews/book/${book.id}/reviews`}>
                    Reviews
                </Link>
            <br></br>
            <br></br>
            <button className="btn btn-warning" onClick={() => {history.back();}}>Cancel</button>
            <button className="btn btn-danger" onClick={() => deleteBook(book.id)}>Delete</button>
            <button className="btn btn-primary" onClick={() => updateBook(book.id, book)}>Save</button>
            <button className="btn btn-success" onClick={() => createBook(book)}>Create</button>
        </div>
    )
}

export default BookFormEditor