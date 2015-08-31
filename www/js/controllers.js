angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
			this.config = {
				sources: [
					{src: "http://static.videogular.com/assets/videos/videogular.mp4", type: "video/mp4"},
					{src: "http://static.videogular.com/assets/videos/videogular.webm", type: "video/webm"},
					{src: "http://static.videogular.com/assets/videos/videogular.ogg", type: "video/ogg"}
				],
				tracks: [
					{
						src: "",
						kind: "subtitles",
						srclang: "en",
						label: "English",
						default: ""
					}
				],
				theme: "lib/videogular-themes-default/videogular.css",
				plugins: {
					poster: "http://www.videogular.com/assets/images/videogular.png"
				}
			};
})

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

.controller('VideoDetailCtrl', function($sce, $scope, $stateParams, Videos) {
  $scope.video = Videos.get($stateParams.videoId);
  $scope.mediaObjectId = Videos.mediaId($stateParams.videoId);
  $scope.thumb = Videos.thumb($stateParams.videoId);
  this.config = {
				sources: [
					{src: $sce.trustAsResourceUrl("http://app.extremereach.com/Media/Stream/"+$scope.mediaObjectId+"?profile=6770839A-128E-4C84-812B-3F562CFBFC4B"), type: "video/mp4"}
				],
				theme: "/lib/videogular-themes-default/videogular.css",
				plugins: {
					poster: $scope.thumb
				}
			};
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
