function display_table () {
  display_encab()
//  display_cuerpo()
//  display_pie()
}

function display_encab() {
  var encab = "<table id='senate-data'>" + "<tr>" +
      "<th scope='col'>First Name</th>" +
      "<th scope='col'>Mid Name</th>" +
      '<th scope="col">Last Name</th>' +
      '<th scope="col">Party</th>' +
      '<th scope="col">State</th>' +
      '<th scope="col">Seniority</th>' +
      '<th scope="col">Votes w/Party</th>' +
    '</tr>'
    console.log(encab)
  return encab
}
/*function display_cuerpo(array) {
  var cuerpo_tabla = data.results[0].members.map(function (array) {return "<tr><td>" +array.first_name + "</td><td>" +array.middle_name + "</td><td>" + array.last_name + "</td><td>" + array.party + "</td><td>" + array.state + "</td><td>" + array.seniority + "</td><td>" + array.votes_with_party_pct + "</td></tr>"})
  return cuerpo_tabla
}*/

display_table()