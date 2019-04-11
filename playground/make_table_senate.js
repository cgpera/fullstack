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
data.results[0].members.map(function (array, index) { document.getElementById("senate-data").innerHTML += `<tr><td> ${index + 1} </td> <td> <a href= ${array.url} target='_blank'> ${array.first_name} ${array.middle_name || ''} ${array.last_name} </a></td><td> ${array.party} </td><td> ${array.state} </td><td> ${array.seniority} </td><td> ${array.votes_with_party_pct} % </td></tr>`})
document.getElementById("senate-data").innerHTML += pie