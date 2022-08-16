
let data;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '50521ca5a4msh240fb376af2e41ap1a9090jsn627ec0405b65',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

fetch('https://exercisedb.p.rapidapi.com/exercises', options)
	.then(response => response.json())
	.then(function(response) {
		data = response;
		console.log(response);


		let newDiv = document.createElement("div")

		let welcomeMessage = document.createElement("h1");
		welcomeMessage.innerHTML = "Welcome to Fitness101!"

		let welcomeMessage2 = document.createElement("h1");
		welcomeMessage2.innerHTML = "Get started by choosing what muscle you want to workout, choosing what food you want to eat right now, or viewing some of our workout schedules!"

		newDiv.className = 'welcomeMessage'
		newDiv.append(welcomeMessage, welcomeMessage2)

		workoutsContainer.appendChild(newDiv);

	})
	.catch(err => console.error(err));





/////////////////////////////////////////////////////////////////////////////

// Filter Buttons
let deltsExerciseBtn = document.getElementById("delts");//
let bicepsExerciseBtn = document.getElementById("biceps");//
let tricepsExerciseBtn = document.getElementById("triceps");//
let forearmsExerciseBtn = document.getElementById("forearms");//
let latsExerciseBtn = document.getElementById("lats");//
let absExerciseBtn = document.getElementById("abs");//
let quadsExerciseBtn = document.getElementById("quads");//
let calvesExerciseBtn = document.getElementById("calves");//
let glutesExerciseBtn = document.getElementById("glutes")//
let upperbackExerciseBtn = document.getElementById("upper back");//
let spineExerciseBtn = document.getElementById("spine");//
let hamstringsExerciseBtn = document.getElementById("hamstrings");//
let pectoralsExerciseBtn = document.getElementById("pectorals");
let cardiovascularsystemExerciseBtn = document.getElementById("cardiovascular system");//

// let calvesExercis


// Delts Button
deltsExerciseBtn.onclick = function(event) {
	event.preventDefault()
	workoutsContainer.innerHTML = ""
	for (let i = 0; i < data.length; i++) {
		if ("delts" == data[i].target) {
			let newDiv = document.createElement("div")
			let exerciseName = document.createElement("h1");
			exerciseName.innerHTML = data[i].name
			let instruction = document.createElement("h4");
			instruction.innerHTML = "Follow The Motion In The Image Below To Perform This Exercise With Proper Form: "
			let excerciseImg = document.createElement("img")
			excerciseImg.src = data[i].gifUrl
			let muscleWorkedName = document.createElement("h3");
			muscleWorkedName.innerHTML = "Muscle Worked: " + data[i].target
			let equipmentName = document.createElement("h3");
			equipmentName.innerHTML = "Equipment Needed/Used: " + data[i].equipment
			newDiv.append(exerciseName, instruction, excerciseImg, muscleWorkedName, equipmentName);
			newDiv.className = "exercises";
			workoutsContainer.appendChild(newDiv);
		}
	}
}

// Biceps Button
bicepsExerciseBtn.onclick = function(event) {
	event.preventDefault()
	workoutsContainer.innerHTML = ""
	for (let i = 0; i < data.length; i++) {
		if ("biceps" == data[i].target) {
			let newDiv = document.createElement("div")
			let exerciseName = document.createElement("h1");
			exerciseName.innerHTML = data[i].name
			let instruction = document.createElement("h4");
			instruction.innerHTML = "Follow The Motion In The Image Below To Perform This Exercise With Proper Form: "
			let excerciseImg = document.createElement("img")
			excerciseImg.src = data[i].gifUrl
			let muscleWorkedName = document.createElement("h3");
			muscleWorkedName.innerHTML = "Muscle Worked: " + data[i].target
			let equipmentName = document.createElement("h3");
			equipmentName.innerHTML = "Equipment Needed/Used: " + data[i].equipment
			newDiv.append(exerciseName, instruction, excerciseImg, muscleWorkedName, equipmentName);
			newDiv.className = "exercises";
			workoutsContainer.appendChild(newDiv);
		}
	}
}

