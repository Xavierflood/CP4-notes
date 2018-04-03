function classselector() {
	var className = document.getElementById("selectedClass").value;
		switch (className) {
				case "gym":
					className = "gym";
				break;
				
				case "science":
					className = "science";
				break;

				case "english":
					className = "english";
				break;

				case "computer programming":
					className = "computer programming";
				break;

				case "religion":
					className = "religion";
				break;

				case "music":
					className = "music";
				break;

				case "french":
					className = "french";
				break;

				case "speech":
					className = "speech";
				break;

				case "history":
					className = "history";
				break;

				case "math":
					className = "math";
				break;

				case "homeroom":
					className = "homeroom";
				break;
				
				case "level assembly":
					className = "level assembly";
				break;	
				
				default: 
				console.log('Invalid term');
				break;
		}

				var name = document.getElementsByClassName(className);
				for (i=0 ; i<name.length ; i++) {
					name[i].style.backgroundColor = "red"; 
					}
			
	}