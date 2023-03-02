import express from 'express';
import fs from 'fs';
import path from 'path';
import {MongoClient} from 'mongodb';
import { fileURLToPath } from 'url';
import multer from 'multer';

const app = express();
app.use(express.json());

const upload = multer({ dest: 'posters/' });

// let moviesData = JSON.parse(fs.readFileSync('movies.json')); 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'../build')));
app.use(express.static(path.join(__dirname,'../posters')));


// const saveData = () => {
//     const jsonContent = JSON.stringify(moviesData);
//     fs.writeFile('./movies.json',jsonContent,'utf8',function(err){
//         if(err){
//             console.log('An error occurred while writing')
//         }
//         else{
//             console.log('File has been saved');
//         }
//     })
// }

// app.get(/^(?!\/api).+/,(req,res)=>{
//     res.sendFile(path.join());
// })

app.get('/movies', async (req, res) => {
    
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

app.post('/', async (req,res)=>{
    // moviesData = moviesData.filter(function(val,i,arr){return i!=req.body.index})
    // saveData();
    const data = req.body.data.split(',');
    const client = new MongoClient('mongodb://127.0.0.1:27017/');
    await client.connect();
    const db = client.db('moviesDB');
    const deleteOperation = await db.collection('moviecollection').deleteOne({'title':data[0],'releaseDate':data[1],'actors':data[2],'img':data[3],'rating':data[4]})
    res.redirect('/');
})

app.post('/submit', upload.single('img'), async (req,res)=>{
    // moviesData.push({"title": req.body.title,"releaseDate":req.body.releaseDate,"actors":req.body.actors.split(','),"img":req.body.img,"rating":req.body.rating});
    // saveData();
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
    // console.log("posters/"+req.file.filename);
    res.redirect('/');

})

app.listen(8000, ()=>{
    console.log('Server is listening on port 8000')
});