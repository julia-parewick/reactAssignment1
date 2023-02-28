import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

let moviesData = 
        [
            {"title":"Harry Potter and the Philosopher Stone", 
            "releaseDate": "01-10-1989", 
            "actors": ["Daniel Radcliffe","Rupert Grint","Emma Watson"], 
            "img": "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg",
            "rating":5},

            {"title":"Harry Potter and the Chamber of Secrets", 
            "releaseDate": "03-09-1992", 
            "actors": ["Daniel Radcliffe","Rupert Grint","Emma Watson"], 
            "img": "https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_.jpg", 
            "rating":5}
        ];

app.get('/', (req,res)=>{
    res.json(moviesData);

})

app.get('/movies',(req,res)=>{
    // res.send('Hello!');
    res.json(moviesData);
})


app.post('/updateMovies', (req,res)=>{
    console.log(req.body.title);
    moviesData.push({"title": req.body.title,"releaseDate":req.body.releaseDate,"actors":req.body.actors.split(','),"img":req.body.img,"rating":req.body.rating});
    // console.log(req.body);
    res.send(req.body);
})

app.listen(8000, ()=>{
    console.log('Server is listening on port 8000')
});