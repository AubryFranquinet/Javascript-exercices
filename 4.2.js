let min = window.log("Please enter a minimum number : ");
let max = window.log("Please enter a maximum number : ");

function rand10(min,max){
  return Math.round(Math.random() * (max-min+1)+min);
}

console.log(rand10(min,max));