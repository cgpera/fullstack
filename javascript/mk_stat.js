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

/*
var mem_votes_w_party = miembros.map(el => [el.votes_with_party_pct, el.first_name, el.last_name, el.total_votes, el.party]).sort()

// obtener array de los que menos votan con su partido:
var less_vote_w_party = []
const indice = Math.round(mem_votes_w_party.length/10)

var array_less = mem_votes_w_party.slice(0, Math.round(mem_votes_w_party.length/10))
valor_inf = array_less[indice-1][0] //ultimo elemento, para saber si tengo que seguir incorporando elemento con el mismo valor
while(mem_votes_w_party[indice][0] === valor_inf && indice < mem_votes_w_party.length) {
  array_less.push(mem_votes_w_party[indice])
  indice++
}

// dibujo tabla de los que menos votan con el partido
/*obj_datos.less_loyalty = array_less
console.log(obj_datos.less_loyalty)
document.getElementById("less_voted").innerHTML = '<thead> <tr><th scope="col">Num</th> <th scope="col" colspan=1>Names</th>' + 
'<th scope="col">Party</th> <th scope="col">Prom/Party</th><th scope="col">Total Votes</th></tr></thead><tbody>'
console.log("array_less", array_less)
array_less.map(function (el, index, array) { document.getElementById("less_voted").innerHTML += `<tr><td> ${index+1} </td> <td> ${array[index][1]} ${array[index][2]}</td><td> ${array[index][4]}</td><td> ${array[index][0]}</td><td> ${array[index][3]}</td></tr>` })
document.getElementById("less_voted").innerHTML += '</tbody></table>'

// obtengo array de los que más votan con el partido
var array_most = mem_votes_w_party.reverse().slice(0, Math.round(mem_votes_w_party.length/10))
var valor_sup = array_most[indice-1][0]
while(mem_votes_w_party[indice][0] === valor_sup && indice < mem_votes_w_party.length) {
  array_most.push(mem_votes_w_party[indice])
  indice++
}
obj_datos.more_loyalty = array_most
console.log(obj_datos.more_loyalty)

// dibujo tabla
document.getElementById("most_voted").innerHTML = '<thead> <tr><th scope="col">Num</th> <th scope="col" colspan=1>Names</th>' + 
'<th scope="col">Party</th> <th scope="col">Prom/Party</th><th scope="col">Total Votes</th></tr></thead><tbody>'

array_most.map(function (el, index, array) { document.getElementById("most_voted").innerHTML += `<tr><td> ${index+1} </td> <td> ${array[index][1]} ${array[index][2]}</td><td> ${array[index][4]}</td><td> ${array[index][0]}</td><td> ${array[index][3]}</td></tr>` })
document.getElementById("most_voted").innerHTML += '</tbody></table>'
console.log("array_most", array_most)
*/
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
