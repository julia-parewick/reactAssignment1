import express from 'express';
import fs from 'fs';
import path from 'path';
import {MongoClient} from 'mongodb';
import { fileURLToPath } from 'url';
import multer from 'multer';

const app = express();
app.use(express.json());

const upload = multer({ dest: 'posters/' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'../build')));
app.use(express.static(path.join(__dirname,'../posters')));


app.get(/^(?!\/api).+/,(req,res)=>{
    res.sendFile(path.join(__dirname,'../build/index.html'));
})

app.get('/api/movies', async (req, res) => {
    
    const client = new MongoClient('mongodb://127.0.0.1:27017/');
    await client.connect();
    console.log('connected');
    const db = client.db('moviesDB');

    const movieData = await db.collection('moviecollection').find({}).toArray();
    res.json( movieData );
});

app.get('/',(req,res)=>{
    res.json(moviesData);
})

app.post('/api/delete', async (req,res)=>{
    const data = req.body.data.split(',');
    const client = new MongoClient('mongodb://127.0.0.1:27017/');
    await client.connect();
    const db = client.db('moviesDB');
    const deleteOperation = await db.collection('moviecollection').deleteOne({'title':data[0],'releaseDate':data[1],'actors':data[2],'img':data[3],'rating':data[4]})
    res.redirect('/');
})

app.post('/api/submit', upload.single('img'), async (req,res)=>{
    console.log(req.files);
    const client = new MongoClient('mongodb://127.0.0.1:27017/');
    await client.connect();
    const db = client.db('moviesDB');
    let filename = "";
    if(!req.files){
        filename="placeholder.jpg";
    }else{
        filename=req.files[0].filename;
    }
    const insertOperation = await db.collection('moviecollection').insertOne({"title": req.body.title,"releaseDate":req.body.releaseDate,"actors":req.body.actors.split(','),"img":filename,"rating":req.body.rating});
    res.redirect('/');

})

app.listen(8000, ()=>{
    console.log('Server is listening on port 8000')
});