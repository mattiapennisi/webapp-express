const connection = require('../data/db.js')

function getMovies(req, res) {
    const sql = `
        SELECT * 
        FROM movies
        `

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })
        res.json(results)
    })
}

function showMovie(req, res) {
    const id = req.params.id
    const movieSql = `
        SELECT *
        FROM movies
        WHERE id = ?
        `
    const reviewsSql = `
        SELECT *
        FROM reviews
        WHERE movie_id = ?
        `

    connection.query(movieSql, [id], (err, movieResults) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })
        if (movieResults.length === 0) return res.status(404).json({ error: 'Movie not found' })

        const movie = movieResults[0]

        connection.query(reviewsSql, [id], (err, reviewsResults) => {
            if (err) return res.status(500).json({ error: 'Database query failed' })

            movie.reviews = reviewsResults
            res.json(movie)
        })
    })
}

function storeMovie(req, res) {
}

function updateMovie(req, res) {

}

function modifyMovie(req, res) {

}

function destroyMovie(req, res) {

}

function storeReview(req, res) {
    const id = Number(req.params.id)
    const { name, vote, text } = req.body

    const sql = `
    INSERT INTO reviews (movie_id, name, vote, text)
    VALUES (?, ?, ?, ?)
    `
    const values = [id, name, vote, text]

    connection.query(sql, values, (err, results) => {
        if (err) return res.status(500).json({ error: err.message })

        console.log(results)
        res.status(201).json({ message: 'Review added successfully', reviewId: results.insertId })
    })
}

module.exports = {
    getMovies,
    showMovie,
    storeMovie,
    updateMovie,
    modifyMovie,
    destroyMovie,
    storeReview
}