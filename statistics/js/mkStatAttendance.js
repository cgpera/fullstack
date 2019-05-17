const url = 'https://api.propublica.org/congress/v1/113/senate/members.json'
const init_str = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'L6x2Gbl9kawrKwFw4kQp75kCXLgCQokZEtDC1zFN',
  },
  mode: 'cors',
//  credencials: 'same-origin',
//  cache: 'default'
}
//var data = []

var app = new Vue({
  el: '#app',
  data: {
    miembros: []
  },
  created() {
    fetch(url, init_str)
    .then(response => response.json())
    .then(json => {this.miembros = json.miembros})
  }
});

/*console.log("data", app.last_name)

var miembros =[]

fetchJson(url, init_str).then(function (response) {
// do something with the JSON
  miembros = response.results[0].members
  console.log(data)
}).catch(function (error) {
  // do something getting JSON fails
  console.log("error", error)
})


//console.log(miembros)
function fetchJson(url, init) {
  return fetch(url, init).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
}*/