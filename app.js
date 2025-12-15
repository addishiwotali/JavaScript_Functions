console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
 function printOdds(count){
    for(let i = 1; i<=count; i++){
        if(i % 2!=0){
            console.log (i);
        }
    }
 }
printOdds(10)
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName,age){
    let aboveSixteen = `congrats ${userName} , you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    if(age < 16){
        console.log (belowSixteen);

    }
    if(age >= 16){
        console.log (aboveSixteen);
    }
   

}
   checkAge (`zion` , 3)
   checkAge (`mercy` , 16)

   // Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function quadrant( x,y){
    if(x==0 && y !=0){
        console.log(`is on the y axis`)
    }
   if(y==0 && x!=0){
        console.log(`is on the x axis`)
    }
    if(x >0 && y >0){
        console.log(`quadrant 1`)

    }
    if(x <0 && y >0){
        console.log(`quadrant 2`)
    }
    if(x < 0 && y < 0){
        console.log(`quadrant 3`)
    }
    if(x > 0 && y < 0){
        console.log(`quadrant 4`)
    }
    if(x==0 && y==0){
        console.log(`this is the origin`)
    }
}   
quadrant(0,3);
quadrant(3,0);
quadrant(4,4);
quadrant(-4,4);
quadrant(-2,-2);
quadrant(3,-3);
quadrant(0,0);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangle(side1,side2,side3){
    let numbers = [side1,side2,side3];
    let ordered = numbers.sort();

if(ordered[0] + ordered[1] > ordered[2]){
    if(side1 === side2 && side1 != side3 || side2 ===side3 && side2 != side1 || side1===side3 && side1 != side2){

    console.log(`isosceles triangle`);
}
    if(side1 === side2 && side2 === side3){

    console.log(`equalitral triangle`)
}
    if(side1 != side2 && side1 != side3 && side2 != side3){

    console.log(`scalene`);
}
}
else{
    console.log(`invalid triangle`);
}


// if(side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1){

//     console.log(`invalid triangle`);
// }
// if(side1 === side2 && side1 != side3 || side2 ===side3 && side2 != side1 || side1===side3 && side1 != side2){

//     console.log(`isosceles triangle`)
// }
// if(side1 === side2 && side2 === side3){

//     console.log(`equalitral triangle`)
// }
// if(side1 <=0 ||side2 <=0 || side3 <=0){

//     console.log(`invalid triangle`)
// }
// else {
//     console.log(`scalene`);
// }


}
triangle(1,1,4)
triangle(2,3,4)
triangle(4,4,4)
triangle(2,2,3)

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function getData(planLimit , day , usage ){
    let maxPlan = planLimit / 30;
    let userAverage = usage / day
    let maxPlanDay = maxPlan * day 
    let difference = userAverage - maxPlan
    let left = planLimit - usage

    if(maxPlanDay >= usage){
        console.log(`you are currently averaging ${userAverage} of data a day , the max ammount for your plan a day is ${maxPlan}`)
    }
    else{
        console.log(`You are currently averaging ${userAverage} of data a day , the max ammount for your plan a day is ${maxPlan}`)
        console.log(`This is ${difference} more per day than the max`)
        console.log(`You have ${left} to use for  the month , consider upgrading.` )
    }

}

getData(100,15,50)
getData(100,15,20)
getData(100,15,70)