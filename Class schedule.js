var selectedClass;
	function classselector() {
		var className = document.getElementById("something").value;
			switch (className) {
				case 'gym':
					selectedClass = "gym";
				break;
				
				case 'science':
					selectedClass = "science";
				break;

				case 'english':
					selectedClass = "english";
				break;

				case 'computer programming':
					selectedClass = "computer programming";
				break;

				case 'religion':
					selectedClass = "religion";
				break;

				case 'music':
					selectedClass = "music";
				break;

				case 'french':
					selectedClass = "french";
				break;

				case 'speech':
					selectedClass = "speech";
				break;

				case 'history':
					selectedClass = "history";
				break;

				case 'math':
					selectedClass = "math";
				break;

				case 'homeroom':
					selectedClass = "homeroom";
				break;	
				
				case 'level assembly':
					selectedClass = "level assembly";
				break;
			}			
				var className = document.getElementsByClassName(selectedClass);
				for (i= 0; i<className.length; i++ ){
					className[i].style.backgroundColor = "red";
				}
	}
