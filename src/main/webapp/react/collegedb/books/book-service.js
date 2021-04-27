
const BOOKS_URL = "http://localhost:8080/api/books"

export const findAllBooks = () => {
    return fetch(BOOKS_URL)
        .then((response) => {return response.json()})
}

export const findBookById = (id) => {
    return fetch(`${BOOKS_URL}/${id}`)
        .then((response) => {return response.json()})
}

export const deleteBook = (id) => {
    return fetch(`${BOOKS_URL}/${id}`, {
        method: "DELETE"
    })
}

export const createBook = (book) => {
    return fetch(BOOKS_URL, {
        method: 'POST',
        body: JSON.stringify(book),
        headers: {'content-type': 'application/json'}
    })
        .then((response) => {return response.json()})
}

export const updateBook = (id, book) => {
    return fetch(`${BOOKS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(book),
        headers: {'content-type': 'application/json'}
    })
        .then((response) => {return response.json()})
}

export default {
    findAllBooks,
    findBookById,
    deleteBook,
    createBook,
    updateBook
}
