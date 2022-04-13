// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching (drivers, element) {
    let match = drivers.filter(item => item.toLowerCase() === element.toLowerCase())
    return match;
}

function fuzzyMatch(drivers, element){
    let answer = drivers.filter((match) => match.substring(0,2) === element.substring(0,2))
    return answer; 
}

function matchName(drivers, element) { 
    let hometown = drivers.filter(item => item.name === element)
    return hometown;

}