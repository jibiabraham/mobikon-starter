require('bower/bootstrap/dist/css/bootstrap-theme.css');
require('bower/bootstrap/dist/css/bootstrap.css');
require('./base.scss');

module.exports = {
    template: require('./base.html'),
    controller: BaseController
};

/*@ngInject*/
function BaseController($scope, $state) {
    $scope.stateName = $state.current.name;
}