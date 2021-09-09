let arr = [1, 2, 3, 4, 5];
let total = 0;
let length = arr.length;

for(let elem of arr){
    total += elem;
}
console.log(total/length)