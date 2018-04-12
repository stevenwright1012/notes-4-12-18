//CLOSURES????

function outer(){                   //outer function scope

    function inner(){               //innerfunction scope


    }
}

//Closure is reuturning inner function

function outer(){
    var num = 9
    return function inner(){
        num ++
        return num
    }
}

var innerfn = outer()
innerfn();   //10

///////////////////////////////////////

function outer(){
    var num = 0
    function inner(){
       return num ++
    }
    return inner;
}

// Simple closure example

function outer(start) {
    return function(num) {
      start += num;
      console.log(start)
    }
}
  
  
  
  
  
  // Order tracker. tracks ingredients in  each sandwich order
  function sandwichMaker(){
    var ingredients = [];
    
    return {
      addIngredient: function (ingredient){
        ingredients.push(ingredient)
        return ingredients.join(', ')
      },
      removeIngredient: function (ingredient){
        let index = ingredients.indexOf(ingredient)
        if (index !== -1){
        ingredients.splice(index, 1)
        return ingredients.join(', ')
        }
      }
    }
  }
  
  let mySandwich = sandwichMaker();
  
  console.log(mySandwich.addIngredient('turkey'))
  console.log(mySandwich.addIngredient('bacon'))
  console.log(mySandwich.removeIngredient('bacon'))
  console.log(mySandwich.addIngredient('avacado'))
  
  let yourSandwich = sandwichMaker();
  
  console.log(yourSandwich.addIngredient('Butts'))
  console.log(yourSandwich.addIngredient('Butts'))
  console.log(yourSandwich.addIngredient('Butts'))


  // Simple closure example

function outer(start) {
    return function(num) {
      start += num;
      console.log(start)
    }
  }
  
  
  
  
  
  // Order tracker. tracks ingredients in  each sandwich order
  function sandwichMaker(){
    var ingredients = [];
    
    return {
      addIngredient: function (ingredient){
        ingredients.push(ingredient)
        return ingredients.join(', ')
      },
      removeIngredient: function (ingredient){
        let index = ingredients.indexOf(ingredient)
        if (index !== -1){
        ingredients.splice(index, 1)
        return ingredients.join(', ')
        }
      }
    }
  }
  
  let mySandwich = sandwichMaker();
  
  console.log(mySandwich.addIngredient('turkey'))
  console.log(mySandwich.addIngredient('bacon'))
  console.log(mySandwich.removeIngredient('bacon'))
  console.log(mySandwich.addIngredient('avacado'))
  
  let yourSandwich = sandwichMaker();
  
  console.log(yourSandwich.addIngredient('Butts'))
  console.log(yourSandwich.addIngredient('Butts'))
  console.log(yourSandwich.addIngredient('Butts'))
// context

//Implicit Binding --- gold star

let steven = {
    hunger: 15,
    money: 50,
    eatsushi: function(){
        this.hunger-=5;
        this.money -= 15;
    }
}

//default -- useless thing you don't want

function noContext(){
    console.log(this);
}

//new -- only for constructor functions / classes


function Car(make, model, color){
    //this = {}
    //this.prototype = Component;
    
    this.make = make;
    this.model = model;
    this.color = color;
    this.mileage = 0;

    // this.drive = function (){
    //     this.mileage += 1;
    // }
    
    //return this
}

Car.prototype.drive =function (){
    this.mileage += 1;
}

class Truck{
    constructor(make, model, color){
        this.make = make;
        this.model = model;
        this.color = color;
        this.mileage = 0;
    }

    drive(){
        this.mileage += 1;
    }
}

let car = new Car('Chevy', 'Colbalt', 'Black');

console.log(car);
