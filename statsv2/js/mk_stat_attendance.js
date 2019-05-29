/*var obj_datos = {
  "party_name": "",
  "total_members": 0,
  "avg_votes": 0,
  "prom": 0,
  "less_loyalty": [],
  "more_loyalty": [],
  "least_engaged": [],
  "most_engaged": [],
  "members": []
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
*/
var mem_votes_w_party = miembros.map(el => [el.missed_votes_pct, el.missed_votes, el.first_name, el.last_name]).sort(ordenar_num)

function ordenar_num (a, b) {
  if(a[0] > b[0]) {
    return 1
  }
  if(a[0] < b[0]) {
    return -1
  }
  return 0
}

// obtener array de los que menos votan con su partido:
var less_vote_w_party = []
var indice = Math.round(mem_votes_w_party.length/10)

var array_less = mem_votes_w_party.slice(0, Math.round(mem_votes_w_party.length/10))
valor_inf = array_less[indice-1][0] //ultimo elemento, para saber si tengo que seguir incorporando elemento con el mismo valor
while(mem_votes_w_party[indice][0] === valor_inf && indice < mem_votes_w_party.length) {
  array_less.push(mem_votes_w_party[indice])
  indice++
}


// dibujo tabla de los que menos votan con el partido
obj_estad.less_engaged = array_less
console.log(obj_estad.less_engaged)
document.getElementById("less_engaged").innerHTML += '<thead class="thead-light"><tr><th scope="col">Num</th> <th scope="col" colspan=1>Names</th>' + 
'<th scope="col">% Missed Votes</th> <th scope="col">Missed Votes</th></tr></thead><tbody>'
console.log("array_less", array_less)
array_less.map(function (el, index, array) { document.getElementById("less_engaged").innerHTML += `<tr><td> ${index+1} </td> <td> ${array[index][2]} ${array[index][3]}</td><td> ${array[index][0]}</td><td> ${array[index][1]}</td></tr>` })
document.getElementById("less_engaged").innerHTML += '</tbody></table>'

// obtengo array de los que más votan con el partido
console.log("mem_votes_w_party", mem_votes_w_party)

var array_most = mem_votes_w_party.reverse().slice(0, Math.round(mem_votes_w_party.length/10))
console.log("array_most", array_most)
var valor_sup = array_most.length
while(mem_votes_w_party[indice][0] === valor_sup && indice < mem_votes_w_party.length) {
  array_most.push(mem_votes_w_party[indice])
  indice++
}
obj_estad.more_loyalty = array_most
console.log(obj_estad.more_loyalty)

// dibujo tabla
document.getElementById("most_engaged").innerHTML = '<thead class="thead-light"> <tr><th scope="col">Num</th> <th scope="col" colspan=1>Names</th>' + 
'<th scope="col">% Missed Votes</th> <th scope="col">Missed Votes</th></tr></thead><tbody>'

array_most.map(function (el, index, array) { document.getElementById("most_engaged").innerHTML +=  `<tr><td> ${index+1} </td> <td> ${array[index][2]} ${array[index][3]}</td><td> ${array[index][0]}</td><td> ${array[index][1]}</td></tr>` })
document.getElementById("most_engaged").innerHTML += '</tbody></table>'
console.log("array_most", array_most)

//tabla estadísticas
/*document.getElementById("datahtml").innerHTML = '<thead> <tr><th scope="col">Number</th> <th scope="col">Party</th>' + 
'<th scope="col">Prom/Party</th></tr></thead><tbody>'

//console.log(mem_party.length)
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

//console.log(mem_party[0])
obj_datos.members = []
for (i = 0; i < mem_party.length; i++) {
  var sum = 0

  mem_party[i].map(elem => sum += elem.votes_with_party_pct)
  obj_datos.prom = sum / mem_party[i].length
//  obj_datos.members = mem_party[i]
  obj_datos.party_name = mem_party[i][0].party
  obj_datos.total_members = mem_party[i].length
  console.log
  obj_datos.members.concat(mem_party[i])
}
console.log(obj_datos.prom, obj_datos.prom, obj_datos.members, obj_datos.party_name, obj_datos.total_members)
*/