// Actividad Coding Dojo Algoritmos 2
// Actividad Coding Dojo Algoritmos 2
// Actividad Coding Dojo Algoritmos 2

function multiply(x,y) {
    console.log(x);
    console.log(y);
}
b = multiply(2,3);
console.log(b);
// output = [2,3,undefined]


function multiply(x,y) {
    return x*y;
}
b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));
// output = [6,10]


var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++) {
    i = i + 3; 
    console.log(i);
}
// output = [3,7]


var x=15;
console.log(x);
function awesome(){
    var x=10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);
// output = [15,15,10,15]


for(var i=0; i<15; i+=2) {
    console.log(i);
}
// output = [0,2,4,6,8,10,12,14]


for(var i=0; i<3; i++) {
    for(var j=0; j<2; j++) {
        console.log(i*j);
    }
}
// output = [0,0,0,1,0,2]


function looping(x,y) {
    for(var i=0; i<x; i++) { // x = 3
    for(var j=0; j<x; j++) { // x = 3
        console.log(i*j);
            }
        }
    }
z = looping(3,3);
console.log(z);
// output = [0,0,0,0,1,2,0,2,4,undefined]


function looping(x,y) {
    for(var i=0; i<3; i++) { // x = 3
        for(var j=0; j<5; j++) { // y = 5
            console.log(i*j);
        }
    }
    return x*y;
}
z = looping(3,5);
console.log(z);
// output = [0,0,0,0,0,0,1,2,3,4,0,2,4,6,8,15]

//PARTE 2
//PARTE 2
//PARTE 2

function printUpTo(x) {
    if (x < 0){
        console.log("número negativo");
        return false ;
    } else {
        for (var i = 1; i <= x; i++){
            console.log(i)
        }
    }
}
  printUpTo(1000); // debería imprimir todos los enteros de 1 to 1000
  y = printUpTo(-10); // debería imprimir false
  console.log(y); // debería imprimir false


function printSum(x) {
    var sum = 0;
    for(var i=0; i<256; i++){
        sum = sum + i
        console.log(i)
        console.log(sum)
    }
    return sum
}
  y = printSum(255) // debería imprimir todos los enteros de 0 a 255 y que cada entero imprima la suma parcial.
  console.log(y) // // debería imprimir 32640


function printSumArray(x) {
    var sum = 0;
    for(var i=0; i<x.length; i++) {
        sum = sum + x[i]
    }
    return sum;
}
  console.log(printSumArray([1,2,3,4])); // debería imprimir 6


/// BONUS
/// BONUS
/// BONUS

//Crea una función que entregue el elemento más grande (largest element) en un array. Por ejemplo largestElement([1,30,5,7]) debiera dar como resultado 30.

function largestElement(x){
    var max = 0;
    for (var i = 0; i < x.length; i++)
        if(x[i] > max){
            max = x[i]
        }
    return max;
}
console.log(largestElement([1,30,5,7]))