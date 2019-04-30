var json_stat = {
  "congress": "113",
  "chamber": "Senate",
  "number of senators": 105,
  "statistics":
  {
    "datos": [],
    /*    {
          "party_name": "",
          "total_members": 0,
          "members": []
        }
      ],*/
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

var mem_party = []
for (i = 0; i < party.length; i++) {
  mem_party.push(miembros.filter(el => el.party == party[i]))
}
console.log("mem_party (array de congresistas ordenados por partido ", mem_party)
//console.log("Inicial del partido: ", json_stat.statistics.datos)
//console.log("json: ", json_stat.statistics.datos.party_name, json_stat.statistics.datos.members)
var obj_datos = {
  "party_name": "",
  "total_members": 0,
  "avg_votes": 0,
  "Less Loyalty": [],
  "More Loyalty": [],
  "Least Engaged": [],
  "Most Engaged": [],
  "members": []
}

//party.forEach((el, index) => console.log("json", json_stat.statistics.datos))
console.log("longitud de arrays: ", party.length, mem_party.length)
//document.getElementById("datahtml").innerHTML = ""
for (i = 0; i < mem_party.length; i++) {
  obj_datos.party_name = mem_party[i][0].party

  for (j = 0; j < mem_party[i].length; j++) {
    //    console.log(mem_party[i][j].party)
    //    obj_datos.party_name = mem_party[i][j].party
    obj_datos.members[j] = mem_party[i][j]
//    console.log(obj_datos.members[j]) //despues descomentar
  }
  obj_datos.total_members = mem_party[i].length
  ten_pct = Math.round( obj_datos.total_members / 10 )
  console.log(obj_datos.total_members, ten_pct)
  document.getElementById("datahtml").innerHTML += "<p>" + obj_datos.total_members + "</p>"
  document.getElementById("canthtml").innerHTML += "<p>" + obj_datos.party_name + "</p>"
}


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
  }
  //  console.log("json en promedio: ", json_stat.statistics.data.party_name, json_stat.statistics.data.members)
  //  console.log(json_stat.statistics.data.prom = suma / el.length) // no existe en el json
  //  console.log("json: ", json_stat.chamber, json_stat.statistics.data.members, json_stat.statistics.data.party_name)
  obj_datos.avg_votes = suma / el.length
  document.getElementById("promhtml").innerHTML += "<p>" + obj_datos.avg_votes + "</p>"
  return suma / el.length
}

mem_party.forEach((element, id, array) => less(element, id, array))

function less(el, index, arr) {
  //  ten_pct = Math.trunc(arr.length / 10)
  ten_pct = arr.length
  console.log(ten_pct)
}