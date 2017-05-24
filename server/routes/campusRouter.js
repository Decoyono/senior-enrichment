const campusRouter = require('express').Router()
const db = require('../../db/models')
const Campus = db.Campus;


//all campuses
campusRouter.get('/', function(req, res, next) {
  Campus.findAll()
  .then((foundCampuses) => {
    res.json(foundCampuses)
  })
  .catch(next);
})

//new campus
campusRouter.post('/', function(req, res, next) {
    Campus.create(req.body)
    .then(newCampus => {
        res.status(201).send(newCampus)
    })
    .catch(next)
})

//find one campus
//error handle later~~~
campusRouter.get('/:campusId', function(req, res, next) {
    if(typeof (+req.params.campusId) === 'number') {
        res.status(404).send('Campus Id Invalid')
    } else {
    Campus.findById(req.params.campusId)
    .then(foundCampus => {
        if(!foundCampus) {
            res.status(404).send('Campus does not exist')
        } else {
            res.status(200).send(oneCampus)
        }
    })
    .catch(next)
    }
})


module.exports = campusRouter;