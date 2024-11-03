let score = "25"
let score1 = "25abc"


console.log(typeof score1)
let valueInNumber = Number(score1)
console.log(typeof(valueInNumber))//conversion to number
console.log(valueInNumber);//NaN(Not a Number) js converts it even if it is not in the right formate
//when u try to convert to number
//"33"=> 33
// "33abc"=> Nan
// true => 1 , false=>0
let isLoggedIn = "sam"
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)


//1=> true ,0=>false
//"" =>flase
//"sam"=> true