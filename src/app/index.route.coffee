angular.module "botanist"
.config ($stateProvider, $urlRouterProvider) ->
  $stateProvider
#  .state "home",
#    url: "/"
#    templateUrl: "app/main/main.html"
#    controller: "MainController"
#    controllerAs: "main"
  .state "home",
    url: "/"
    templateUrl: "app/home/main.html"
    controller: "HomeController"
    controllerAs: "home"
  .state "bouquet",
    url: "/bouquet"
    templateUrl: "app/bouquet/bouquet.html"
    controller: "BouquetController"
    controllerAs: "bouquet"
  .state "immortal",
    url: "/immortal"
    templateUrl: "app/immortal/immortal.html"
    controller: "ImmortalController"
    controllerAs: "immortal"
  .state "wedding",
    url: "/wedding"
    templateUrl: "app/wedding/wedding.html"
    controller: "WeddingController"
    controllerAs: "wedding"
  .state "classic",
    url: "/classic"
    templateUrl: "app/classic/classic.html"
    controller: "ClassicController"
    controllerAs: "classic"
  .state "signin",
    url: "/signin"
    templateUrl: "app/login/signin.html"
    controller: "SignInController"
    controllerAs: "signin"
  .state "signup",
    url: "/signup"
    templateUrl: "app/login/signup.html"
    controller: "SignUpController"
    controllerAs: "signup"
  .state "cart",
    url: "/cart"
    templateUrl: "app/cart/cart.html"
    controller: "CartController"
    controllerAs: "cart"

  $urlRouterProvider.otherwise '/'
