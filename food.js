
let globalData;

let user_input = document.getElementById("userInput")
let foodSubmitBtn = document.getElementById("foodSubmit")

let foodapi; 

foodSubmitBtn.onclick = function(event) {
	event.preventDefault()
	let userInputVal = user_input.value
	console.log(userInputVal)

	foodapi = `https://api.spoonacular.com/recipes/complexSearch?query=%22${userInputVal}%22&addRecipeInformation=true&apiKey=7747b056427b4eeab7d0ed2e5a756979`
	
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
	
				let dishName = document.createElement("h1")
				dishName.innerHTML = globalData[i].title

				let dishImg = document.createElement("img")
				dishImg.src = globalData[i].image

				let info = document.createElement("h2")
				info.innerHTML = "Details:"

				let summary = document.createElement("p")
				summary.innerHTML = globalData[i].summary

				let vegan = document.createElement("p")
				if(globalData[i].vegan == true) {
					vegan.innerHTML = "This Dish is Vegan"
				} else {
					vegan.innerHTML = "This Dish is NOT Vegan"
				}

				let vegetarian = document.createElement("p")
				if(globalData[i].vegetarian == true) {
					vegetarian.innerHTML = "This Dish is Vegetarian"
				} else {
					vegetarian.innerHTML = "This Dish is NOT Vegetarian"
				}

				let healthy = document.createElement("p")
				if(globalData[i].veryHealthy == true) {
					healthy.innerHTML = "This Dish is very Healthy!"
				} else {
					healthy.innerHTML = "This Dish is not too healthy, watch out!"
				}

				newDiv.className = 'food'
				newDiv.append(dishName, dishImg, info, summary, vegan, vegetarian, healthy)
				
				if(globalData[i].veryPopular == true) {
					let popular = document.createElement("p")
					popular.innerHTML = "This is a very Popular Dish!"
					newDiv.append(popular)
				} 
	
				foodContainer.appendChild(newDiv);
					
			}
			
		})
	
}

