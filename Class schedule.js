
/* This is the function part of my code */

function classselector() {
	var className = document.getElementById("selectedClass").value;
		/* I created a variable named className and this variable will be changed with whichever class is input into the system. 
		The switch allows for the variable to change. */
		switch (className) {
				case "gym":
					className = "gym";
				break;
				
				case "science":
					className = "science";
				break;
/* In this example, english is the case and the variable becomes english, so the class becomes english as well. */
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
/* This part is the second variable and it is the one that changes the colour aspect. */
				var name = document.getElementsByClassName(className);
				for (i=0 ; i<name.length ; i++) {
					name[i].style.backgroundColor = "red"; 
					}
			
	}