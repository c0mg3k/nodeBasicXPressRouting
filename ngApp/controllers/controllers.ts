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
        //make a request to the route which provids a sigle movie by its id.
        constructor(private $http: ng.IHttpService, private $stateParams: ng.ui.IStateParamsService){
          //must make a request to /api/movies/IDFROMROUTE
          this.$http.get('/api/movies/' + this.$stateParams['id']).then((response) =>{
            this.movie = response.data;
          })
        }
    }

}
