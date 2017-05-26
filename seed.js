const Promise = require('bluebird');
const db = require('./db');
const Campus = require('./db/models/').Campus;
const Student = require('./db/models/').Student;

const data = {
    campus: [
        {name: "Space Hufflepuff", imageURL: "http://vignette2.wikia.nocookie.net/harrypotter/images/5/50/0.51_Hufflepuff_Crest_Transparent.png/revision/latest?cb=20161020182518"},
        {name: "Space Slytherin", imageURL: "http://vignette4.wikia.nocookie.net/harrypotter/images/d/d3/0.61_Slytherin_Crest_Transparent.png/revision/latest?cb=20161020182557"},
        {name: "Space Gryffindor", imageURL: "http://vignette1.wikia.nocookie.net/harrypotter/images/8/8e/0.31_Gryffindor_Crest_Transparent.png/revision/latest?cb=20161124074004"},
        {name: "Space Ravenclaw", imageURL: "http://vignette2.wikia.nocookie.net/harrypotter/images/2/29/0.41_Ravenclaw_Crest_Transparent.png/revision/latest?cb=20161020182442"},
    ],
    student: [
        {name: "Cedric Diggory", email: 'cedric@gmail.com', campusId: 1},
        {name: "Draco Malfoy", email: 'draco@gmail.com', campusId: 2},
        {name: "Harry Potter", email: 'harry@gmail.com', campusId: 3},
        {name: "Cho Chang", email: 'cho@gmail.com', campusId: 4},
        {name: "Newt Scadmander", email: 'newt@gmail.com', campusId: 1},
        {name: "Vincent Crabbe", email: 'vincent@gmail.com', campusId: 2},
        {name: "Hermione Granger", email: 'hermione@gmail.com', campusId: 3},
        {name: "Luna Lovegood", email: 'Luna@gmail.com', campusId: 4},
    ]
};

db.sync({force: true})
.then(function () {
    console.log("Dropped old data, now inserting data");
    const creatingCampuses = data.campus.map(function (campus) {
        return Campus.create(campus);
    });
    const creatingStudents = data.student.map(function (student) {
        return Student.create(student);
    });
    return Promise.all([creatingCampuses, creatingStudents]);
    })
    .then(function () {
    console.log("Finished inserting data (press ctrl-c to exit)");
    })
    .catch(function (err) {
    console.error('There was totally a problem', err, err.stack);
    });