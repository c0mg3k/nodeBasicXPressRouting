namespace nodewebapi.Controllers {

    export class HomeController {
        public movies;

        constructor(private $http: ng.IHttpService){
          this.$http.get('/api/movies').then((response)=>{
            this.movies = response.data;
          });
        }
    }


    export class AboutController {
        //place to store the movie when the server responds.
        public movie;
        //method to delete a movie.
        public deleteMovie(){
          this.$http.delete('/api/movies/' + this.$stateParams['id']).then((response)=>{
            this.$state.go('home');
          });
        }
        //make a request to the route which provids a sigle movie by its id.
        constructor(private $http: ng.IHttpService,
                    private $stateParams: ng.ui.IStateParamsService,
                    private $state: ng.ui.IStateService){
          //must make a request to /api/movies/IDFROMROUTE
          this.$http.get('/api/movies/' + this.$stateParams['id']).then((response) =>{
            this.movie = response.data;
          })
        }
    }

    export class AddMovieController {
      public movie;

      public addMovie(){
        this.$http.post('/api/movies', this.movie).then((response) => {
          this.$state.go('home');
        })
      }
      constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService){
      }
    }
    export class EditMovieController {
      public movie;

      public editMovie(){
        this.$http.put('/api/movies', this.movie).then((response)=>{
          this.$state.go('home');
        });
      }

      constructor(private $http: ng.IHttpService,
                  private $state: ng.ui.IStateService,
                  private $stateParams: ng.ui.IStateParamsService){
        this.$http.get('/api/movies/' + this.$stateParams['id']).then((response)=>{
          this.movie = response.data;
        })
      }
    }
}
