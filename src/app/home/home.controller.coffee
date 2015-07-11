angular.module "botanist"
  .controller "HomeController", ($scope) ->
    vm = this

    $scope.myInterval = 3200

    $scope.slides = [
      {image: 'http://7qnc6c.com1.z0.glb.clouddn.com/V1.png'},
      {image: 'http://7qnc6c.com1.z0.glb.clouddn.com/V1_2.jpg'},
      {image: 'http://7qnc6c.com1.z0.glb.clouddn.com/V1_3.jpg'},

    ]

