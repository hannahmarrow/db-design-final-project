import studentService, {findAllStudents} from "./student-service"

const {Link, useHistory} = window.ReactRouterDOM;
const { useState, useEffect } = React;
const StudentList = () => {
    const history = useHistory()
    const [students, setStudents] = useState([])
    useEffect(() => {
        findAllStudents()
    },[])
    const findAllStudents = () => {
        studentService.findAllStudents().then(students => setStudents(students))
    }
    return(
        <div>
            <h2>Student List</h2>
            <button onClick={() => history.push("/students/new")}>
                Add Student
            </button>
            <ul>
                {
                    students.map(student =>
                        <li key={student.id}>
                            <Link to={`/students/${student.id}`}>
                                {student.firstName},
                                {student.lastName}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default StudentList;