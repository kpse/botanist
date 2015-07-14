angular.module "botanist"
  .directive 'myFooter', ->
    restrict: 'E'
    templateUrl: 'app/components/footer/footer.html'
    link: ->