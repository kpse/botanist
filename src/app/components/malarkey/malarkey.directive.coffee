angular.module "botanist"
  .directive 'acmeMalarkey', ->

    MalarkeyController = [ '$log', 'githubContributor', ($log, githubContributor) ->
      vm = this

      activate = ->
        getContributors()

      getContributors = ->
        vm.contributors = ['Louis Suo', 'Vida Wang', 'GN-STAR', '...', '....', '.....', '......']
        vm.contributors

      vm.contributors = []
      activate()

    linkFunc = (scope, el, attr, vm) ->
      watcher = undefined
      typist = malarkey(el[0],
        typeSpeed: 40
        deleteSpeed: 40
        pauseDelay: 800
        loop: true
        postfix: ' ')
      el.addClass 'acme-malarkey'
      angular.forEach scope.extraValues, (value) ->
        typist.type(value).pause().delete()

      watcher = scope.$watch('vm.contributors', ->
        angular.forEach vm.contributors, (contributor) ->
          typist.type(contributor).pause().delete()
      )
      scope.$on '$destroy', ->
        watcher()

    directive =
      restrict: 'E'
      scope: extraValues: '='
      template: '&nbsp;'
      link: linkFunc
      controller: MalarkeyController
      controllerAs: 'vm'
  ]