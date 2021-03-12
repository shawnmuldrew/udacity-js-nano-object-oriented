    // Import 
    import {dinosaurs} from './dino.js';
    console.log(dinosaurs);
    console.log(dinosaurs.Dinos[0].species);
    
    // Create Dino Constructor
    function Dinosaur(species, weight, height, diet, where, when, fact) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
    }

    // Create Dino Objects
    let dinoArray = []    
    dinosaurs.Dinos.forEach((item) => {
        dinoArray.push(new Dinosaur(item.species,item.weight, item.height, item.diet, item.where, item.when, item.fact))
    })
    console.log(dinoArray)

    // Create Human Object

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
