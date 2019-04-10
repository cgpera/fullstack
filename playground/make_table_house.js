var encab = '<table id="house-data">' +
  '<thead>' + '<tr>' + '<th scope="col">Orden</th>' +
  '<th scope="col" colspan="1">Name</th>' +
  '<th scope="col">Party</th>' +
  '<th scope="col">State</th>' +
  '<th scope="col">Seniority</th>' +
  '<th scope="col">Votes w/Party</th>' + '</tr>' + '</thead>'

var pie = '</tbody></table>'

document.getElementById("house-data").innerHTML = encab
document.getElementById("house-data").innerHTML += '<tbody>'
document.getElementById("house-data").innerHTML += pie

data.results[0].members.map(function (array, index) { document.getElementById("house-data").innerHTML += `<tr><td> ${index + 1} </td> <td> <a href= ${array.url} target='_blank'> ${array.first_name} ${array.middle_name || ''} ${array.last_name} </a></td><td> ${array.party} </td><td> ${array.state} </td><td> ${array.seniority} </td><td> ${array.votes_with_party_pct} % </td></tr>`})
