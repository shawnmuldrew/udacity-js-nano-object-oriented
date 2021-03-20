    // Import dinosaur data 
    import {dinosaurs} from './dino.js';

    // Hide grid
    const gridElement = document.getElementById('grid');
    const compareAgainButton = document.getElementById('compare-again');
    const formElement = document.getElementById('dino-compare')
        
    function displayForm() {
        gridElement.style.display = 'none';
        compareAgainButton.style.display = 'none';
        formElement.style.display = 'flex';
        document.getElementById('dino-compare').reset();
        gridElement.innerHTML = '';
    }
    
    function displayGrid() {
        // Remove form from screen
        formElement.style.display = 'none';
        // Display grid
        gridElement.style.display = 'flex';
        compareAgainButton.style.display = 'flex';
    }

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

    displayForm();

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
    function Human(name, weight, heightFeet,heightInches, diet, image) {
        this.name = name;
        this.weight = weight;
        this.heightFeet = heightFeet;
        this.heightInches = heightInches;
        this.diet = diet;
        this.image = image;
    }

    let human = new Human(null, null, null, null,null, 'images/human.png')

    // Use IIFE to get human data from form    
    document.getElementById('btn').addEventListener('click', function() {
        (function (human) {
            human.name = document.getElementById('name').value;
            human.heightFeet = document.getElementById('feet').value;
            human.heightInches = document.getElementById('inches').value;
            human.weight = document.getElementById('weight').value;
            human.diet = document.getElementById('diet').value;
        })(human);

        // Validate the form fields
        function validateFields(input, message) {
            if (input == '') {
                return message;
            }
            return '';
        }
        let alertNote = '';
        alertNote = alertNote + validateFields(human.name, 'Name must be entered \n');
        alertNote = alertNote + validateFields(human.heightFeet, 'Feet must be entered \n');
        alertNote = alertNote + validateFields(human.heightInches, 'Inches must be entered \n');
        alertNote = alertNote + validateFields(human.weight, 'Weight must be entered \n');
        if (alertNote !== '') {
            alert(alertNote);
            return;
        }
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
                    displayFact = item.compareWeight(parseInt(human.weight));
                    break;
                case 3:
                    displayFact = item.compareHeight(parseInt(human.heightFeet)*12 + parseInt(human.heightInches));
                    break;
                case 4:
                    displayFact = item.compareDiet(human.diet);
            }
            div.innerHTML = item.species + '.<br />' + '<img src="'+item.image+'">' + displayFact;
            div.setAttribute('class', 'grid-item');
            // Add tile to DOM
            gridElement.appendChild(div);
        })
        
        displayGrid();

         // Remove form from screen
        //  formElement.style.display = 'none';
        // // On button click, prepare and display infographic     
        // gridElement.style.display = 'flex';
        // compareAgainButton.style.display = 'flex';

    });

    document.getElementById('compare-again').addEventListener('click', function() {
        displayForm();
    })
