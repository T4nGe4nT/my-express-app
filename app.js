const express = require('express');
const morgan = require('morgan');


const app = express();
app.use(morgan('dev'));

app.get('/about', (req, res) => {
    res.status(200);   
     res.send('About the CTAC API');
});

app.get('/', (req, res) => {
    res.status(200);   
    res.send('Welcome to the CTAC API!');
});    

app.get('*', (req, res) => {
    res.status(404);   
    res.send('Page not found');
});
    




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
