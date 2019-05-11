
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