// Triceps Button
tricepsExerciseBtn.onclick = function(event) {
	event.preventDefault()
	workoutsContainer.innerHTML = ""
	for (let i = 0; i < data.length; i++) {
		if ("triceps" == data[i].target) {
			let newDiv = document.createElement("div")
			let exerciseName = document.createElement("h1");
			exerciseName.innerHTML = data[i].name
			let instruction = document.createElement("h4");
			instruction.innerHTML = "Follow The Motion In The Image Below To Perform This Exercise With Proper Form: "
			let excerciseImg = document.createElement("img")
			excerciseImg.src = data[i].gifUrl
			let muscleWorkedName = document.createElement("h3");
			muscleWorkedName.innerHTML = "Muscle Worked: " + data[i].target
			let equipmentName = document.createElement("h3");
			equipmentName.innerHTML = "Equipment Needed/Used: " + data[i].equipment
			newDiv.append(exerciseName, instruction, excerciseImg, muscleWorkedName, equipmentName);
			newDiv.className = "exercises";
			workoutsContainer.appendChild(newDiv);
		}
	}
}

// Forearms Button
forearmsExerciseBtn.onclick = function(event) {
	event.preventDefault()
	workoutsContainer.innerHTML = ""
	for (let i = 0; i < data.length; i++) {
		if ("forearms" == data[i].target) {
			let newDiv = document.createElement("div")
			let exerciseName = document.createElement("h1");
			exerciseName.innerHTML = data[i].name
			let instruction = document.createElement("h4");
			instruction.innerHTML = "Follow The Motion In The Image Below To Perform This Exercise With Proper Form: "
			let excerciseImg = document.createElement("img")
			excerciseImg.src = data[i].gifUrl
			let muscleWorkedName = document.createElement("h3");
			muscleWorkedName.innerHTML = "Muscle Worked: " + data[i].target
			let equipmentName = document.createElement("h3");
			equipmentName.innerHTML = "Equipment Needed/Used: " + data[i].equipment
			newDiv.append(exerciseName, instruction, excerciseImg, muscleWorkedName, equipmentName);
			newDiv.className = "exercises";
			workoutsContainer.appendChild(newDiv);
		}
	}
}

// Lats Button
latsExerciseBtn.onclick = function(event) {
	event.preventDefault()
	workoutsContainer.innerHTML = ""
	for (let i = 0; i < data.length; i++) {
		if ("lats" == data[i].target) {
			let newDiv = document.createElement("div")
			let exerciseName = document.createElement("h1");
			exerciseName.innerHTML = data[i].name
			let instruction = document.createElement("h4");
			instruction.innerHTML = "Follow The Motion In The Image Below To Perform This Exercise With Proper Form: "
			let excerciseImg = document.createElement("img")
			excerciseImg.src = data[i].gifUrl
			let muscleWorkedName = document.createElement("h3");
			muscleWorkedName.innerHTML = "Muscle Worked: " + data[i].target
			let equipmentName = document.createElement("h3");
			equipmentName.innerHTML = "Equipment Needed/Used: " + data[i].equipment
			newDiv.append(exerciseName, instruction, excerciseImg, muscleWorkedName, equipmentName);
			newDiv.className = "exercises";
			workoutsContainer.appendChild(newDiv);
		}
	}
}

// Abs Filter Button
absExerciseBtn.onclick = function(event) {
	event.preventDefault()
	workoutsContainer.innerHTML = ""
	for (let i = 0; i < data.length; i++) {
		if ("abs" == data[i].target) {
			let newDiv = document.createElement("div")
			let exerciseName = document.createElement("h1");
			exerciseName.innerHTML = data[i].name
			let instruction = document.createElement("h4");
			instruction.innerHTML = "Follow The Motion In The Image Below To Perform This Exercise With Proper Form: "
			let excerciseImg = document.createElement("img")
			excerciseImg.src = data[i].gifUrl
			let muscleWorkedName = document.createElement("h3");
			muscleWorkedName.innerHTML = "Muscle Worked: " + data[i].target
			let equipmentName = document.createElement("h3");
			equipmentName.innerHTML = "Equipment Needed/Used: " + data[i].equipment
			newDiv.append(exerciseName, instruction, excerciseImg, muscleWorkedName, equipmentName);
			newDiv.className = "exercises";
			workoutsContainer.appendChild(newDiv);
		}
	}
}

