signIn.controller('StudentCtrl', function StudentCtrl($scope, StudentFactory) {
	$scope.students = StudentFactory.students;
	$scope.StudentFactory = StudentFactory;

	$scope.signIn = function(student) {
		student.attendence = true;
	}

	$scope.signOut = function(student) {
		student.attendence = false;
	}
});