// Server and routes variables
const express = require('express')
const app = express()
const port = 3000
const moviesRouter = require('./routers/moviesRouters.js')
const error500 = require('./errors/error500.js')
const error404 = require('./errors/error404.js')

// Listen for the port in order to set the server
app.listen(port, () => {
    console.log('Server is running');
})

// Add body parser to read body request
app.use(express.json())

// Main server route
app.get('/', (req, res) => {
    res.send('Server home')
})

// Set the routes from module imported
app.use('/movies', moviesRouter)

// Errors handlers
app.use(error500)
app.use(error404)