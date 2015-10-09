require('./home.scss');

module.exports = {
    template: require('./home.html'),
    controller: HomeController
};

/*@ngInject*/
function HomeController($scope, $state) {
    $scope.stateName = $state.current.name;
}