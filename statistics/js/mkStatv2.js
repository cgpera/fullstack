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

var miembros = []

const url = 'https://api.propublica.org/congress/v1/113/senate/members.json';
//const url = 'http://127.0.0.1:5500/js/pro-congress-113-senate.json';
const init_str = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'L6x2Gbl9kawrKwFw4kQp75kCXLgCQokZEtDC1zFN',
  },
  mode: 'cors',
};

fetch(url, init_str)
  .then(response => response.json())
  .then(json => {
    miembros = json.results[0].members
    app.miembros = json.results[0].members
    console.log(miembros)
//    app.miembrosFiltered = json.results[0].members
  })
  .then(makeStats) 
  .catch(error => console.log(error))

//console.log(app.miembros)

var app = new Vue({
  el: '#app',
  data: {
    miembros: [],
/*    members_dem: [],
    number_of_democrats: 0,
    members_rep: [],
    number_of_republicans: 0,
    members_ind: [],
    number_of_independents: 0,
    total: 0,
    democrats_average_votes_with_party: 0,
    republicans_average_votes_with_party: 0,
    independents_average_votes_with_party: 0,
    least_loyal: [],
    most_loyal: [],
    least_engaged: [],
    most_engaged: []*/
    statistics : {
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
    }
  },
  computed: {
    listaEstados: function () {
      // devuelve el listado de estados único para colocar en el select
      return this.miembros.map(element => element.state).sort().filter((item, index, array) => array.indexOf(item) === index);
    },
    totalMiembros: function () {
      return this.miembros.length
    }
  },
  methods: {
  }
})
// obtener lista de partidos y miembros de c/u
function makeStats() {
  //    var miembros = data.results[0].members
  console.log(app.miembros)
  statistics.members_dem = miembros.filter(ele => ele.party === "D")
  statistics.number_of_democrats = statistics.members_dem.length
  console.log(statistics.members_dem, statistics.number_of_democrats)
  statistics.members_rep = miembros.filter(ele => ele.party === "R")
  statistics.number_of_republicans = statistics.members_rep.length
  statistics.members_ind = miembros.filter(ele => ele.party === "I")
  app.statistics.number_of_independents = statistics.members_ind.length
  app.statistics.total = app.miembros.length
  statistics.democrats_average_votes_with_party = statistics.members_dem.reduce(sumar, 0) / statistics.number_of_democrats
  statistics.republicans_average_votes_with_party = statistics.members_rep.reduce(sumar, 0) / statistics.number_of_republicans
  statistics.independents_average_votes_with_party = statistics.members_ind.reduce(sumar, 0) / statistics.number_of_independents

  //least loyals = ordenar de menor a mayor según party_v...
  var mem_votes_w_party = miembros.sort(ordenar_x_party_pct)
  var indice = Math.round(mem_votes_w_party.length / 10)
  var array_less = mem_votes_w_party.slice(0, indice)
  tope = mem_votes_w_party[indice - 1].votes_with_party_pct
  let adicionales = mem_votes_w_party.filter((votes, index) => (index >= indice && votes.votes_with_party_pct === tope))
  least_loyal = array_less.concat(adicionales)
  //more loyals
  mem_votes_w_party.reverse()
  var array_more = mem_votes_w_party.slice(0, indice)
  tope = mem_votes_w_party[indice - 1].votes_with_party_pct
  adicionales = mem_votes_w_party.filter((votes, index) => (index >= indice && votes.votes_with_party_pct === tope))
  statistics.most_loyal = array_more.concat(adicionales)
  // least engaged
  var mem_missed_votes_pct = this.miembros.sort(ordenar_x_missed_pct)
  var indEng = Math.round(mem_missed_votes_pct.length / 10)
  tope = mem_missed_votes_pct[indice - 1].missed_votes_pct
  array_less = mem_missed_votes_pct.slice(0, indEng)
  adicionales = mem_missed_votes_pct.filter((votes, index) => (index >= indEng && votes.missed_votes_pct === tope))
  statistics.least_engaged = array_less.concat(adicionales)
  //most engaged
  mem_missed_votes_pct.reverse()
  array_more = mem_missed_votes_pct.slice(0, indEng)
  adicionales = mem_missed_votes_pct.filter((votes, index) => (index >= indice && votes.votes_with_party_pct === tope))
  statistics.most_engaged = array_more.concat(adicionales)

}


// funciones
function ordenar_x_party_pct(a, b) {
  if (a.votes_with_party_pct > b.votes_with_party_pct) {
    return 1
  }
  if (a.votes_with_party_pct < b.votes_with_party_pct) {
    return -1
  }
  return 0
}

function ordenar_x_missed_pct(a, b) {
  return ((a.missed_votes_pct > b.missed_votes_pct) ? 1 : -1)
  /*if(a.missed_votes_pct > b.missed_votes_pct) {
    return 1
  }
  if(a.missed_votes_pct < b.missed_votes_pct) {
    return -1
  }
  return 0*/
}

function sumar(sum, e) {
  return (sum + e.votes_with_party_pct)
}