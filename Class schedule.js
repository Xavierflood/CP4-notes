var selectedClass;
	function classselector() {
		var className = document.getElementById("selectedClass").value;
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
					
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}
