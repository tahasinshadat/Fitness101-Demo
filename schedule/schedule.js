

let scheduleData = {
    fatLossSchedule1: {
        monday: [
            "Pull Up - Sets: 3	Reps: 8",
            "Push Up - Sets: 3	Reps: 10",
            "Bodyweight Squat - Sets: 3	Reps: 10",
            "Dip - Sets: 3	Reps: 10",
            "Chin Up - Sets: 3	Reps: 8",
            "Bodyweight Rear Lunge - Sets: 3	Reps: 15 Each",
            "Dumbbell Shoulder Press - Sets: 3	Reps: 8",
            "Dumbbell Row - Sets: 3 Reps: 8",
            "Dumbbell Stiff Leg Deadlift - Sets: 3 Reps: 8",
            "Plank - Sets: 3 Reps: 45 Secs"
        ],
        tuesday: ["rest"],
        wednesday: [
            "Pull Up - Sets: 3 Reps: 6",
            "Dip - Sets: 3 Reps: 6",
            "Chin Up - Sets: 3 Reps: 6",
            "Push Up - Sets: 3 Reps: 10",
            "Dumbbell Goblet Squat - Sets: 4 Reps: 8",
            "Dumbbell Shoulder Press  - Sets: 4 Reps: 8",
            "Dumbbell RDL - Sets: 4 Reps: 8",
            "Dumbbell Glute Bridge - Sets: 4 Reps: 8"
        ],
        thursday: ["rest"],
        friday: [
            "Barbell Good Morning - Sets: 8 Reps: 4	Sets: 8",
            "Barbell Lunge - Sets: 4 Reps: 8",

            "Barbell Squat - Sets: 4 Reps: 8",
            "Barbell Push Press - Sets: 4 Reps: 8",
            "Dumbbell Bench Press - Sets: 3 Reps: 10",
            "Dumbbell Row - Sets: 3 Reps: 10",

            "Dumbbell Shrug - Sets: 3	Reps: 10",
            "Machine Ab Crunch	- Sets: 5	Reps: 12"
        ],
        saturday: ["rest"],
        sunday: ["rest"]
    },


    buildMuscleSchedule1: {
        monday: [
            "Incline Barbell Bench Press - Sets: 3 Reps: 12, 10, 12* Rest 90 secs * = Rest-Pause Set",
            "Flat Dumbbell Bench Press - Sets: 3 Reps: 12, 10, 15+ Rest 90 secs + = Drop Set",
            "Cable Crossover - Sets: 3	Reps: 12, 12, 12^ Rest 90 secs ^= 3 to 5 Second Negatives",
            "Seated Lateral Raise - Sets: 3 Reps: 12, 12, 12 est 90 secs",
            "Single Arm Cable Lateral Raise - Sets: 3 Reps: 12, 12, 12 Rest 90 secs"

        ],
        tuesday: [
            "Bent-Over Barbell Row - Sets: 3 Reps: 12, 10, 12* Rest 90 secs * = Rest-Pause Set",
            "Dumbbell Pullover - Sets: 3 Reps: 12, 10, 15+ Rest 90 secs + = Drop Set",
            "Wide Grip Lat Pulldown - Sets: 3 Reps: 12, 12, 12^ Rest 90 secs ^= 3 to 5 Second Negatives",
            "Dumbbell Rear Delt Fly - Sets: 3	Reps: 12, 12, 12 est 90 secs",
            "Cable Face Pull - Sets: 3 Reps: 12, 12, 12 Rest 90 secs",
            "Dumbbell Shrug - Sets: 3 Reps: 12, 12, 12 Rest 90 secs",
        ],
        wednesday: ["rest"],
        thursday: [
            "Close Grip Bench Press - Sets: 3 Reps: 12, 10, 12* Rest 90 secs * = Rest-Pause Set",
            "Weighted Dip - Sets: 3 Reps: 12, 10, 15+ Rest 90 secs + = Drop Set",
            "Rope Tricep Extension - Sets: 3 Reps: 12, 12, 12^ Rest 90 secs ^= 3 to 5 Second Negatives",
            "Lying Leg Raise - Sets: 3	Reps: 12, 12, 12 est 90 secs",
            "Cable Crunch - Sets: 3 Reps: 12, 12, 12 Rest 90 secs",
            "Barbell Curl - Sets: 3 Reps: 12, 10, 12* Rest 90 secs * = Rest-Pause Set",
            "Hammer Curl - Sets: 3 Reps: 12, 10, 15+ Rest 90 secs + = Drop Set",
            "Cable Curl - Sets: 3 Reps: 12, 12, 12^ Rest 90 secs ^= 3 to 5 Second Negatives"

        ],
        friday: [
            "Deadlift - Sets: 3 Reps: 12, 10, 12* Rest 90 secs * = Rest-Pause Set",
            "Lying Leg Curl - Sets: 3 Reps: 12, 10, 12+ Rest 90 secs + = Drop Set",
            "Walking Lunge - Sets: 3 Reps: 12, 12, 12 Rest 90 secs",
            "Front Squat - Sets: 3 Reps: 12, 10, 12* Rest 90 secs * = Rest-Pause Set",
            "Leg Extension - Sets: 3 Reps: 12, 10, 12+ Rest 90 secs + = Drop Set",
            "Dumbbell Side Lunge - Sets: 3 Reps: 12, 12, 12 Rest 90 secs",
            "Seated Calf Raise - Sets: 3 Reps: 12, 12, 12^ Rest 90 secs ^= 3 to 5 Second Negatives",
            "Calf Press - Sets: 3 Reps: 12, 12, 12^ Rest 90 secs ^= 3 to 5 Second Negatives"
        ],
        saturday: ["rest"],
        sunday: ["rest"]
    },
    buildMuscleSchedule2: {
        monday: [
            "Trap Bar Deadlift - Sets: 5 Reps: 12, 10, 8, 5, 5",
            "Neutral Grip Dumbbell Bench Press - Sets: 4 Reps: 8-12",
            "Z Press - Sets: 3 Reps: 8-12",
            "Wide Grip Bent Over Row - Sets: 3 Reps: 12",
            "Close Grip Chin Up - Sets: 3 Reps: Mechanical Failure"
        ],
        tuesday: ["rest"],
        wednesday: [
            "Front Squat - Sets: 5 Reps: 12, 10, 8, 5, 5",
            "Landmine Romanian Deadlift - Sets: 4 Reps: 8-12",
            "Incline Bench Press - Sets: 3 Reps: 8-12",
            "Cable Face Pulls - Sets: 3 Reps: 8-12",
            "Farmers Carry - Sets: 3 Reps: 20 Yards"
        ],
        thursday: ["rest"],
        friday: [
            "Standing Military Press - Sets: 5 Reps: 12, 10, 8, 5, 5",
            "Goblet Squat - Sets: 4 Reps: 8-12",
            "Barbell Hip Thrust - Sets: 3 Reps: 8-12",
            "Wide Grip Inverted Row - Sets: 3 Reps: 12-15",
            "Push Up - Sets: 3 Reps: 12-15"
        ],
        saturday: ["rest"],
        sunday: ["rest"]

    },
    buildMuscleSchedule3: {
        monday: [
            "Smith Machine Incline Bench Press - Sets: 2 Reps: 6-8,8-12",
            "Machine Flat Press - Sets: 2 Reps: 6-8,8-12",
            "Pec Dec Fly - Sets: 2 Reps: 6-8,8-12",
            "Cable Fly - Sets: 2 Reps: 6-8,8-12",
            "1 Arm Tricep Pushdown - Sets: 2 Reps: 6-8,8-12",
            "V Bar Tricep Pushdown - Sets: 2 Reps: 6-8,8-12",
            "Dip Machine - Sets: 2 Reps: 6-8,8-12"
        ],
        tuesday: [
            "Activation Rows - Sets: 1 Reps: warmup",
            "Hammer Strength Low Row - Sets: 2 Reps: 6-8,8-12",
            "Incline Bench Dumbbell Rows - Sets: 2 Reps: 6-8,8-12",
            "High to Low Machine Row - Sets: 2 Reps: 6-8,8-12",
            "Rack Pulls - Sets: 2 Reps: 6-8,8-12"
        ],
        wednesday: [
            "Leg Extensions - Sets: 2 Reps: 6-8,8-12",
            "Front Squat - Sets: 2 Reps: 6-8,8-12",
            "Hack Squat - Sets: 2 Reps: 6-8,8-12",
            "1 Leg Leg Press - Sets: 2 Reps: 6-8,8-12 Each",
            "Walking Lunge - Sets: 2 Reps: 6-8,8-12 Each",
            "Seated Calf Raise - Sets: 2 Reps: 6-8,8-12",
            "Donkey Calf Raise - Sets: 2 Reps: 6-8,8-12"
        ],
        thursday: [
            "Seated Machine Press - Sets: 2 Reps: 6-8,8-12",
            "Standing Barbell Press - Sets: 2 Reps: 6-8,8-12",
            "Cable Side Lateral Raise - Sets: 2 Reps: 6-8,8-12",
            "Bent Over Rear Delt Fly - Sets: 2 Reps: 6-8,8-12",
            "Machine Preacher Curl - Sets: 2 Reps: 6-8,8-12",
            "Barbell Drag Curl - Sets: 2 Reps: 6-8,8-12",
            "1 Arm Cable Curl - Sets: 2 Reps: 6-8,8-12"
        ],
        friday: [
            "Activation Rows - Sets: 1 Reps: Warm up",
            "1 Arm Hammer Strength Low Row - Sets: 2 Reps: 6-8,8-12 Each",
            "1 Arm Cable Row - Sets: 2 Reps: 6-8,8-12 Each",
            "Dumbbell Pullovers - Sets: 2 Reps: 6-8,8-12",
            "Underhand Lat Pulldown - Sets: 2 Reps: 6-8,8-12"

        ],
        saturday: [
            "Lying Leg Curl Machine - Sets: 2 Reps: 6-8,8-12",
            "Barbell Stiff Leg Deadlift - Sets: 2 Reps: 6-8,8-12",
            "Seated Hamstring Curl - Sets: 2 Reps: 6-8,8-12",
            "Barbell Glute Bridge - Sets: 2 Reps: 6-8,8-12",
            "1 Leg Elevated Calf Raise - Sets: 2 Reps: 6-8,8-12 Each",
            "Standing Calf Raise Machine - Sets: 2 Reps: 6-8,8-12",

        ],
        sunday: ["rest"]
    },
    fatLossSchedule2: {
        monday: ["rest"],
        tuesday: [
            "Bench Press - Sets: 0 Reps: 5",
            "Push Up - Sets: 0 Reps: 20",
            "Overhead Press - Sets: 0 Reps: 10",
            "Medicine Ball Jump Snatch - Sets: 0 Reps: 15",
            "Incline Dumbbell Bench Press - Sets: 0 Reps: 10",
            "Chest Dip - Sets: 0 Reps: 15"
        ],
        wednesday: ["rest"],
        thursday: [
            "Deadlift - Sets: 0 Reps: 5",
            "Back Extension - Sets: 0 Reps: 20",
            "Barbell Curl - Sets: 0 Reps: 10",
            "Close Grip Chin Up - Sets: 0 Reps: 15",
            "Dumbbell Lunge - Sets: 0 Reps: 10",
            "Split Squat - Sets: 0 Reps: 15"
        ],
        friday: ["rest"],
        saturday: [
            "Squat - Sets: 0 Reps: 5",
            "Tuck Jump - Sets: 0 Reps: 20",
            "Upright Row - Sets: 0 Reps: 10",
            "Inverted Row - Sets: 0 Reps: 15",
            "ATG Front Squat - Sets: 0 Reps: 10",
            "Dumbbell High Pulls - Sets: 0 Reps: 15"
        ],
        sunday: ["rest"]
    },
    homeworkoutSchedule1: {
        monday: [
            "Push-ups - Sets: 3 Reps: 12",
            "Wide Hands Push-Up - Sets: 3 Reps: 12",
            "Diamond Push-Up - Sets: 3 Reps: 12",
            "Plank - Sets: 3 Reps: 45 Secs",
            "Pike Push-Up - Sets: 3 Reps: Mechanical Failure",
            "Jumping Jacks - Sets: 3 Reps: 50"
        ],
        tuesday: ["rest"],
        wednesday: [
            "squat Sets: 3 Reps: 20",
            "calf raises squat Sets: 3 Reps: 20",
            "Walking lunges - Sets: 3 Reps: 20",
            "Reverse lunge - Sets: 3 Reps: 20",
            "Lateral lunge - Sets: 3 Reps: 20",
            "Glute bridge - Sets: 3 Reps: 20"
        ],
        thursday: ["rest"],
        friday: [
            "Hardstyle plank - Sets: 3 Reps: 20",
            "Dead bug - Sets: 3 Reps: 20",
            "Hollow extension-to-cannonball - Sets: 3 Reps: 20",
            "Bird dog - Sets: 3 Reps: 20",
            "Sit-ups - Sets: 3 Reps: 20",
            "Flutter kicks - Sets: 3 Reps: 20"
        ],
        saturday: ["rest"],
        sunday: ["rest"]
        
    },
    homeworkoutSchedule2: {
        monday: [
            "Burpees - Sets: 3 Reps: 45 Secs",
            "Pike pushups - Sets: 3 Reps: 45 Secs",
            "90 degree toe taps - Sets: 3 Reps: 45 Secs",
            "Tricep extensions - Sets: 3 Reps: 45 Secs",
            "Single leg pushups - Sets: 3 Reps: 22 Secs Each",
            "Bench dips - Sets: 3 Reps: 45 Secs",
            "Body rows - Sets: 3 Reps: 45 Secs",
            "Tucked reverse leg extension - Sets: 3 Reps: 45 Secs",
            "Side lunges - Sets: 3 Reps: 22 Secs Each",
            "Explosive lunges - Sets: 3 Reps: 22 Secs Each",
            "Squats - Sets: 3 Reps: 45 Secs",
            "High plank to low plank - Sets: 3 Reps: 22 Secs Each",
            "In and outs - Sets: 3 Reps: 45 Secs",
            "Plank hold - Sets: 3 Reps: 45 Secs",
            "Russian twists - Sets: 3 Reps: 45 Secs"
        ],
        tuesday: ["rest"],
        wednesday: [
            "Burpees - Sets: 3 Reps: 45 Secs",
            "Pike pushups - Sets: 3 Reps: 45 Secs",
            "90 degree toe taps - Sets: 3 Reps: 45 Secs",
            "Tricep extensions - Sets: 3 Reps: 45 Secs",
            "Single leg pushups - Sets: 3 Reps: 22 Secs Each",
            "Bench dips - Sets: 3 Reps: 45 Secs",
            "Body rows - Sets: 3 Reps: 45 Secs",
            "Tucked reverse leg extension - Sets: 3 Reps: 45 Secs",
            "Side lunges - Sets: 3 Reps: 22 Secs Each",
            "Explosive lunges - Sets: 3 Reps: 22 Secs Each",
            "Squats - Sets: 3 Reps: 45 Secs",
            "High plank to low plank - Sets: 3 Reps: 22 Secs Each",
            "In and outs - Sets: 3 Reps: 45 Secs",
            "Plank hold - Sets: 3 Reps: 45 Secs",
            "Russian twists - Sets: 3 Reps: 45 Secs"
        ],
        thursday: ["rest"],
        friday: [
            "Burpees - Sets: 3 Reps: 45 Secs",
            "Pike pushups - Sets: 3 Reps: 45 Secs",
            "90 degree toe taps - Sets: 3 Reps: 45 Secs",
            "Tricep extensions - Sets: 3 Reps: 45 Secs",
            "Single leg pushups - Sets: 3 Reps: 22 Secs Each",
            "Bench dips - Sets: 3 Reps: 45 Secs",
            "Body rows - Sets: 3 Reps: 45 Secs",
            "Tucked reverse leg extension - Sets: 3 Reps: 45 Secs",
            "Side lunges - Sets: 3 Reps: 22 Secs Each",
            "Explosive lunges - Sets: 3 Reps: 22 Secs Each",
            "Squats - Sets: 3 Reps: 45 Secs",
            "High plank to low plank - Sets: 3 Reps: 22 Secs Each",
            "In and outs - Sets: 3 Reps: 45 Secs",
            "Plank hold - Sets: 3 Reps: 45 Secs",
            "Russian twists - Sets: 3 Reps: 45 Secs"
        ],
        saturday: ["rest"],
        sunday: ["rest"]
    },
    buildMuscleSchedule4: {
        monday: [
            "Smith Machine Incline Bench Press - Sets: 2 Reps: 6-8,8-12",
            "Machine Flat Press - Sets: 2 Reps: 6-8,8-12",
            "Pec Dec Fly - Sets: 2 Reps: 6-8,8-12",
            "1 Leg Leg Press - Sets: 2 Reps: 6-8,8-12 Each",
            "Walking Lunge - Sets: 2 Reps: 6-8,8-12 Each",
            "Seated Calf Raise - Sets: 2 Reps: 6-8,8-12",
            "Donkey Calf Raise - Sets: 2 Reps: 6-8,8-12"
        ],
        tuesday: [
            "Front Squat - Sets: 5 Reps: 12, 10, 8, 5, 5",
            "Landmine Romanian Deadlift - Sets: 4 Reps: 8-12",
            "Incline Bench Press - Sets: 3 Reps: 8-12",
            "Cable Face Pulls - Sets: 3 Reps: 8-12",
            "Farmers Carry - Sets: 3 Reps: 20 Yards"
        ],
        wednesday: [
            "Leg Extensions - Sets: 2 Reps: 6-8,8-12",
            "Front Squat - Sets: 2 Reps: 6-8,8-12",
            "Hack Squat - Sets: 2 Reps: 6-8,8-12",
            "Cable Fly - Sets: 2 Reps: 6-8,8-12",
            "1 Arm Tricep Pushdown - Sets: 2 Reps: 6-8,8-12",
            "V Bar Tricep Pushdown - Sets: 2 Reps: 6-8,8-12",
            "Dip Machine - Sets: 2 Reps: 6-8,8-12"

        ],
        thursday: [
            "Lying Leg Curl Machine - Sets: 2 Reps: 6-8,8-12",
            "Landmine Romanian Deadlift - Sets: 4 Reps: 8-12",
            "Seated Hamstring Curl - Sets: 2 Reps: 6-8,8-12",
            "Barbell Glute Bridge - Sets: 2 Reps: 6-8,8-12",
            "1 Leg Elevated Calf Raise - Sets: 2 Reps: 6-8,8-12 Each",
            "Standing Calf Raise Machine - Sets: 2 Reps: 6-8,8-12",

        ],
        friday: [
            "Activation Rows - Sets: 1 Reps: Warm up",
            "1 Arm Cable Row - Sets: 2 Reps: 6-8,8-12 Each",
            "1 Arm Hammer Strength Low Row - Sets: 2 Reps: 6-8,8-12 Each",
            "Dumbbell Pullovers - Sets: 2 Reps: 6-8,8-12",
            "Underhand Lat Pulldown - Sets: 2 Reps: 6-8,8-12"

        ],
        saturday: ["rest"],
        sunday: ["rest"]

    }
}


