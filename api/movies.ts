import * as express from 'express';

let router = express.Router();

let movies = [
  {id: 1, title: 'Star Wars: A New Hope', director: 'Lucas'},
  {id: 2, title: 'The Dark Knight', director: 'Nolan'},
  {id: 3, title: 'Jurassic Park', director: 'Spielberg'}
]

router.get('/', (req, res)=>{
  res.json(movies);
  console.log('This should have sent the collection of movies as JSON');
});

router.get('/:id', (req, res)=>{
  let movieToFind = movies.filter((m)=>m.id == req.params.id)[0];
  console.log(movieToFind);
  res.json(movieToFind);
})



export default router;
