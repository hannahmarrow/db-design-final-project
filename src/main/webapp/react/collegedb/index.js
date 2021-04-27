
import ReviewList from "./reviews/review-list";
import ReviewEditor from "./reviews/review-editor";
import StudentList from "./students/student-list";
import StudentEditor from "./students/student-editor";
import BookEditor from "./books/book-editor";
import BookList from "./books/book-list";
import ReviewListForBook from "./reviews/review-list-for-book"
import ReviewListForStudent from "./reviews/review-list-for-student"

const {HashRouter, Link, Route} = window.ReactRouterDOM;

const App = () => {
    return (
        <div className="container-fluid">
            <h1>College Textbook Review Database</h1>
            <HashRouter>
                <Route path={["/students", "/"]} exact={true}>
                    <StudentList/>
                </Route>
                <Route path="/students/:id" exact={true}>
                    <StudentEditor/>
                </Route>
                <Route path={["/books", "/"]} exact={true}>
                    <BookList/>
                </Route>
                <Route path="/books/:id" exact={true}>
                    <BookEditor/>
                </Route>
                <Route path={["/reviews", "/"]} exact={true}>
                    <ReviewList/>
                </Route>
                <Route path="/reviews/:id" exact={true}>
                    <ReviewEditor/>
                </Route>
                <Route path={["/reviews/book/:bookId/reviews"]} exact={true}>
                    <ReviewListForBook/>
                </Route>
                <Route path={["/reviews/student/:studentId/reviews"]} exact={true}>
                    <ReviewListForStudent/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;