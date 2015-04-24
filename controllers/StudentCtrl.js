signIn.controller('StudentCtrl', function StudentCtrl($scope, StudentFactory) {
	$scope.students = StudentFactory.students;

	$scope.addStudent = function() {
		var name = $scope.studentName;
		StudentFactory.addStudent(name);
		$scope.studentName = null;
	};

	$scope.deleteStudent = function() {
		var name = $scope.studentName;
		StudentFactory.deleteStudent(name);
	}; 


});