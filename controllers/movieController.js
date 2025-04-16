const connection = require('../data/db.js')

function index(req, res) {
    const sql = `
        SELECT * 
        FROM movies
        `

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })
        res.json(results)
    })
}

function show(req, res) {
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

function store(req, res) {

}

function update(req, res) {

}

function modify(req, res) {

}

function destroy(req, res) {

}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}