var obj_datos = {
  "party_name": "",
  "total_members": 0,
  "avg_votes": 0,
  "prom": 0,
  "members": []
}
var obj_estad = {
"less_loyalty": [],
"more_loyalty": [],
"least_engaged": [],
"most_engaged": []
}
// obtener lista de partidos y miembros de c/u
var miembros = data.results[0].members
var arrayaux = miembros.map(element => element.party)
let uniques = (names) => names.filter((el, idx) => names.indexOf(el) === idx)
var party = uniques(arrayaux) // cantidad e inicial de partidos representados
var mem_party = []

for (i = 0; i < party.length; i++) {
  mem_party.push(miembros.filter(el => el.party == party[i]))
}

//party.forEach((el) => mem_party.push(miembros.filter(el => el.party == party)))
//tabla estadísticas
document.getElementById("datahtml").innerHTML = '<thead class="table"> <tr><th scope="col">Number</th> <th scope="col">Party</th>' + 
'<th scope="col">Prom/Party</th></tr></thead><tbody>'

for (i = 0; i < mem_party.length; i++) {
  obj_datos.party_name = mem_party[i][0].party
  let summ = 0
  for (j = 0; j < mem_party[i].length; j++) {
    obj_datos.members[j] = mem_party[i][j]
    summ += mem_party[i][j].votes_with_party_pct
  }
  obj_datos.total_members = mem_party[i].length
  obj_datos.prom = summ /mem_party[i].length
  document.getElementById("datahtml").innerHTML += "<tr> <td>" + obj_datos.total_members + "</td><td>" + obj_datos.party_name + "</td><td>" + obj_datos.prom.toFixed(4) + "</td></tr>"
}

document.getElementById("datahtml").innerHTML += '</tbody></table>'
