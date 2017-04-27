//WebAPI Controller File
import * as express from 'express';
import Movie from '../models/movie';

let router = express.Router();

router.get('/', (req, res)=>{
  Movie.find().then((movies)=>{
    console.log('You have your hands in the cookie jar...');
    res.json(movies);
  }).catch((err)=>{
    res.json(err);
  });
});

router.get('/:id', (req, res)=>{
  Movie.findOne({_id: req.params.id}).then((movie)=>{
    res.json(movie);
  }).catch((err)=>{
    res.json(err);
  });
});

router.post('/', (req, res)=>{
  let mov = new Movie();
  mov.title = req.body.title;
  mov.director = req.body.director;
  mov.save().then((newMov)=>{
    res.json(newMov);
  }).catch((err)=>{
    res.json(err);
  });
});

router.put('/', (req, res)=>{
  Movie.findOne({_id: req.body._id}).then((movie)=>{
    console.log('The Movie has hit the API Controller...')
    movie.title = req.body.title;
    movie.director = req.body.director;
    movie.save().then((movie) =>{
      console.log('The movie has saved....')
      res.json(movie);
    }).catch((err)=>{
      console.log('Something went horribly wrong...')
      res.json(err);
    });
  });
});

router.delete('/:id', (req, res)=> {
  Movie.remove({_id: req.params.id}).then((movie)=>{
    res.json(movie);
  }).catch((err) =>{
    res.json(err);
  });
});

export default router;
