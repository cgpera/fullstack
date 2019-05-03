var obj_datos = {
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
//console.log("mem_party (congresistas por partido ", mem_party)
var mem_votes_w_party = miembros.map(el => [el.votes_with_party_pct, el.first_name, el.last_name, el.total_votes, el.party]).sort()
// no ordena correctamente, ordena según strings
//console.log(mem_votes_w_party)

// obtener array de los que menos votan con su partido:
console.log("comienzo less_vote_w_party")
var less_vote_w_party = []
//mem_votes_w_party.forEach(less_loyals)

var array_less = mem_votes_w_party.slice(0, Math.round(mem_votes_w_party.length/10))
var indice = Math.round(mem_votes_w_party.length/10)
valor_limite = array_less[indice-1][0] //ultimo elemento, para saber si tengo que seguir incorporando elemento con el mismo valor
while(mem_votes_w_party[indice][0] === valor_limite && indice < mem_votes_w_party.length) {
  array_less.push(mem_votes_w_party[indice])
  indice++
}
console.log(array_less)

obj_datos.less_loyalty = array_less
console.log(obj_datos.less_loyalty)
document.getElementById("less_voted").innerHTML = '<thead> <tr><th scope="col">Miembros</th> <th scope="col" colspan=1>Names</th>' + 
'<th scope="col">Party</th> <th scope="col">Prom/Party</th><th scope="col">Total Votes</th></tr></thead><tbody>'
console.log("array_less", array_less)
array_less.map(function (el, index, array) { document.getElementById("less_voted").innerHTML += `<tr><td> ${index+1} </td> <td> ${array[index][1]} ${array[index][2]}</td><td> ${array[index][4]}</td><td> ${array[index][0]}</td><td> ${array[index][3]}</td></tr>` })
document.getElementById("less_voted").innerHTML += '</tbody></table>'



document.getElementById("datahtml").innerHTML = '<thead> <tr> <th scope="col">Miembros</th>' +
'<th scope="col">Party</th> <th scope="col">Prom/Party</th></tr></thead><tbody>'

for (i = 0; i < mem_party.length; i++) {
  obj_datos.party_name = mem_party[i][0].party
  let summ = 0
  for (j = 0; j < mem_party[i].length; j++) {
    //    console.log(mem_party[i][j].party)
    //    obj_datos.party_name = mem_party[i][j].party
    obj_datos.members[j] = mem_party[i][j]
    summ += mem_party[i][j].votes_with_party_pct
//    console.log(obj_datos.members[j]) //despues descomentar
  }
  // tomado por partido, miembros que menos votan, creo que hay que tomarlo en general
  obj_datos.total_members = mem_party[i].length
  obj_datos.prom = summ /mem_party[i].length
  //ten_pct = Math.round( obj_datos.total_members / 10 )
  console.log(obj_datos.total_members)
  document.getElementById("datahtml").innerHTML += "<tr> <td>" + obj_datos.total_members + "</td><td>" + obj_datos.party_name + "</td><td>" + obj_datos.prom.toFixed(4) + "</td></tr>"
}
document.getElementById("datahtml").innerHTML += '</tbody></table>'

// no la uso, tendría que usar forEach()
function suma(el) {
  let total = 0
  console.log(total + el)
  return total + el
}
