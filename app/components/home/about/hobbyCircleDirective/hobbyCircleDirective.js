app.directive('hobbyCircleDirective', function($interval) {
    return {
        restrict: 'E',
        scope: {
            hobbies: '='
        },
        templateUrl: 'app/components/home/about/hobbyCircleDirective/hobbyCircle.html',
        controller: 'hobbyCircleController',
        controllerAs: 'hobbyCircle',
        link: function(scope, elem, attr) {
            
            var checkSize = function() {
                scope.checkWidth = $('.hobby-circle-parent-container').width();
                scope.checkHeight = $('.hobby-circle-parent-container').height();
                
//                scope.radius = Math.min(scope.checkWidth/2, scope.checkHeight/2);
                scope.radius = 300;
            }
            
            //Call it on page load
            checkSize();
            
            // Update radius values for responsive design
            $interval(checkSize, 1000);
            
            scope.$watch(function() {
                return scope.currentHobbyImgSrc;
            },
            function(newVal, oldVal) {
                console.log('newVal: ', newVal);

                var myEl = angular.element(elem[0].querySelector('.background-container'));

                myEl.css({
                    'background-image': 'url(\'/' + newVal + '\')'
                });
               
            });
        }
    }
});