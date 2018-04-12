// Description:

// Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you do, but exactly how many? Maybe it's time to write a program to figure it out.

// You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
// (If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

// Note: Of course you can't do half a fold. You should know what this means ;P

// Also, if somebody is giving you a non-positive distance, it's clearly bogus and you should yell at them by returning null/NULL.

//384,400 km to the moon

//https://www.codewars.com/kata/folding-your-way-to-the-moon

function fold(distance){
    if(distance<0){
      return null;
    }
    var meters = distance * 1000
    var folds = 0
    for(let i = .0001; i < meters; i *= 2){
      // console.log(i)
      folds++
    }
    return folds;
  }
  
  
  console.log(fold(384400))
  