let submittest = document.getElementById("submit")
let buildmuscle =['buildMuscleSchedule1', 'buildMuscleSchedule2', 'buildMuscleSchedule3', 'buildMuscleSchedule4']
let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
let fatloss =['fatLossSchedule1', 'fatLossSchedule2']
let homeworkout =['homeworkoutSchedule1', 'homeworkoutSchedule2']

submittest.onclick = function() {
	
        let activity = document.querySelector('input[name="active"]:checked').value;
        let eatingHabit = document.querySelector('input[name="healthyfood"]:checked').value;
        let height = document.querySelector('input[name="height"]:checked').value;
        let weight = document.querySelector('input[name="weight"]:checked').value;
        // console.log(activity)
        // console.log(eatingHabit)
        // console.log(height)
        // console.log(weight)
        document.getElementById("bodyTest").innerHTML = ""

		let choose = document.createElement('h1')
		choose.innerHTML = "We Have Created A Few Personalized Workouts For You! Choose Which One/s You Want To Do Below!"
		bodyTest.append(choose)

        if ((height == 'tall' || height == "average") & (weight == "heavy" || weight == 'medium') & (eatingHabit == 'veryhealthy' || eatingHabit == "somewhathealthy") & (activity == "VeryActive")) {

            for (let i = 0; i < buildmuscle.length; i++) {
                let newDiv = document.createElement('div')
                let scheduleName = document.createElement("h1")
                scheduleName.innerHTML = buildmuscle[i]
				newDiv.append(scheduleName)
				for (let j = 0; j < days.length; j++) {
					let day = document.createElement('h2')
					day.innerHTML =	days[j]
					newDiv.append(day)
					let temp = scheduleData[buildmuscle[i]][days[j]]
					for (let k = 0; k < temp.length; k++) {
						let workouts = document.createElement('p')
						if (temp[k] == 'rest') {
							workouts.innerHTML = temp[k] + " day"
						} else {
							workouts.innerHTML = "Workout " + (k + 1) + ": " + temp[k]
						}
						newDiv.append(workouts)
					}
				}
				newDiv.className = "workoutSchedule"
                scheduleContainer.appendChild(newDiv)
            }

        }
        else if ((height == 'short' & weight == "heavy") & (eatingHabit == 'nothealthy' || eatingHabit == "somewhathealthy") & (activity == 'SomewhatActive' || activity == "NotActive")) {
            //fatloss 2 and buildmuscle 2
			for (let i = 0; i < fatloss.length; i++) {
                let newDiv = document.createElement('div')
                let scheduleName = document.createElement("h1")
                scheduleName.innerHTML = fatloss[i]
				newDiv.append(scheduleName)
				for (let j = 0; j < days.length; j++) {
					let day = document.createElement('h2')
					day.innerHTML =	days[j]
					newDiv.append(day)
					let temp = scheduleData[fatloss[i]][days[j]]
					for (let k = 0; k < temp.length; k++) {
						let workouts = document.createElement('p')
						if (temp[k] == 'rest') {
							workouts.innerHTML = temp[k] + " day"
						} else {
							workouts.innerHTML = "Workout " + (k + 1) + ": " + temp[k]
						}
						newDiv.append(workouts)
					}
				}
				newDiv.className = "workoutSchedule"
                scheduleContainer.appendChild(newDiv)
            }

			for (let i = 0; i < 2; i++) {
                let newDiv = document.createElement('div')
                let scheduleName = document.createElement("h1")
                scheduleName.innerHTML = buildmuscle[i]
				newDiv.append(scheduleName)
				for (let j = 0; j < days.length; j++) {
					let day = document.createElement('h2')
					day.innerHTML =	days[j]
					newDiv.append(day)

					let temp = scheduleData[buildmuscle[i]][days[j]]
					for (let k = 0; k < temp.length; k++) {
						let workouts = document.createElement('p')
						if (temp[k] == 'rest') {
							workouts.innerHTML = temp[k] + " day"
						} else {
							workouts.innerHTML = "Workout " + (k + 1) + ": " + temp[k]
						}
						newDiv.append(workouts)
					}
				}
				newDiv.className = "workoutSchedule"
                scheduleContainer.appendChild(newDiv)
            }
			
        }
        else if ((height == 'short' || height == 'average' || height == 'tall') & (weight == 'light')) {
			
            for (let i = 0; i < buildmuscle.length; i++) {
                let newDiv = document.createElement('div')
                let scheduleName = document.createElement("h1")
                scheduleName.innerHTML = buildmuscle[i]
				newDiv.append(scheduleName)
				for (let j = 0; j < days.length; j++) {
					let day = document.createElement('h2')
					day.innerHTML =	days[j]
					newDiv.append(day)
					let temp = scheduleData[buildmuscle[i]][days[j]]
					for (let k = 0; k < temp.length; k++) {
						let workouts = document.createElement('p')
						if (temp[k] == 'rest') {
							workouts.innerHTML = temp[k] + " day"
						} else {
							workouts.innerHTML = "Workout " + (k + 1) + ": " + temp[k]
						}
						newDiv.append(workouts)
					}
				}
				newDiv.className = "workoutSchedule"
                scheduleContainer.appendChild(newDiv)
            }
			
        }
        else if ((height == 'short' || height == 'average' || height == 'tall') & (weight == 'average') & (eatingHabit == 'somewhathealthy') & (activity == "SomewhatActive")) {
            // homeworkout 2 & buildmuscle 2 & fatloss 2

			for (let i = 0; i < homeworkout.length; i++) {
                let newDiv = document.createElement('div')
                let scheduleName = document.createElement("h1")
                scheduleName.innerHTML = homeworkout[i]
				newDiv.append(scheduleName)
				for (let j = 0; j < days.length; j++) {
					let day = document.createElement('h2')
					day.innerHTML =	days[j]
					newDiv.append(day)
					let temp = scheduleData[homeworkout[i]][days[j]]
					for (let k = 0; k < temp.length; k++) {
						let workouts = document.createElement('p')
						if (temp[k] == 'rest') {
							workouts.innerHTML = temp[k] + " day"
						} else {
							workouts.innerHTML = "Workout " + (k + 1) + ": " + temp[k]
						}
						newDiv.append(workouts)
					}
				}
				newDiv.className = "workoutSchedule"
                scheduleContainer.appendChild(newDiv)
            }

			for (let i = 0; i < 2; i++) {
                let newDiv = document.createElement('div')
                let scheduleName = document.createElement("h1")
                scheduleName.innerHTML = buildmuscle[i]
				newDiv.append(scheduleName)
				for (let j = 0; j < days.length; j++) {
					let day = document.createElement('h2')
					day.innerHTML =	days[j]
					newDiv.append(day)
					let temp = scheduleData[buildmuscle[i]][days[j]]
					for (let k = 0; k < temp.length; k++) {
						let workouts = document.createElement('p')
						if (temp[k] == 'rest') {
							workouts.innerHTML = temp[k] + " day"
						} else {
							workouts.innerHTML = "Workout " + (k + 1) + ": " + temp[k]
						}
						newDiv.append(workouts)
					}
				}
				newDiv.className = "workoutSchedule"
                scheduleContainer.appendChild(newDiv)
            }

			for (let i = 0; i < fatloss.length; i++) {
                let newDiv = document.createElement('div')
                let scheduleName = document.createElement("h1")
                scheduleName.innerHTML = fatloss[i]
				newDiv.append(scheduleName)
				for (let j = 0; j < days.length; j++) {
					let day = document.createElement('h2')
					day.innerHTML =	days[j]
					newDiv.append(day)
					let temp = scheduleData[fatloss[i]][days[j]]
					for (let k = 0; k < temp.length; k++) {
						let workouts = document.createElement('p')
						if (temp[k] == 'rest') {
							workouts.innerHTML = temp[k] + " day"
						} else {
							workouts.innerHTML = "Workout " + (k + 1) + ": " + temp[k]
						}
						newDiv.append(workouts)
					}
				}
				newDiv.className = "workoutSchedule"
                scheduleContainer.appendChild(newDiv)
            }
			
        }
        else {
            // homeworkout & buildmuscle

			for (let i = 0; i < homeworkout.length; i++) {
                let newDiv = document.createElement('div')
                let scheduleName = document.createElement("h1")
                scheduleName.innerHTML = homeworkout[i]
				newDiv.append(scheduleName)
				for (let j = 0; j < days.length; j++) {
					let day = document.createElement('h2')
					day.innerHTML =	days[j]
					newDiv.append(day)
					let temp = scheduleData[homeworkout[i]][days[j]]
					for (let k = 0; k < temp.length; k++) {
						let workouts = document.createElement('p')
						if (temp[k] == 'rest') {
							workouts.innerHTML = temp[k] + " day"
						} else {
							workouts.innerHTML = "Workout " + (k + 1) + ": " + temp[k]
						}
						newDiv.append(workouts)
					}
				}
				newDiv.className = "workoutSchedule"
                scheduleContainer.appendChild(newDiv)
            }

			for (let i = 0; i < buildmuscle.length; i++) {
                let newDiv = document.createElement('div')
                let scheduleName = document.createElement("h1")
                scheduleName.innerHTML = buildmuscle[i]
				newDiv.append(scheduleName)
				for (let j = 0; j < days.length; j++) {
					let day = document.createElement('h2')
					day.innerHTML =	days[j]
					newDiv.append(day)
					let temp = scheduleData[buildmuscle[i]][days[j]]
					for (let k = 0; k < temp.length; k++) {
						let workouts = document.createElement('p')
						if (temp[k] == 'rest') {
							workouts.innerHTML = temp[k] + " day"
						} else {
							workouts.innerHTML = "Workout " + (k + 1) + ": " + temp[k]
						}
						newDiv.append(workouts)
					}
				}
				newDiv.className = "workoutSchedule"
                scheduleContainer.appendChild(newDiv)
            }
			
        }

}



