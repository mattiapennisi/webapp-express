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