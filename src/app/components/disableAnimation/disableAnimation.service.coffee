angular.module "botanist"
  .directive 'disableAnimation',['$animate',  ($animate)->
    restrict: 'A'
    link: (scope, element) -> $animate.enabled false, element
  ]