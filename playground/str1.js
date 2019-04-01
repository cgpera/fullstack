//ej 1
var number = 32443

var numero = parseInt(number.toString().split("").reverse().join(""))
//alert(numero)
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
