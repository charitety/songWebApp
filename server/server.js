const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req,res) => {
    res.send('Hello, World from Server!');
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});