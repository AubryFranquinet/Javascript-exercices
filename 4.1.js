
let leng = window.prompt("Enter length of the rectangle"); //Add the length of the rectangle into the "leng" var.
let width = window.prompt("Enter width of rectangle");  //Same with the width


function calcSurface(leng , width) {   //Function to calculate the surface of the rectangle.
    let surface = leng * width;
    return surface;

}

console.log("The surface of the rectangle is : " + calcSurface(leng, width));
