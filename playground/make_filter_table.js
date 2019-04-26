/*var encab = '<table id="senate-data">' +
  '<thead>' + '<tr>' + '<th scope="col">Order</th>' +
  '<th scope="col" colspan="1">Name</th>' +
  '<th scope="col">Party</th>' +
  '<th scope="col">State</th>' +
  '<th scope="col">Seniority</th>' +
  '<th scope="col">Votes w/Party</th>' + '</tr>' + '</thead>'

var pie = '</tbody></table>'

document.getElementById("senate-data").innerHTML = encab
document.getElementById("senate-data").innerHTML += '<tbody>'
*/

// original
//data.results[0].members.map(function (array, index) { document.getElementById("senate-data").innerHTML += `<tr><td> ${index + 1} </td> <td> <a href= ${array.url} target='_blank'> ${array.first_name} ${array.middle_name || ''} ${array.last_name} </a></td><td> ${array.party} </td><td> ${array.state} </td><td> ${array.seniority} </td><td> ${array.votes_with_party_pct} % </td></tr>`})
//document.getElementById("senate-data").innerHTML += pie



// nuevo
//document.getElementById("senate-data").innerHTML += data.results[0].members.map(show_array (arreglo, indice))
//require("./data.js")
var moduleData=require("./pro-congress-113-senate") //conseguir la variable
var data=moduleData.data

console.log(data.results[0].members)
rr= data.results[0].members

var filtered_array=rr.filter(make_filtered_row(fila_tabla,))

function make_filtered_row(fila, value, index, array) {

    fila=array.last_name
  return fila
}

/*function show_array(array) { */
  //return array.map(`<tr><td> ${index + 1} </td> <td> <a href= ${array.url} target='_blank'> ${array.first_name} ${array.middle_name || ''} ${array.last_name} </a>
  //</td><td> ${array.party} </td><td> ${array.state} </td><td> ${array.seniority} </td><td> ${array.votes_with_party_pct} % </td></tr>`)
  /*return array.map(`<tr><td> 1 </td> <td> <a href= ${array.url}> ${array.first_name} ${array.middle_name || ''} ${array.last_name} </a>
  </td><td> ${array.party} </td><td> ${array.state} </td><td> ${array.seniority} </td><td> ${array.votes_with_party_pct} % </td></tr>`)
}*/

//var nuevo_arreglo = show_array(data.results[0].members)
