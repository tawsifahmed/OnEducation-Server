const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 9000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send(' EduSite Running');
});

app.get('/site-courses', (req, res) => {
    res.send(courses);
})

app.listen(port, () => {
    console.log('Education site server running on port', port);
})