var app = angular.module('angularTestApp', []);

app.controller('TestRepeatCtrl', function ($scope) {
	$scope.items = [
		{'id': 1, 'name' : 'Item 1', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel blandit quam, faucibus luctus turpis. Integer ullamcorper a metus non tempus. Mauris ultricies mi a eros vestibulum laoreet.'},
		{'id': 3, 'name' : 'Item 2', 'description': 'Random text'},
		{'id': 2, 'name' : 'Item 3', 'description': 'Lorem 2 stuff'}
	];

	$scope.reverseOrder = false;
});

app.directive('myDir', function(){
	return {
		restrict: 'E',
		template: '<b>{{item.name}}</b><br>{{item.description}}'
	};
});