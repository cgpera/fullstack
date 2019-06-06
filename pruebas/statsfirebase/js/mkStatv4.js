// toma la url, escribe los miembros y hace las estadísticas 
//igual que version 2, con el cambio de async, await en fetch

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

const init_str = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'L6x2Gbl9kawrKwFw4kQp75kCXLgCQokZEtDC1zFN',
  },
  mode: 'cors',
};

/*const getArrayFromURL = async (urlAddr, options) => {
  try {
    const response = await fetch(urlAddr, options);
    const json = await response.json()
    app.miembros = json.results[0].members
    app.statistics = statistics
    makeStats()
    console.log(app.statistics)
    return `Estado del servidor: ${response.status === 200 ? "OK" : "NOT OK"}`;
  } catch (e) {
    throw `Manejo interno del error. Error original: ${e}`;
  }
}

getArrayFromURL(url, init_str)
  .then(result => console.log(result))
  .catch(e => console.log(`Error Capturado Fuera de la función async: ${e}`));
*/

const url = 'https://api.propublica.org/congress/v1/113/senate/members.json'


const getArrayFromURL = async (urlAddr, options) => {
  try {
    const response = await fetch(urlAddr, options);
    const json = response.json()
    return json
  } catch (e) {
    throw `Error original: ${e}`;
  }
}
getArrayFromURL(url, init_str)
  .then(result => {
    app.miembros = result.results[0].members
    app.statistics = statistics
    makeStats()
  })
  .catch(e => console.log(`Error Capturado Fuera de la función async: ${e}`));

var app = new Vue({
  el: '#app',
  data: {
    miembros: [],
    statistics: {}
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
  methods: {}
})

// obtener lista de partidos y miembros de c/u
function makeStats() {
  app.statistics.members_dem = app.miembros.filter(ele => ele.party === "D")
  app.statistics.number_of_democrats = app.statistics.members_dem.length
  app.statistics.members_rep = app.miembros.filter(ele => ele.party === "R")
  app.statistics.number_of_republicans = app.statistics.members_rep.length
  app.statistics.members_ind = app.miembros.filter(ele => ele.party === "I")
  app.statistics.number_of_independents = app.statistics.members_ind.length
  app.statistics.total = app.miembros.length
  app.statistics.democrats_average_votes_with_party = (app.statistics.members_dem.reduce(sumar, 0) / app.statistics.number_of_democrats).toFixed(4)
  app.statistics.republicans_average_votes_with_party = (app.statistics.members_rep.reduce(sumar, 0) / app.statistics.number_of_republicans).toFixed(4)
  app.statistics.independents_average_votes_with_party = (app.statistics.number_of_independents !== 0 ? (app.statistics.members_ind.reduce(sumar, 0) / app.statistics.number_of_independents).toFixed(4) : 0)
  app.statistics.total_average = ((parseFloat(app.statistics.democrats_average_votes_with_party) + parseFloat(app.statistics.republicans_average_votes_with_party) + parseFloat(app.statistics.independents_average_votes_with_party)) / 3).toFixed(4)

  //least loyals = ordenar de menor a mayor según party_v...
  var mem_votes_w_party = app.miembros.sort(ordenar_x_party_pct)
  var indice = Math.round(mem_votes_w_party.length / 10)
  var array_less = mem_votes_w_party.slice(0, indice)
  tope = mem_votes_w_party[indice - 1].votes_with_party_pct
  let adicionales = mem_votes_w_party.filter((votes, index) => (index >= indice && votes.votes_with_party_pct === tope))
  app.statistics.least_loyal = array_less.concat(adicionales)
  //more loyals
  mem_votes_w_party.reverse()
  var array_more = mem_votes_w_party.slice(0, indice)
  tope = mem_votes_w_party[indice - 1].votes_with_party_pct
  adicionales = mem_votes_w_party.filter((votes, index) => (index >= indice && votes.votes_with_party_pct === tope))
  app.statistics.most_loyal = array_more.concat(adicionales)
  // least engaged
  var mem_missed_votes_pct = app.miembros.sort(ordenar_x_missed_pct)
  var indEng = Math.round(mem_missed_votes_pct.length / 10)
  tope = mem_missed_votes_pct[indice - 1].missed_votes_pct
  array_less = mem_missed_votes_pct.slice(0, indEng)
  adicionales = mem_missed_votes_pct.filter((votes, index) => (index >= indEng && votes.missed_votes_pct === tope))
  app.statistics.least_engaged = array_less.concat(adicionales)
  //most engaged
  mem_missed_votes_pct.reverse()
  array_more = mem_missed_votes_pct.slice(0, indEng)
  adicionales = mem_missed_votes_pct.filter((votes, index) => (index >= indice && votes.votes_with_party_pct === tope))
  app.statistics.most_engaged = array_more.concat(adicionales)
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
}

function sumar(sum, e) {
  return (sum + e.votes_with_party_pct)
}