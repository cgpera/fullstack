console.log("Iniciando Javascript...")
var myName = 'Claudio'
console.log("Mi nombre es " + myName)
var age = 57;
console.log("Mi edad es ", age)
var ignasiAge = 32, ageDiff
ageDiff = age - ignasiAge
console.log("La diferencia de edad entre ignasi y yo es: ", ageDiff)

if(age > 21) {
  console.log("You are older than 21")
}
else if (age < 21) {
  console.log("You are not older than 21")
}
else {
  console.log("You are 21 years old")
}

if(ageDiff > 0) {
  console.log("You are older than ignasi")
}
else if (ageDiff < 0) {
  console.log("You are younger than ignasi")
}
else {
  console.log("You have the same age than ignasi")
}
// arrays
// ej 1
var clase = ["Agus", "Andrea Briceño", "Claudio Pera", "Camila G", "David Cosio", "Diego Weinmann", "Gaston Gonzalez",
"Valeria Fernandez"];
claseord = clase.sort();
console.log(claseord)
// ej 2
var edades = [12, 45, 32, 27, 32, 46, 57, 33];

for(var i = 0; i < edades.length; i++) {
  console.log(edades[i])
}
console.log(i)
console.log("---------------------")

var i = 0
while(i < edades.length) {
  console.log(edades[i])
  if(edades[i]%2 == 0) {
    console.log(edades[i])
  }
  i++
}

// ej 3

var f = (array) => {
  array.sort()
  return array[0]
}

console.log("\n\nEdad mínima es: ", f(edades))


// ej 4

var fmax = (array) => {
  array.sort(function(a, b) {return(b - a)})
  return array[0]
}

console.log("\n\nEdad máxima es: ", fmax(edades))

// o bien 

var f2max = (array) => {
  array.sort()
  return array[array.length - 1]
}
// o array.reverse()

console.log("\n\nEdad máxima es: ", f2max(edades))

// ej 5

function f5(array, index) {
  if(index >= array.length) {
    return -1
  }
  else {
    return array[index]
  }
}

console.log("\n\n", f5(clase, 9))


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


// ej 7

var myColor = ["Red", "Green", "White", "Black"];
var cadena = myColor.join('\", \"')

console.log('\"'+ cadena + '\"')

// str

//ej 1
var number = 32443

var numero = parseInt(number.toString().split("").reverse().join(""))
console.log(numero, typeof (numero))

//ej 2
var cadena = "webmaster"
var temp = cadena.split("").sort().join("")
var temp2 = String(cadena.split("").sort())
var temp3 = cadena.split("").sort().toString()
console.log(temp)
console.log(temp2)
console.log(temp3)

//ej 3
var cont = []
var str = "How are you doing today?"
var res = str.split(" ")
for (var i = 0; i < res.length; i++) {
  var c = res[i][0].toUpperCase()
  var d = res[i].substr(1, res[i].length)
  var string = c + d
  cont.push(string)
}
var h = cont.join(" ")
console.log(h)

//ej 4

var frase = "How are you doing today in the jjjjjjjjjjjjj?"

function palabra_mas_larga(frase) {
  var max = 0
  var longitud = 0
  var arreglo = frase.split(" ")
  for(var i = 0; i < arreglo.length; i++) {
    longitud = arreglo[i].length
    if(longitud > max) {
      max = longitud
      palabra = arreglo[i]
    }
  }
  return palabra
}
console.log(palabra_mas_larga(frase))

 