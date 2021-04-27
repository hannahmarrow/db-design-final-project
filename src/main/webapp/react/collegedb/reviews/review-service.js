
const REVIEWS_URL = "http://localhost:8080/api/reviews"

export const findAllReviews = () => {
    return fetch(REVIEWS_URL)
        .then((response) => {return response.json()})
}

export const findReviewById = (id) => {
    return fetch(`${REVIEWS_URL}/${id}`)
        .then((response) => {return response.json()})
}

export const findReviewsForBook = (bookId) => {
    return fetch(`${REVIEWS_URL}/book/${bookId}/reviews`)
        .then(response => response.json())
}

export const findReviewsForStudent = (studentId) => {
    return fetch(`${REVIEWS_URL}/student/${studentId}/reviews`)
        .then(response => response.json())
}

export const deleteReview = (id) => {
    return fetch(`${REVIEWS_URL}/${id}`, {
        method: "DELETE"
    })
}

export const createReview = (review) => {
    return fetch(REVIEWS_URL, {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {'content-type': 'application/json'}
    })
        .then((response) => {return response.json()})
}

export const updateReview = (id, review) => {
    return fetch(`${REVIEWS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(review),
        headers: {'content-type': 'application/json'}
    })
        .then((response) => {return response.json()})
}

export default {
    findAllReviews,
    findReviewById,
    findReviewsForBook,
    findReviewsForStudent,
    deleteReview,
    createReview,
    updateReview
}
