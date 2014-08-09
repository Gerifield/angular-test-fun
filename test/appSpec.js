describe('Unit: TestRepeatCtrl', function(){
	beforeEach(module('angularTestApp'));

	var ctrl, scope;
	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope.$new();
		ctrl = $controller('TestRepeatCtrl', {
			$scope: scope
		});
	}));

	it('should have 3 items', function(){
		expect(scope.items.length).toEqual(3);
	});
});