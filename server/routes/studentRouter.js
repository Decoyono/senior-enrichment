const studentRouter = require('express').Router()
const db = require('../../db/models')
const Student = db.Student;


studentRouter.get('/', function (req, res, next) {
    Student.findAll()
        .then((foundStudents) => {
            res.json(foundStudents)
        })
        .catch(next);
})

//new campus
studentRouter.post('/', function (req, res, next) {
    Student.create(req.body)
        .then(newStudent => {
            res.status(201).send(newStudent)
        })
        .catch(next)
})

//find one campus
//error handle later~~~
studentRouter.get('/:studentId', function (req, res, next) {
    if (typeof (+req.params.studentId) !== 'number') {
        res.status(404).send('Student Id Invalid')
    } else {
        Student.findById(req.params.studentId)
            .then(foundStudent => {
                if (!foundStudent) {
                    res.status(404).send('Student does not exist')
                } else {
                    res.status(200).send(oneStudent)
                }
            })
            .catch(next)
    }
})

//update campus
studentRouter.put('/:studentId', function (req, res, next) {
    Student.update(req.body, {
            where: {
                id: req.params.studentId
            }
        })
        .then(updatedStudent => res.status(201).send)
        .catch(next)
})

//delete campus
studentRouter.delete('/:studentId', function (req, res, next) {
    Student.destroy({
            where: {
                id: req.params.studentId
            }
        })
        .then(() => {
            return Student.findAll()
        })
        .then(students => res.send(students))
        .catch(next)
})


module.exports= studentRouter;