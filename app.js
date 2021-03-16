    // Import 
    import {dinosaurs} from './dino.js';
    console.log(dinosaurs);
    console.log(dinosaurs.Dinos[0].species);
    const gridElement = document.getElementById('grid');
    gridElement.style.display = "none";

    
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
    }

    // Create Dino Objects
    let dinoArray = []    
    dinosaurs.Dinos.forEach((item) => {
        dinoArray.push(new Dinosaur(item.species,item.weight, item.height, item.diet, item.where, item.when, item.fact, item.image))
    })
    console.log(dinoArray)

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
        console.log(human.name);
        console.log(human.height);
        console.log(human.weight);
        console.log(human.diet);
        
        // Create Dino Compare Method 1
        // NOTE: Weight in JSON file is in lbs, height in inches. 

        
        // Create Dino Compare Method 2
        // NOTE: Weight in JSON file is in lbs, height in inches.

        
        // Create Dino Compare Method 3
        // NOTE: Weight in JSON file is in lbs, height in inches.


        // Generate Tiles for each Dino in Array
        const gridElement = document.getElementById('grid');
        dinoArray.forEach((item, index) => {
            if (index === 4) {
                let div = document.createElement('div');
                div.innerHTML = human.name + '.<br />' + '<img src="'+human.image+'">' + human.diet;
                div.setAttribute('class', 'grid-item');
                gridElement.appendChild(div); 
            }
            let div = document.createElement('div');
            div.innerHTML = item.species + '.<br />' + '<img src="'+item.image+'">' + item.fact;
            div.setAttribute('class', 'grid-item');
            gridElement.appendChild(div);
        })
        
        // Add tiles to DOM

        // Remove form from screen
        const formElement = document.getElementById('dino-compare')
        formElement.style.display = "none";

        // On button click, prepare and display infographic
        
        gridElement.style.display = "flex";

    });


