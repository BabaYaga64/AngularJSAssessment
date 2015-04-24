signIn.controller('AttendenceCtrl', function AttendanceCtrl($scope, StudentFactory) {
	$scope.students = StudentFactory.students;

	$scope.signIn = function(student) {
		StudentFactory.signIn(student);
	};

	$scope.signOut = function(student) {
		StudentFactory.signOut(student);
		// student.attendence = false;
	};
});