// Server and routes variables
const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.DB_PORT || 3000

const moviesRouter = require('./routers/moviesRouters.js')
const error500 = require('./errors/error500.js')
const error404 = require('./errors/error404.js')

app.use(cors({
    origin: process.env.FRONT_URL || 'http://localhost:5173'
}))

app.use('/public', express.static('public'))

// It listens for the port in order to set the server
app.listen(port, () => {
    console.log('Server is running')
})

// It adds body parser to read body request
app.use(express.json())

// It sets the routes from module imported
app.use('/movies', moviesRouter)

// Main server route
app.get('/', (req, res) => {
    res.send('Server home')
})

// Errors handlers
app.use(error500)
app.use(error404)