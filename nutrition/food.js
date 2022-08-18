
let globalData;

let user_input = document.getElementById("userInput")
let foodSubmitBtn = document.getElementById("foodSubmit")

let foodapi;

foodSubmitBtn.onclick = (event) => {
	event.preventDefault()
	let userInputVal = user_input.value
	console.log(userInputVal)

	foodapi = `https://api.spoonacular.com/recipes/complexSearch?query=%22${userInputVal}%22&addRecipeInformation=true&apiKey=a834f2a6b58545049b02148bee1c978e`

	fetch(foodapi)
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			globalData = data.results;
			console.log(globalData)
			foodContainer.innerHTML = ""

			for (let i = 0; i < globalData.length; i++) {
				let newDiv = document.createElement("div")
				newDiv.id = "foodbox"

				let dishName = document.createElement("h1")
				dishName.innerHTML = globalData[i].title

				let dishImg = document.createElement("img")
				dishImg.src = globalData[i].image

				let info = document.createElement("h2")
				info.innerHTML = "Details:"

				let summary = document.createElement("p")
				summary.innerHTML = globalData[i].summary

				let vegan = document.createElement("p")
				if (globalData[i].vegan == true) {
					vegan.innerHTML = "This Dish is Vegan"
				} else {
					vegan.innerHTML = "This Dish is NOT Vegan"
				}

				let vegetarian = document.createElement("p")
				if (globalData[i].vegetarian == true) {
					vegetarian.innerHTML = "This Dish is Vegetarian"
				} else {
					vegetarian.innerHTML = "This Dish is NOT Vegetarian"
				}

				let healthy = document.createElement("p")
				if (globalData[i].veryHealthy == true) {
					healthy.innerHTML = "This Dish is very Healthy!"
				} else {
					healthy.innerHTML = "This Dish is not too healthy, watch out!"
				}

				newDiv.className = 'food'
				newDiv.append(dishName, dishImg, info, summary, vegan, vegetarian, healthy)

				if (globalData[i].veryPopular == true) {
					let popular = document.createElement("p")
					popular.innerHTML = "This is a very Popular Dish!"
					newDiv.append(popular)
				}

				// Food Steps Button
				let showStepsBtn = document.createElement('button')
				showStepsBtn.innerHTML = "Show Steps For How To Make This!"
				newDiv.append(showStepsBtn)

				// Food Steps Button Functionality
				let stepsBtnDiv = document.createElement("div")
				let stepsData = globalData[i].analyzedInstructions[0].steps
				for (let j = 0; j < stepsData.length; j++) {
					let stepNum = stepsData[j].number;
					let step = stepsData[j].step;
					let fullStep = document.createElement('p')
					fullStep.innerHTML = stepNum + ". " + step
					stepsBtnDiv.append(fullStep)
				}

				stepsBtnDiv.style.display = 'none'

				newDiv.append(stepsBtnDiv)

				foodContainer.appendChild(newDiv);

				let openOrClosed = 0;

				showStepsBtn.onclick = function() {
					if (openOrClosed == 0) {
						stepsBtnDiv.style.display = 'block'
						openOrClosed += 1;
						showStepsBtn.innerHTML = "Close Steps For How To Make This"
					}
					else if (openOrClosed == 1) {

						stepsBtnDiv.style.display = 'none'
						openOrClosed = 0;
						showStepsBtn.innerHTML = "Show Steps For How To Make This!"
					}
				}

			}
		})
}
