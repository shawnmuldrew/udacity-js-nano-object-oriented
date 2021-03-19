    // Import dinosaur data 
    import {dinosaurs} from './dino.js';

    // Hide grid
    const gridElement = document.getElementById('grid');
    gridElement.style.display = "none";

    // Function to capitalize string
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
      }
    
    // Create Dino Constructor
    function Dinosaur(species, weight, height, diet, where, when, fact, image) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
        this.image = image;
        // Create Dino Compare Method 1
        this.compareWeight = function(weight) {
            if (weight > this.weight) {
                return 'This dino weights less than you!';
            }  else if (weight < this.weight) {
                return 'This dino weights more than you!';
            }  else {
                return 'You weight the same as this dino!!';
            }
        };
        // Create Dino Compare Method 2
        this.compareHeight = function(height) {
            if (height > this.height) {
                return 'This dino is shorter than you!';
            }  else if (height < this.height) {
                return 'This dino is taller than you!';
            }  else {
                return 'You are the same height as this dino!!'
            }
        };
        // Create Dino Compare Method 3
        this.compareDiet = function(diet) {
            if (diet.toUpperCase() === this.diet.toUpperCase()) {
                return `You are both ${diet}s`;
            }  else {   
                return `You are a ${diet} and this dino is a ${capitalize(this.diet)}`;
            }
        };
    }

    // Create Dinosaur array of objects
    function buildDinosaurs () {
        let dinoArray = []    
        dinosaurs.Dinos.forEach((item) => {
            dinoArray.push(new Dinosaur(item.species,item.weight, item.height, item.diet, item.where, item.when, item.fact, item.image))
        })
        return dinoArray;
    }

    let dinosaurList = buildDinosaurs();

    // Create Human Object
    function Human(name, weight, height, diet, image) {
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.image = image;
    }

    let human = new Human(null, null, null, null, 'images/human.png')

    // Use IIFE to get human data from form    
    document.getElementById('btn').addEventListener('click', function() {
        (function (human) {
            human.name = document.getElementById('name').value;
            let feet = parseFloat(document.getElementById('feet').value);
            let inches = parseFloat(document.getElementById('inches').value);
            human.height = (feet * 12) + inches;
            human.weight = parseFloat(document.getElementById('weight').value);
            human.diet = document.getElementById('diet').value;
        })(human);
        
        // Generate Tiles for each Dino in Array
        dinosaurList.forEach((item, index) => {
            // Make sure human tile gets put in middle of grid
            if (index === 4) {
                let div = document.createElement('div');
                div.innerHTML = human.name + '<br />' + '<img src="'+human.image+'">' + human.diet;
                div.setAttribute('class', 'grid-item');
                gridElement.appendChild(div); 
            }
            let div = document.createElement('div');
            let factNumber = Math.floor(Math.random() * 4) + 1;
            // Make sure Pigeon displays given fact (no comparison facts for Pigeon)
            if (item.species === 'Pigeon') {
                factNumber = 1;
            }
            let displayFact;
            switch (factNumber) {
                case 1:
                    displayFact = item.fact;
                    break;
                case 2:
                    displayFact = item.compareWeight(human.weight);
                    break;
                case 3:
                    displayFact = item.compareHeight(human.height);
                    break;
                case 4:
                    displayFact = item.compareDiet(human.diet);
            }
            div.innerHTML = item.species + '.<br />' + '<img src="'+item.image+'">' + displayFact;
            div.setAttribute('class', 'grid-item');
            // Add tile to DOM
            gridElement.appendChild(div);
        })
        
        // Remove form from screen
        const formElement = document.getElementById('dino-compare')
        formElement.style.display = "none";

        // On button click, prepare and display infographic     
        gridElement.style.display = "flex";

    });



