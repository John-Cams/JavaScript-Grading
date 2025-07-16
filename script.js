const firstGrade = prompt("Please enter the first grade:");
const secondGrade = prompt("Please enter the second grade:");
const thirdGrade = prompt("Please enter the third grade:");
const fourthGrade = prompt("Please enter the fourth grade:");
const fifthrade = prompt("Please enter the fifth grade:");

const avgGrade = (parseInt(firstGrade) + parseInt(secondGrade) + parseInt(thirdGrade) + parseInt(fourthGrade) + parseInt(fifthrade))/5

switch (true) {
    case avgGrade >= 91: 
        console.log("The grade letter average is: A");
        break;
    case avgGrade >= 81: 
        console.log("The grade letter average is: B");
        break;
    case avgGrade >= 71: 
        console.log("The grade letter average is: C");
        break;
    case avgGrade > 61: 
        console.log("The grade letter average is: D");
        break;
    default: 
        console.log("The grade letter average is: F");
        break;
}