namespace nodewebapi {

    angular.module('nodewebapi', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: nodewebapi.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about/:id',
                templateUrl: '/ngApp/views/about.html',
                controller: nodewebapi.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('addMovie', {
                url: '/addMovie',
                templateUrl: '/ngApp/views/addmovie.html',
                controller: nodewebapi.Controllers.AddMovieController, //DOES NOT EXIST
                controllerAs: 'controller'
            })
            .state('editMovie', {
              url: '/editMovie/:id',
              templateUrl: '/ngApp/views/editMovie.html',
              controller: nodewebapi.Controllers.EditMovieController,
              controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
