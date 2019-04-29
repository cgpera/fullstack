// miembros: array de congresistas
// partido: array de partidos posibles

var encab = '<table id="house-data">' +
  '<thead>' + '<tr>' + '<th scope="col">Order</th>' +
  '<th scope="col" colspan="1">Name</th>' +
  '<th scope="col">Party</th>' +
  '<th scope="col">State</th>' +
  '<th scope="col">Seniority</th>' +
  '<th scope="col">Votes w/Party</th>' + '</tr>' + '</thead>' + '<tbody>'
var pie = '</tbody></table>'

var miembros = data.results[0].members

document.getElementById("house-data").innerHTML = encab

// visualizo todos los miembros en el html
miembros.map(function (array, index) { document.getElementById("house-data").innerHTML += `<tr><td> ${index + 1} </td> <td> <a href= ${array.url} target='_blank'> ${array.first_name} ${array.middle_name || ''} ${array.last_name} </a></td><td> ${array.party} </td><td> ${array.state} </td><td> ${array.seniority} </td><td> ${array.votes_with_party_pct} % </td></tr>` })

document.getElementById("state").addEventListener("change", filter)
document.getElementById("filtro").addEventListener("change", filter)

// HACE LA LISTA DE ESTADOS
var estados = Array.from(miembros).map(element => element.state)
estados.sort()
//var filtrados = estados.filter((element, index) => (index %2 !== 0)) // hacer función que devuelva únicos
let x = (names) => names.filter((v, i) => names.indexOf(v) === i)
var filtrados = x(estados)
filtrados.unshift("All")
document.getElementById("state").innerHTML = ""
filtrados.forEach((el) => document.getElementById("state").innerHTML += `<option value=${el}>${el}</option>`)
//-------------------

function filter() {
  var arrayaux = []
  var arrayst = []
  var arraytemp = []
  var checkedBoxes = document.querySelectorAll('input[name=party]:checked');
  var partido = Array.from(checkedBoxes).map(element => element.value)
  var selectedState = document.querySelector("#state").value
  document.getElementById("house-data").innerHTML = ""
  document.getElementById("house-data").innerHTML = encab

  for (i = 0; i < partido.length; i++) {
    arrayaux = miembros.filter(element => element.party === partido[i])
    arraytemp = arraytemp.concat(arrayaux)
    arraytemp.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.last_name < b.last_name) {
        return -1;
      }
      return 0;
    })
  }
  if (selectedState == "All") {
    arrayst = arrayst.concat(arraytemp)
//    console.log(arraytemp, selectedState)
  }
  else {
    arrayst = arraytemp.filter(element => element.state === selectedState)
  }
  arrayst.forEach(function (array, index) { document.getElementById("house-data").innerHTML += `<tr><td> ${index + 1} </td> <td> <a href= ${array.url} target='_blank'> ${array.first_name} ${array.middle_name || ''} ${array.last_name} </a></td><td> ${array.party} </td><td> ${array.state} </td><td> ${array.seniority} </td><td> ${array.votes_with_party_pct} % </td></tr>` })
  //render(arrayst, "house-data") falta acomodar las filas
}

function render(array, filtroHTML) {
  array.forEach((el, index) => {
    var p = document.createElement("p")
    var temp = []
    // p.innerHTML = `<option value=${el}>${el}</option>`
    p.innerHTML = `<tr><td> ${index + 1} </td> <td> <a href= ${el.url} target='_blank'> ${el.first_name} ${el.middle_name || ''} ${el.last_name} </a></td><td> ${el.party} </td><td> ${el.state} </td><td> ${el.seniority} </td><td> ${el.votes_with_party_pct} % </td></tr>`
    //    p.innerHTML = `${index + 1} <a href= ${el.url} target='_blank'> ${el.first_name} ${el.middle_name || ''} ${el.last_name} </a> ${el.party} ${el.state} ${el.seniority} ${el.votes_with_party_pct} %`
    //  if (array.state == filtrados) {
    var s = document.getElementById(filtroHTML).appendChild(p)
    temp += s
    console.log("s", s)
    console.log("temp", temp)
    //  }
    //    return temp
  })
}