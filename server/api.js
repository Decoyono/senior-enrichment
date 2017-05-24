'use strict'
const api = require('express').Router()
const db = require('../db')
const campusRouter = require('./routes/campusRouter')
const studentRouter = require('./routes/studentRouter')
// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

// api.get('/', function (req, res, next) {
// 	res.send("big boy test")
// }

api.use('/campuses', campusRouter)
api.use('/students', studentRouter)

api.use(function(err, req, res, next) {
	console.error(err.message)
	res.status(500).send(err.message)
})

module.exports = api