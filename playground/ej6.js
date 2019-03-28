// ej 6

var arreglo = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var result = []
var unicos = []

var i = 0

//arreglo.sort(function(a, b) {return (a - b)}) ordenamiento numérico
arreglo.sort()    // ordenamiento alfabético
console.log(arreglo);

console.log(arreglo.uniq);
  
console.log(arreglo)
console.log(unicos)
/*array.map(function(x, j) {
  console.log("j", j)
  console.log("x", x)
  console.log("result", result)
  if(x[j] === x[j+1]) 
  {
    result.push(x)
  }
})*/

//console.log(arreglo)
/*
function dup(value, index, array) {
  if(value === array.indexOf()) {
    return array[index]
  }
}

result = arreglo.filter(dup)
console.log(result)*/