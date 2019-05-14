var obj_datos = [{
  "party_name": "R",
  "total_members": 0,
  "avg_votes": 0,
  "prom": 0,
  "members": []
},
{
  "party_name": "R",
  "total_members": 0,
  "avg_votes": 0,
  "prom": 0,
  "members": []
},
{
  "party_name": "R",
  "total_members": 0,
  "avg_votes": 0,
  "prom": 0,
  "members": []
}]

var obj_estad = {
  "less_loyalty": [],
  "more_loyalty": [],
  "least_engaged": [],
  "most_engaged": []
}

var miembros = data.results[0].members
let pertenecen = []
miembros.forEach((ele) => {
  let b = ele.filter((el) => el.party === ) 
})

// obtener lista de partidos y miembros de c/u

var arrayaux = miembros.map(element => element.party)
let uniques = (names) => names.filter((el, idx) => names.indexOf(el) === idx)
var party = uniques(arrayaux) // cantidad e inicial de partidos representados

var mem_party = []
for (i = 0; i < party.length; i++) {
  mem_party.push(miembros.filter(el => el.party == party[i]))
}


// saco el promedio de votos con el partido
var total = []
let a = []
mem_party.forEach((ele, index) => {
  b = ele.reduce((sum, e) => {
    return sum + e.votes_with_party_pct
  }, 0)
  a.push((b / ele.length).toFixed(4))
  console.log(a, b, ele.length)
})