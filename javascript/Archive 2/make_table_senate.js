var encab = '<table id="senate-data">' +
  '<thead>' + '<tr>' + '<th scope="col">Order</th>' +
  '<th scope="col" colspan="1">Name</th>' +
  '<th scope="col">Party</th>' +
  '<th scope="col">State</th>' +
  '<th scope="col">Seniority</th>' +
  '<th scope="col">Votes w/Party</th>' + '</tr>' + '</thead>'

var pie = '</tbody></table>'

document.getElementById("senate-data").innerHTML = encab
document.getElementById("senate-data").innerHTML += '<tbody>'

var miembros = data.results[0].members
// miembros: array de senadores
// partido: array de partidos posibles

// visualizo todos los miembros en el html

miembros.map(function (array, index) { document.getElementById("senate-data").innerHTML += `<tr><td> ${index + 1} </td> <td> <a href= ${array.url} target='_blank'> ${array.first_name} ${array.middle_name || ''} ${array.last_name} </a></td><td> ${array.party} </td><td> ${array.state} </td><td> ${array.seniority} </td><td> ${array.votes_with_party_pct} % </td></tr>` })

//adiciono un evento change o click a filtro, por partido
document.getElementById("filtro").addEventListener("change", filtByParty)

// selecciono un array de los estados a los que pertenecen los senadores
//var sen_state = unicos(miembros.state)
/*var estados_presentes = miembros.array.forEach(element => {
  return element.state  
})*/

// obtener los estados a los que pertenecen los senadores: miembros.state
// miembros: [{}, {}, ...]


var estados = Array.from(miembros).map(element => element.state)
estados.sort()
var filtrados = estados.filter((element, index) => (index %2 !== 0))
filtrados.unshift("All")
console.log(filtrados)
document.getElementById("state").addEventListener("change", filtByState)


function filtByParty() {
  //obtengo el elemento cambiado en el evento change
  var checkedBoxes = document.querySelectorAll('input[name=party]:checked');
  var partido = Array.from(checkedBoxes).map(element => element.value)
  var arrayaux = []
  var arraytemp = []
  document.getElementById("senate-data").innerHTML = ""
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
  document.getElementById("senate-data").innerHTML = encab
  document.getElementById("senate-data").innerHTML += '<tbody>'
  // acá poner el dibujar el array
  //miembros.map(function (array, index) { document.getElementById("senate-data").innerHTML += `<tr><td> ${index + 1} </td> <td> <a href= ${array.url} target='_blank'> ${array.first_name} ${array.middle_name || ''} ${array.last_name} </a></td><td> ${array.party} </td><td> ${array.state} </td><td> ${array.seniority} </td><td> ${array.votes_with_party_pct} % </td></tr>` })
  arraytemp.map(function (array, index) { document.getElementById("senate-data").innerHTML += `<tr><td> ${index + 1} </td> <td> <a href= ${array.url} target='_blank'> ${array.first_name} ${array.middle_name || ''} ${array.last_name} </a></td><td> ${array.party} </td><td> ${array.state} </td><td> ${array.seniority} </td><td> ${array.votes_with_party_pct} % </td></tr>` })
}
//miembros.map(function (array, index) { document.getElementById("senate-data").innerHTML += `<tr><td> ${index + 1} </td> <td> <a href= ${array.url} target='_blank'> ${array.first_name} ${array.middle_name || ''} ${array.last_name} </a></td><td> ${array.party} </td><td> ${array.state} </td><td> ${array.seniority} </td><td> ${array.votes_with_party_pct} % </td></tr>` })
