// miembros: array de senadores
// partido: array de partidos posibles

//var pie = '</tbody></table>'
/* filtro de partidos y estados  // luego sacar!!
document.getElementById("state").addEventListener("change", filter)
document.getElementById("filtro").addEventListener("change", filter)
function filter() {
  var arrayaux = []
  var arrayst = []
  var arraytemp = []
  var checkedBoxes = document.querySelectorAll('input[name=party]:checked');
  var partido = Array.from(checkedBoxes).map(element => element.value)
  var selectedState = document.querySelector("#state").value
  document.getElementById("senate-data").innerHTML = ""
  document.getElementById("senate-data").innerHTML = encab

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
  }
  else {
    arrayst = arraytemp.filter(element => element.state === selectedState)
  }
  arrayst.forEach(function (array, index) { document.getElementById("senate-data").innerHTML += `<tr><td> ${index + 1} </td> <td> <a href= ${array.url} target='_blank'> ${array.first_name} ${array.middle_name || ''} ${array.last_name} </a></td><td> ${array.party} </td><td> ${array.state} </td><td> ${array.seniority} </td><td> ${array.votes_with_party_pct} % </td></tr>` })
}
// hasta acá */

const url = 'https://api.propublica.org/congress/v1/113/senate/members.json'
const init_str = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'L6x2Gbl9kawrKwFw4kQp75kCXLgCQokZEtDC1zFN',
  },
  mode: 'cors',
}

//var checkedBoxes = document.querySelectorAll('input[name=party]:checked');
//var partido = Array.from(checkedBoxes).map(element => element.value)
// filtrar miembros x partido, de acuerdo al checked box

//var eventFilterByParty = document.getElementById("filtro").addEventListener("change", filterByParty)

//var selectedState = document.querySelector("#state").value

var app = new Vue({
  el: '#app',
  data: {
    miembros: [],
    estados: [],
    partidos: [],
    listState: ''
  },
  created() {
    fetch(url, init_str)
      .then(response => response.json())
      .then(json => this.miembros = json.results[0].members)
  },
  computed: {
    listaEstados: function () {
      // devuelve el listado de estados único para colocar en el select
      return estados = this.miembros.map(element => element.state).sort().filter((item, index, array) => array.indexOf(item) === index)
    },
    filterByParty: function () {
      // filtro x partido
    },
    filterByState: function () { },
  }
})

function suma(total, ele) {
  return total + ele.votes_with_party_pct
}

function ordenarMissedPct(a, b) {
  return ((a.missed_votes_pct > b.missed_votes_pct) ? 1 : -1)
}


/*var miembros = data.results[0].members

miembros.map(function (array, index) { document.getElementById("senate-data").innerHTML += `<tr><td> ${index + 1} </td> <td> <a href= ${array.url} target='_blank'> ${array.first_name} ${array.middle_name || ''} ${array.last_name} </a></td><td> ${array.party} </td><td> ${array.state} </td><td> ${array.seniority} </td><td> ${array.votes_with_party_pct} % </td></tr>` })

document.getElementById("state").addEventListener("change", filter)
document.getElementById("filtro").addEventListener("change", filter)

// HACE LA LISTA DE ESTADOS
var estados = Array.from(miembros).map(element => element.state)
//var filtrados = estados.filter((element, index) => (index %2 !== 0)) // hacer función que devuelva únicos
let x = (names) => names.filter((v, i) => names.indexOf(v) === i)
estados.sort()
var filtrados = x(estados)
filtrados.unshift("All")
document.getElementById("state").innerHTML = ""
filtrados.forEach((el) => document.getElementById("state").innerHTML += `<option value=${el}>${el}</option>`)
//-------------------
*/
/*function filter() {
  var arrayaux = []
  var arrayst = []
  var arraytemp = []
  var checkedBoxes = document.querySelectorAll('input[name=party]:checked');
  var partido = Array.from(checkedBoxes).map(element => element.value)
  var selectedState = document.querySelector("#state").value
  document.getElementById("senate-data").innerHTML = ""
  document.getElementById("senate-data").innerHTML = encab

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
  arrayst.forEach(function (array, index) { document.getElementById("senate-data").innerHTML += `<tr><td> ${index + 1} </td> <td> <a href= ${array.url} target='_blank'> ${array.first_name} ${array.middle_name || ''} ${array.last_name} </a></td><td> ${array.party} </td><td> ${array.state} </td><td> ${array.seniority} </td><td> ${array.votes_with_party_pct} % </td></tr>` })
  //render(arrayst, "senate-data") //falta acomodar las filas
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
}*/