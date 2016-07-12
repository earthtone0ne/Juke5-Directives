'use strict';

juke.directive('playerDir', function (PlayerFactory, $log) {

  var obj = {
    restrict: 'E',
    templateUrl: '/js/player/player.html',
    link: function (scope, elem, attr){
      angular.extend(scope, PlayerFactory);
      scope.toggle = function () {
          if ( PlayerFactory.isPlaying() ) PlayerFactory.pause();
          else PlayerFactory.resume();
        };

      scope.getPercent = function () {
        return PlayerFactory.getProgress() * 100;
      };

      scope.handleProgressClick = function (evt) {
        PlayerFactory.seek(evt.offsetX / evt.currentTarget.scrollWidth);
      };

    }

  };


  return obj;
});
