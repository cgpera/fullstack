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
    totalMiembros: function () {
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
    filter: function () {
      let aux = []
      let result = []
      this.miembrosFiltered = this.miembros
      var checkedBoxes = document.querySelectorAll('input[name=party]:checked');
      var partidos = Array.from(checkedBoxes).map(element => element.value)
      var listState = document.querySelector("#state").value
      partidos.forEach(partido => {
        if (listState === 'All') {
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
