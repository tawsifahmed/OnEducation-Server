const express = require('express')
const app = express();
const port = process.env.PORT || 9000;

app.get('/', (req, res) => {
    res.send(' EduSite Running');
});

app.listen(port, () => {
    console.log('Education site server running on port', port);
})