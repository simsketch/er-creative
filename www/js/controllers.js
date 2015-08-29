angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('VideosCtrl', function($scope, Videos) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.videos = Videos.all();
  $scope.remove = function(video) {
    Videos.remove(video);
  };
})

.controller('VideoDetailCtrl', function($scope, $stateParams, Videos) {
  $scope.video = Videos.get($stateParams.videoId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
