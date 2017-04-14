(function () {

	angular.module ('myApp', [])
	.controller('LunchCheckController', DIController);

	DIController = ['$scope', '$filter'];


	function DIController ($scope, $filter) {

		$scope.name = "";

		$scope.splitString = function () {
			var stringAfterSplit =$scope.name.split(',');
			var counter= "-1";
			for (var i=0; i<=stringAfterSplit.length; i++) {
				if (/\S/.test(stringAfterSplit[i])) {	//My code handles the scenario where blank spaces are not counted as food items
					counter++;
				};
			}
			console.log(counter);
			return (counter);
		};

		$scope.showResult = function () {
			var stringAfterSplit= $scope.splitString();
			console.log(stringAfterSplit);

			if(stringAfterSplit <=3 && stringAfterSplit != 0) {
				$scope.displayMessage= "Enjoy!";
			}
			else if (stringAfterSplit > 3) {
				$scope.displayMessage= "Too much!";
			}
			else {
				$scope.displayMessage= "Please enter data first";
			};
		};

	}

}) ();