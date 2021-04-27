import studentService, {findStudentById} from "./student-service"
const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;
const StudentFormEditor = () => {
    const {id} = useParams()
    const [student, setStudent] = useState({})
    useEffect(() => {
        if(id !=="new") {
            findStudentById(id)
        }
    }, []);
    const createStudent = (student) => {
        studentService.createStudent(student)
            .then(() => history.back())
    }
    const findStudentById = (id) => {
        studentService.findStudentById(id)
            .then(student => setStudent(student))
    }
    const deleteStudent = (id) => {
        studentService.deleteStudent(id)
            .then(() => history.back())
    }
    const updateStudent =(id, newStudent) => {
        studentService.updateStudent(id, newStudent)
            .then(() => history.back())
    }
    return (
        <div>
            <h2>Student Editor</h2>
            <label>Id</label>
            <input className="form-control" value={student.id}/><br/>
            <label>First Name</label>
            <input className="form-control" onChange={(e) => setStudent(student =>
                ({...student, firstName: e.target.value}))} value={student.firstName}/><br/>
            <label>Last Name</label>
            <input className="form-control" onChange={(e) => setStudent(student =>
                ({...student, lastName: e.target.value}))} value={student.lastName}/><br/>
            <label>Username</label>
            <input className="form-control" onChange={(e) => setStudent(student =>
                ({...student, username: e.target.value}))} value={student.username}/><br/>
            <label>Password</label>
            <input className="form-control" onChange={(e) => setStudent(student =>
                ({...student, password: e.target.value}))} value={student.password}/><br/>
            <label>Email</label>
            <input className="form-control" onChange={(e) => setStudent(student =>
                ({...student, email: e.target.value}))} value={student.email}/><br/>
            <label>Date of Birth</label>
            <input className="form-control" onChange={(e) => setStudent(student =>
                ({...student, dateOfBirth: e.target.value}))} value={student.dateOfBirth}/><br/>
            <label>Major</label>
            <input className="form-control" onChange={(e) => setStudent(student =>
                ({...student, major: e.target.value}))} value={student.major}/><br/>
            <label>GPA</label>
            <input className="form-control" onChange={(e) => setStudent(student =>
                ({...student, gpa: e.target.value}))} value={student.gpa}/><br/>

            <Link to={`/reviews/student/${student.id}/reviews`}>
                Reviews
            </Link>
            <br></br>
            <br></br>
            <button className="btn btn-warning" onClick={() => {history.back();}}>Cancel</button>
            <button className="btn btn-danger" onClick={() => deleteStudent(student.id)}>Delete</button>
            <button className="btn btn-primary" onClick={() => updateStudent(student.id, student)}>Save</button>
            <button className="btn btn-success" onClick={() => createStudent(student)}>Create</button>
        </div>
    )
}

export default StudentFormEditor