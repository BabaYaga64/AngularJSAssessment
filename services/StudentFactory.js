signIn.factory('StudentFactory', function StudentFactory() {
	var factory = {};
	factory.students = [];

	factory.addStudent = function(newName) {
		this.students.push({ name: newName, attendance: false});
	};

	factory.deleteStudent = function(student) {
		var index = this.students.indexOf(student);
		this.students.splice(index, 1);
	};

	factory.signIn = function(student) {
		student.attendence = true;
	}

	factory.signOut = function(student) {
		student.attendence = false;
	};

	factory.updateAttendance = function(student) {
		student.attendance = true;
	};

	return factory;
});