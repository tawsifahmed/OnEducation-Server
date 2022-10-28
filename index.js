const express = require('express')
var cors = require('cors')
const app = express();
const port = process.env.PORT || 9000;

app.use(cors())


const courses = require('./data/courses.json');
const course = require('./data/course-detail.json');

app.get('/', (req, res) => {
    res.send(' EduSite Running');
});

app.get('/site-courses', (req, res) => {
    res.send(courses);
});

app.get('/:id', (req, res) => {
    const id = req.params.id
    const selectedCourse = course.find(c => c.course_id === id);
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log('Education site server running on port', port);
})