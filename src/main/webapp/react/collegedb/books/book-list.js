import bookService, {findAllBooks} from "./book-service"

const {Link, useHistory} = window.ReactRouterDOM;
const { useState, useEffect } = React;
const BookList = () => {
    const history = useHistory()
    const [books, setBooks] = useState([])
    useEffect(() => {
        findAllBooks()
    },[])
    const findAllBooks = () => {
        bookService.findAllBooks().then(books => setBooks(books))
    }
    return(
        <div>
            <h2>Book List</h2>
            <button onClick={() => history.push("/books/new")}>
                Add Book
            </button>
            <ul>
                {
                    books.map(book =>
                        <li key={book.id}>
                            <Link to={`/books/${book.id}`}>
                                {book.title},
                                {book.publisher},
                                {book.publishDate},
                                {book.edition}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default BookList;