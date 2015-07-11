angular.module "botanist"
.config ($stateProvider, $urlRouterProvider) ->
  $stateProvider
  .state "home",
    url: "/"
    templateUrl: "app/main/main.html"
    controller: "MainController"
    controllerAs: "main"
  .state "newHome",
    url: "/home"
    templateUrl: "app/home/main.html"
    controller: "HomeController"
    controllerAs: "home"

  $urlRouterProvider.otherwise '/home'