// Quads Filter Button
quadsExerciseBtn.onclick = function(event) {
	event.preventDefault()
	workoutsContainer.innerHTML = ""
	for (let i = 0; i < data.length; i++) {
		if ("quads" == data[i].target) {
			let newDiv = document.createElement("div")
			let exerciseName = document.createElement("h1");
			exerciseName.innerHTML = data[i].name
			let instruction = document.createElement("h4");
			instruction.innerHTML = "Follow The Motion In The Image Below To Perform This Exercise With Proper Form: "
			let excerciseImg = document.createElement("img")
			excerciseImg.src = data[i].gifUrl
			let muscleWorkedName = document.createElement("h3");
			muscleWorkedName.innerHTML = "Muscle Worked: " + data[i].target
			let equipmentName = document.createElement("h3");
			equipmentName.innerHTML = "Equipment Needed/Used: " + data[i].equipment
			newDiv.append(exerciseName, instruction, excerciseImg, muscleWorkedName, equipmentName);
			newDiv.className = "exercises";
			workoutsContainer.appendChild(newDiv);
		}
	}
}

// Calves Filter Button
calvesExerciseBtn.onclick = function(event) {
	event.preventDefault()
	workoutsContainer.innerHTML = ""
	for (let i = 0; i < data.length; i++) {
		if ("calves" == data[i].target) {
			let newDiv = document.createElement("div")
			let exerciseName = document.createElement("h1");
			exerciseName.innerHTML = data[i].name
			let instruction = document.createElement("h4");
			instruction.innerHTML = "Follow The Motion In The Image Below To Perform This Exercise With Proper Form: "
			let excerciseImg = document.createElement("img")
			excerciseImg.src = data[i].gifUrl
			let muscleWorkedName = document.createElement("h3");
			muscleWorkedName.innerHTML = "Muscle Worked: " + data[i].target
			let equipmentName = document.createElement("h3");
			equipmentName.innerHTML = "Equipment Needed/Used: " + data[i].equipment
			newDiv.append(exerciseName, instruction, excerciseImg, muscleWorkedName, equipmentName);
			newDiv.className = "exercises";
			workoutsContainer.appendChild(newDiv);
		}
	}
}

// Glutes Button
glutesExerciseBtn.onclick = function(event) {
	event.preventDefault()
	workoutsContainer.innerHTML = ""
	for (let i = 0; i < data.length; i++) {
		if ("glutes" == data[i].target) {
			let newDiv = document.createElement("div")
			let exerciseName = document.createElement("h1");
			exerciseName.innerHTML = data[i].name
			let instruction = document.createElement("h4");
			instruction.innerHTML = "Follow The Motion In The Image Below To Perform This Exercise With Proper Form: "
			let excerciseImg = document.createElement("img")
			excerciseImg.src = data[i].gifUrl
			let muscleWorkedName = document.createElement("h3");
			muscleWorkedName.innerHTML = "Muscle Worked: " + data[i].target
			let equipmentName = document.createElement("h3");
			equipmentName.innerHTML = "Equipment Needed/Used: " + data[i].equipment
			newDiv.append(exerciseName, instruction, excerciseImg, muscleWorkedName, equipmentName);
			newDiv.className = "exercises";
			workoutsContainer.appendChild(newDiv);
		}
	}
}

// Upper Back Filter Button
upperbackExerciseBtn.onclick = function(event) {
	event.preventDefault()
	workoutsContainer.innerHTML = ""
	for (let i = 0; i < data.length; i++) {
		if ("upper back" == data[i].target) {
			let newDiv = document.createElement("div")
			let exerciseName = document.createElement("h1");
			exerciseName.innerHTML = data[i].name
			let instruction = document.createElement("h4");
			instruction.innerHTML = "Follow The Motion In The Image Below To Perform This Exercise With Proper Form: "
			let excerciseImg = document.createElement("img")
			excerciseImg.src = data[i].gifUrl
			let muscleWorkedName = document.createElement("h3");
			muscleWorkedName.innerHTML = "Muscle Worked: " + data[i].target
			let equipmentName = document.createElement("h3");
			equipmentName.innerHTML = "Equipment Needed/Used: " + data[i].equipment
			newDiv.append(exerciseName, instruction, excerciseImg, muscleWorkedName, equipmentName);
			newDiv.className = "exercises";
			workoutsContainer.appendChild(newDiv);
		}
	}
}

