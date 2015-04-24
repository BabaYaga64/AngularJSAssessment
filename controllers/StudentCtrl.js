signIn.controller('StudentCtrl', function StudentCtrl($scope, StudentFactory) {
	$scope.students = StudentFactory.students;
	$scope.StudentFactory = StudentFactory;

	$scope.addStudent = function() {
		var name = student.studentName;
		StudentFactory.addStudent(name);
		$scope.studentName = null;
	};

	$scope.deleteStudent = function() {
		var name = $scope.studentName;
		StudentFactory.deleteStudent(name);
	}; 

	$scope.signIn = function(student) {
		student.attendence = true;
	};

	$scope.signOut = function(student) {
		student.attendence = false;
	};
});