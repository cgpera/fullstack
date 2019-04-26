// ej 6

/*var arreglo = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];*/
var arreglo = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,100,28,33,23,12,99,100];

function duplicados(array) {
  var lst= []
  array.sort()
  for(var i = 0; i < array.length; i++) {
    if(array[i] === array[i+1]) {
      lst.push(array[i+1])
    }
  }
  return lst
}

function unicos(array) {
  var lst= []
  console.log(lst)
  array.sort()
  for(var i = 0; i < array.length; i++) {
    if(array[i] !== array[i+1]) {
      if((i+1) !== array.length) { // último elemento, si no crea un elemento nulo
        lst.push(array[i+1])
      }
      console.log(lst)
    }
    else {
      lst.push(array[i])
      console.log(lst)
    }
  }
  return lst
}

var dup = duplicados(arreglo)
var set_array = unicos(dup)
console.log("arreglo original", arreglo)
console.log("array de elementos duplicados", dup)
console.log("array de elementos duplicados únicos", set_array)