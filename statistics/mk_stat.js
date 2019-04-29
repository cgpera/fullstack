var json_stat = {
  "congress": "113",
  "chamber": "Senate",
  "number of senators": 105,
  "statistics": 
  {
    "datos": [
    {
      "party_name": "",
      "total_members": 0,
      "members": []
    }
  ],
    "Less Loyalty": [],
    "More Loyalty": [],
    "Least Engaged": [],
    "Most Engaged": []
  }
}

// obtener lista de partidos y miembros de c/u
var miembros = data.results[0].members
var arrayaux = miembros.map(element => element.party)
let uniques = (names) => names.filter((el, idx) => names.indexOf(el) === idx)
var party = uniques(arrayaux) // cantidad e inicial de partidos representados

console.log(json_stat.statistics.datos[0])
var mem_party = []
for (i = 0; i < party.length; i++) {
  //      console.log("cons", miembros.filter(el => el.party == party[i]))
//  json_stat.statistics.datos[i].party_name = party[i]
//  json_stat.statistics.datos[i].total_members = party.length
  mem_party.push(miembros.filter(el => el.party == party[i]))

  /*mem_prom = mem_party.reduce(suma) / mem_party[i].length */
}
console.log("mem_party (array de congresistas ordenados por partido ", mem_party)
//console.log("Inicial del partido: ", json_stat.statistics.datos)
//console.log("json: ", json_stat.statistics.datos.party_name, json_stat.statistics.datos.members)

party.forEach((el, index) => console.log(json_stat.statistics.datos[index]))

mem_party.forEach(el => console.log(el))
console.log(party.length)
  //      console.log("cons", miembros.filter(el => el.party == party[i]))
//  json_stat.statistics.datos[i].party_name = party[i]
//  json_stat.statistics.datos[i].total_members = party.length
//  mem_party.push(miembros.filter(el => el.party == party[i]))

  /*mem_prom = mem_party.reduce(suma) / mem_party[i].length */

//    console.log(mem_party, typeof (mem_party))

/*for (i = 0; i < mem_party.length; i++) {
  sum_votos = mem_party[i].reduce(suma, 0)
  console.log(sum_votos)
  prom = sum_votos / mem_party[i].length
  console.log(prom)
}*/

function suma(el) {
  let total = 0
  console.log(total + el)
  return total + el
}

mem_party.forEach(element => prom(element))

function prom(el) {
  let suma = 0
  //    el.forEach((ele, i) => console.log(ele.votes_with_party_pct, i))
  for (let index = 0; index < el.length; index++) {
//    console.log(el[index])
    suma += el[index].votes_with_party_pct;
//    json_stat.statistics.data.party_name = el[index].party

    //    json_stat.statistics.data.members = el[index]

//    json_stat.statistics.data.members.push(el[index])

  }
//  console.log("json en promedio: ", json_stat.statistics.data.party_name, json_stat.statistics.data.members)
  //  console.log(json_stat.statistics.data.prom = suma / el.length) // no existe en el json
//  console.log("json: ", json_stat.chamber, json_stat.statistics.data.members, json_stat.statistics.data.party_name)
  return suma / el.length
}