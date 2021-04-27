// TODO: declare URL where server listens for HTTP requests
const STUDENTS_URL = "http://localhost:8080/api/students"

export const findAllStudents = () => {
    return fetch(STUDENTS_URL)
        .then((response) => {return response.json()})
}

export const findStudentById = (id) => {
    return fetch(`${STUDENTS_URL}/${id}`)
        .then((response) => {return response.json()})
}

export const deleteStudent = (id) => {
    return fetch(`${STUDENTS_URL}/${id}`, {
        method: "DELETE"
    })
}

export const createStudent = (student) => {
    return fetch(STUDENTS_URL, {
        method: 'POST',
        body: JSON.stringify(student),
        headers: {'content-type': 'application/json'}
    })
        .then((response) => {return response.json()})
}

export const updateStudent = (id, student) => {
    return fetch(`${STUDENTS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(student),
        headers: {'content-type': 'application/json'}
    })
        .then((response) => {return response.json()})
}

export default {
    findAllStudents,
    findStudentById,
    deleteStudent,
    createStudent,
    updateStudent
}
