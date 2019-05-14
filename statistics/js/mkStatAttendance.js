const url = 'https://api.propublica.org/congress/v1/113/senate/members.json'
const init_str = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'L6x2Gbl9kawrKwFw4kQp75kCXLgCQokZEtDC1zFN',
  },
  mode: 'cors',
  credencials: 'same-origin',
  cache: 'default'
}
var data = []

fetchJson(url, init_str).then(function (response) {
// do something with the JSON
  console.log(typeof(response))
  data = response.results[0].members
  console.log(data)
}).catch(function (error) {
  // do something getting JSON fails
  console.log("error", error)
});


function fetchJson(url, init) {
  return fetch(url, init).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
}