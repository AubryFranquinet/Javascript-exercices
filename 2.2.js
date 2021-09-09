let min = window.prompt("Enter a min number");
let max = window.prompt("Enter a max number");
let current = window.prompt("Enter a current number");
if(current > min && max > current){
    console.log("Number " + current + " is indeed between " + min + " and " + max);
}
else{
    throw new Error("I'm sorry but this is simply not true");
}