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
for(var value of checkedBoxes.values()) { 
  console.log(value, value.map(function (element) { return element.value }));
}
console.log("lista del nodo checkedboxes" + checkedBoxes.values())
//var arrayNode = Array.from(checkedBoxes)
//console.log("arrayNode" + arrayNode + typeof(arrayNode))
//var partido = arrayNode.map(function (element) { return element.value })
//console.log("partido", partido, partido.join(""), typeof(partido))

document.getElementById("filtro").addEventListener("change", filtByParty())


var miembrosFiltrados = miembros.filter(function (valor) {
  arrayNode.indexOf(valor.party) != -1
//  if (array.party == partido[0]) {
//    console.log(array.last_name, array.party, array.length);
//    return array
//  }
})
console.log(miembrosFiltrados)

var arrayresultado = []
function filtByParty() {
  for (var i = 0; i < partido.length; i++) {
    //filtrar array por partido
    var arrayfiltrado = miembros.filter((array) => array.party == partido[i])
//    console.log(partido[i])
    //arrayresultado = arrayresultado.concat(arrayfiltrado)
  }

  console.log(arrayfiltrado)
  return arrayresultado
  //  console.log(checkedBoxes.values)
}
//console.log(checkedBoxes[0].value)

data.results[0].members.map(function (array, index) { document.getElementById("senate-data").innerHTML += `<tr><td> ${index + 1} </td> <td> <a href= ${array.url} target='_blank'> ${array.first_name} ${array.middle_name || ''} ${array.last_name} </a></td><td> ${array.party} </td><td> ${array.state} </td><td> ${array.seniority} </td><td> ${array.votes_with_party_pct} % </td></tr>` })
document.getElementById("senate-data").innerHTML += pie


