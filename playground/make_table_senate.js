var encab = '<table id="senate-data">' +
  '<thead>' + '<tr>' + '<th scope="col">Order</th>' +
  '<th scope="col" colspan="1">Name</th>' +
  '<th scope="col">Party</th>' +
  '<th scope="col">State</th>' +
  '<th scope="col">Seniority</th>' +
  '<th scope="col">Votes w/Party</th>' + '</tr>' + '</thead>'

var pie = '</tbody></table>'

//var cuerpo_tabla = data.results[0].members.map(function (array, index) {return ('<tr><td>' + (index+1) + '</td> ' + '<td><a href="' + array.url + '" target="_blank">' + array.first_name + ' ' + (array.middle_name || '') + ' ' + array.last_name + '</a></td><td>' + array.party + '</td><td>' + array.state + '</td><td>' + array.seniority + '</td><td>' + array.votes_with_party_pct + ' % </td></tr>')})
//var cuerpo_tabla = data.results[0].members.map(function (array, index) { return('<tr><td>' + (index + 1) + '</td> ' + '<td>' + `<a href= ${array.url} target='_blank'>` + array.first_name + ' ' + (array.middle_name || '') + ' ' + array.last_name + '</a></td><td>' + array.party + '</td><td>' + array.state + '</td><td>' + array.seniority + '</td><td>' + array.votes_with_party_pct + ' % </td></tr>') })
//document.write(encab+cuerpo_tabla)
document.getElementById("senate-data").innerHTML = encab
document.getElementById("senate-data").innerHTML += '<tbody>'

// meto en el html del id senate-data las filas de cada senador
//, el reemplazo de variables con ${var} es mérito del profesor
// el sig método es con reemplazo
//data.results[0].members.map(function (array, index) { document.getElementById("senate-data").innerHTML += ('<tr><td>' + (index + 1) + '</td> ' + '<td>' + `<a href= ${array.url} target='_blank'>` + array.first_name + ' ' + (array.middle_name || '') + ' ' + array.last_name + '</a></td><td>' + array.party + '</td><td>' + array.state + '</td><td>' + array.seniority + '</td><td>' + array.votes_with_party_pct + ' % </td></tr>') })

//data.results[0].members.map(function (array, index) { document.getElementById("senate-data").innerHTML += (`<tr><td>  (${index} + 1) </td><td> <a href= ${array.url} target='_blank'> ${array.first_name}  (${array.middle_name} || '')  ${array.last_name} `)}
// + '</a></td><td>' + ${array.party} + '</td><td>' + ${array.state} + '</td><td>' + ${array.seniority} + '</td><td>' + ${array.votes_with_party_pct} + ' % </td></tr>')`)}

// finalmente haciendo reemplazos de strings:

var miembros = data.results[0].members

var checkedBoxes = document.querySelectorAll('input[name=party]:checked');
var partido = Array.from(checkedBoxes).map(element => element.value)
console.log(partido)
document.getElementById("filtro").addEventListener("change", filtByParty)
//document.getElementById("filtro").onchange = filtByParty()
/*function filtByParty() {
  for (var i = 0; i < partido.length; i++) {
    //filtrar array por partido
    var result = miembros.filter((array) => array.party == partido[i])
    //arrayresultado = arrayresultado.concat(arrayfiltrado)
  }
*/

/*function filtByParty() {
  var temparray = []
  for (var i = 0; i < miembros.length; i++) {
    for (var j = 0; j < partido.length; j++) {
      console.log(miembros[i].party, partido[j])
      if (miembros[i].party == partido[j]) {
        temparray.push(miembros[i])
        break;
        console.log(temparray)
      }
      else {
        console.log(temparray)
        continue
      }
//      return temparray
      //})
    }
  }
  console.log(temparray)
}
*/

function filtByParty() {
  var temparray = []
  for (var i = 0; i < partido.length; i++) {
    temparray.push(miembros.filter(miembro => { miembro.party == partido[i]; console.log(miembro.party) }))
  }
  console.log(temparray)
}

data.results[0].members.map(function (array, index) { document.getElementById("senate-data").innerHTML += `<tr><td> ${index + 1} </td> <td> <a href= ${array.url} target='_blank'> ${array.first_name} ${array.middle_name || ''} ${array.last_name} </a></td><td> ${array.party} </td><td> ${array.state} </td><td> ${array.seniority} </td><td> ${array.votes_with_party_pct} % </td></tr>` })
//  data.results[0].members.map(function (array, index) { document.getElementById("senate-data").innerHTML += `<tr><td> ${index + 1} </td> <td> <a href= ${array.url} target='_blank'> ${array.first_name} ${array.middle_name || ''} ${array.last_name} </a></td><td> ${array.party} </td><td> ${array.state} </td><td> ${array.seniority} </td><td> ${array.votes_with_party_pct} % </td></tr>` })
document.getElementById("senate-data").innerHTML += pie
