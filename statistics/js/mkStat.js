var statistics = {
  "number_of_democrats": 0,
  "number_of_republicans": 0,
  "number_of_independents": 0,
  "total": 0,
  "democrats_average_votes_with_party": 0,
  "republicans_average_votes_with_party": 0,
  "independents_average_votes_with_party": 0,
  "total_average": 0,
  "least_engaged": [],
  "most_engaged": [],
  "least_loyal": [],
  "most_loyal": [],
  "members_dem": [],
  "members_rep": [],
  "members_ind": []
};

// obtener lista de partidos y miembros de c/u
var miembros = data.results[0].members
statistics.members_dem = miembros.filter(ele => ele.party === "D")
statistics.number_of_democrats = statistics.members_dem.length
statistics.members_rep = miembros.filter(ele => ele.party === "R")
statistics.number_of_republicans = statistics.members_rep.length
statistics.total = miembros.length
statistics.members_ind = miembros.filter(ele => ele.party === "I")
statistics.number_of_independents = statistics.members_ind.length
statistics.democrats_average_votes_with_party = statistics.members_dem.reduce(sumar, 0) / statistics.number_of_democrats
statistics.republicans_average_votes_with_party = statistics.members_rep.reduce(sumar, 0) / statistics.number_of_republicans
statistics.democrats_average_votes_with_party = statistics.members_ind.reduce(sumar, 0) / statistics.number_of_independents


function sumar (sum, e) {return (sum + e.votes_with_party_pct)}

//var less_vote_w_party = []
var mem_votes_w_party = miembros.sort(ordenar_num)

function ordenar_num (a, b) {
  if(a.votes_with_party_pct > b.votes_with_party_pct) {
    return 1
  }
  if(a.votes_with_party_pct < b.votes_with_party_pct) {
    return -1
  }
  return 0
}

//var indice = Math.round(mem_votes_w_party.length/10)

console.log(mem_votes_w_party)
/*
var array_less = mem_votes_w_party.slice(0, Math.round(mem_votes_w_party.length/10))
valor_inf = array_less[indice-1][0] //ultimo elemento, para saber si tengo que seguir incorporando elemento con el mismo valor
while(mem_votes_w_party[indice][0] === valor_inf && indice < mem_votes_w_party.length) {
  array_less.push(mem_votes_w_party[indice])
  indice++
}

*/


console.log(statistics)