
let isOver18;
let hasCriminalBlacklist ;

let isAllow ;

let age = 18; 
hasCriminalBlacklist = false;

isOver18 = age > 18

isAllow = isOver18 && !hasCriminalBlacklist;

console.log(isAllow);