// Spine Filter Button
spineExerciseBtn.onclick = function(event) {
	event.preventDefault()
	workoutsContainer.innerHTML = ""
	for (let i = 0; i < data.length; i++) {
		if ("spine" == data[i].target) {
			let newDiv = document.createElement("div")
			let exerciseName = document.createElement("h1");
			exerciseName.innerHTML = data[i].name
			let instruction = document.createElement("h4");
			instruction.innerHTML = "Follow The Motion In The Image Below To Perform This Exercise With Proper Form: "
			let excerciseImg = document.createElement("img")
			excerciseImg.src = data[i].gifUrl
			let muscleWorkedName = document.createElement("h3");
			muscleWorkedName.innerHTML = "Muscle Worked: " + data[i].target
			let equipmentName = document.createElement("h3");
			equipmentName.innerHTML = "Equipment Needed/Used: " + data[i].equipment
			newDiv.append(exerciseName, instruction, excerciseImg, muscleWorkedName, equipmentName);
			newDiv.className = "exercises";
			workoutsContainer.appendChild(newDiv);
		}
	}
}

// Quads Filter Button
hamstringsExerciseBtn.onclick = function(event) {
	event.preventDefault()
	workoutsContainer.innerHTML = ""
	for (let i = 0; i < data.length; i++) {
		if ("hamstrings" == data[i].target) {
			let newDiv = document.createElement("div")
			let exerciseName = document.createElement("h1");
			exerciseName.innerHTML = data[i].name
			let instruction = document.createElement("h4");
			instruction.innerHTML = "Follow The Motion In The Image Below To Perform This Exercise With Proper Form: "
			let excerciseImg = document.createElement("img")
			excerciseImg.src = data[i].gifUrl
			let muscleWorkedName = document.createElement("h3");
			muscleWorkedName.innerHTML = "Muscle Worked: " + data[i].target
			let equipmentName = document.createElement("h3");
			equipmentName.innerHTML = "Equipment Needed/Used: " + data[i].equipment
			newDiv.append(exerciseName, instruction, excerciseImg, muscleWorkedName, equipmentName);
			newDiv.className = "exercises";
			workoutsContainer.appendChild(newDiv);
		}
	}
}

// Pectoral Filter Button
pectoralsExerciseBtn.onclick = function(event) {
	event.preventDefault()
	workoutsContainer.innerHTML = ""
	for (let i = 0; i < data.length; i++) {
		if ("pectorals" == data[i].target) {
			let newDiv = document.createElement("div")
			let exerciseName = document.createElement("h1");
			exerciseName.innerHTML = data[i].name
			let instruction = document.createElement("h4");
			instruction.innerHTML = "Follow The Motion In The Image Below To Perform This Exercise With Proper Form: "
			let excerciseImg = document.createElement("img")
			excerciseImg.src = data[i].gifUrl
			let muscleWorkedName = document.createElement("h3");
			muscleWorkedName.innerHTML = "Muscle Worked: " + data[i].target
			let equipmentName = document.createElement("h3");
			equipmentName.innerHTML = "Equipment Needed/Used: " + data[i].equipment
			newDiv.append(exerciseName, instruction, excerciseImg, muscleWorkedName, equipmentName);
			newDiv.className = "exercises";
			workoutsContainer.appendChild(newDiv);
		}
	}
}

// Cardio Button
cardiovascularsystemExerciseBtn.onclick = function(event) {
	event.preventDefault()
	workoutsContainer.innerHTML = ""
	for (let i = 0; i < data.length; i++) {
		if ("cardiovascular system" == data[i].target) {
			let newDiv = document.createElement("div")
			let exerciseName = document.createElement("h1");
			exerciseName.innerHTML = data[i].name
			let instruction = document.createElement("h4");
			instruction.innerHTML = "Follow The Motion In The Image Below To Perform This Exercise With Proper Form: "
			let excerciseImg = document.createElement("img")
			excerciseImg.src = data[i].gifUrl
			let muscleWorkedName = document.createElement("h3");
			muscleWorkedName.innerHTML = "Muscle Worked: " + data[i].target
			let equipmentName = document.createElement("h3");
			equipmentName.innerHTML = "Equipment Needed/Used: " + data[i].equipment
			newDiv.append(exerciseName, instruction, excerciseImg, muscleWorkedName, equipmentName);
			newDiv.className = "exercises";
			workoutsContainer.appendChild(newDiv);
		}
	}
}

// When the user scrolls the page, execute scrolling
window.onscroll = function() {scrolling()};

// Get the header
var header = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrolling() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}