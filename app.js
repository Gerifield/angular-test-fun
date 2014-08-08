var app = angular.module('angularTestApp', []);

app.controller('TestRepeatCtrl', function ($scope) {
	$scope.items = [
		{'name' : 'Item 1', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel blandit quam, faucibus luctus turpis. Integer ullamcorper a metus non tempus. Mauris ultricies mi a eros vestibulum laoreet.'},
		{'name' : 'Item 2', 'description': 'Random text'},
		{'name' : 'Item 3', 'description': 'Lorem 2 stuff'}
	];
});