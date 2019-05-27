/* filtro de partidos y estados  // luego sacar!!
document.getElementById("state").addEventListener("change", filter)
document.getElementById("filtro").addEventListener("change", filter)
function filter() {
  var arrayaux = []
  var arrayst = []
  var arraytemp = []
  var checkedBoxes = document.querySelectorAll('input[name=party]:checked');
  var partido = Array.from(checkedBoxes).map(element => element.value)
  var selectedState = document.querySelector("#state").value
  document.getElementById("senate-data").innerHTML = ""
  document.getElementById("senate-data").innerHTML = encab

  for (i = 0; i < partido.length; i++) {
    arrayaux = miembros.filter(element => element.party === partido[i])
    arraytemp = arraytemp.concat(arrayaux)
    arraytemp.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.last_name < b.last_name) {
        return -1;
      }
      return 0;
    })
  }
  if (selectedState == "All") {
    arrayst = arrayst.concat(arraytemp)
  }
  else {
    arrayst = arraytemp.filter(element => element.state === selectedState)
  }
  arrayst.forEach(function (array, index) { document.getElementById("senate-data").innerHTML += `<tr><td> ${index + 1} </td> <td> <a href= ${array.url} target='_blank'> ${array.first_name} ${array.middle_name || ''} ${array.last_name} </a></td><td> ${array.party} </td><td> ${array.state} </td><td> ${array.seniority} </td><td> ${array.votes_with_party_pct} % </td></tr>` })
}
// hasta acá */

const url = 'https://api.propublica.org/congress/v1/113/senate/members.json';
//const url = 'http://127.0.0.1:5500/js/pro-congress-113-senate.json'
const init_str = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'L6x2Gbl9kawrKwFw4kQp75kCXLgCQokZEtDC1zFN',
  },
  mode: 'cors',
};

//document.getElementById("state").addEventListener("change", filterByState);


fetch(url, init_str)
  .then(response => response.json())
  .then(json => {
    app.miembros = json.results[0].members
    app.miembrosFiltered = json.results[0].members
  })
  .catch(error => console.log(error))

var app = new Vue({
  el: '#app',
  data: {
    miembros: [],
    miembrosFiltered: [],
    //    partidos: ["D", "R", "I"],
    listState: 'All',
//    totalMiembros: 0,
    //    filterByParty: []
  },
  created() {
    /*    fetch(url, init_str)
          .then(response => response.json())
          .then(json => this.miembros = json.results[0].members);*/
  },
  computed: {
    listaEstados: function () {
      // devuelve el listado de estados único para colocar en el select
      return this.miembros.map(element => element.state).sort().filter((item, index, array) => array.indexOf(item) === index);
    },
    totalMiembros: function() {
      return this.miembrosFiltered.length
    }
  },
  methods: {
/*    filterByParty: function() {
      var checkedBoxes = document.querySelectorAll('input[name=party]:checked');
      //var checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
      var partidos = Array.from(checkedBoxes).map(element => element.value)
      this.miembrosFiltered = this.miembros
      let aux = []
      let result = []
      partidos.forEach(partido => {
        aux = this.miembrosFiltered.filter(miembro => miembro.party === partido)
        result = result.concat(aux)
      })
      result.sort((a, b) => (a.last_name > b.last_name ? 1 : -1))
      return this.miembrosFiltered = result
    },
    filterByState: function() { 
      let aux = []
      var listState = document.querySelector("#state").value
      console.log(listState)
      this.miembrosFiltered = this.miembros
      //console.log(this.miembrosFiltered)
      if(listState === 'All') {
        return this.miembrosFiltered
      }
      else {
        //console.log("else", this.miembrosFiltered)
        aux = this.miembrosFiltered.filter(el => el.state === listState)
        console.log(aux)
        this.miembrosFiltered = aux
        return this.miembrosFiltered
      }
    },*/
    filter: function() {
      let aux = []
      let result = []
      this.miembrosFiltered = this.miembros
      var checkedBoxes = document.querySelectorAll('input[name=party]:checked');
      var partidos = Array.from(checkedBoxes).map(element => element.value)
      var listState = document.querySelector("#state").value
      partidos.forEach(partido => {
        if(listState === 'All') {
          aux = this.miembrosFiltered.filter(miembro => miembro.party === partido)
        }
        else {
        aux = this.miembrosFiltered.filter(miembro => miembro.party === partido && miembro.state === listState)
      }
      result = result.concat(aux)
      })
      result.sort((a, b) => (a.last_name > b.last_name ? 1 : -1))
      return this.miembrosFiltered = result
    }
  }
});

function suma(total, ele) {
  return total + ele.votes_with_party_pct;
}

function ordenarMissedPct(a, b) {
  return ((a.missed_votes_pct > b.missed_votes_pct) ? 1 : -1);
}
