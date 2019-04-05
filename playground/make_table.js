var encab = '<table id="senate-data">' + 
'<thead>' + '<tr>' + 
      '<th scope="col" colspan="1">Name</th>' +
    /*  '<th scope="col">Mid Name</th>' +
      '<th scope="col">Last Name</th>' +
    */  '<th scope="col">Party</th>' +
      '<th scope="col">State</th>' +
      '<th scope="col">Seniority</th>' +
      '<th scope="col">Votes w/Party</th>' + '</tr>' + '</thead>'

/*    function make_table(array) {
      return "<tr><td>array.first_name</td><td>array.middle_name</td><td>array.last_name</td><td>array.party</td><td>array.state</td><td>array.seniority</td><td>array.votes_with_party_pct</td></tr>"
    }*/
var pie = '</tbody></table>'
//"<tr><td>" + (index+1) + <a href={array.api_uri}>array.first_name + " " + (array.middle_name || "") + " " + array.last_name</a> + "</td><td>" + array.party + "</td><td>" + array.state + "</td><td>" + array.seniority + "</td><td>" + array.votes_with_party_pct + " % </td></tr>"
var cuerpo_tabla = data.results[0].members.map(function (array, index) {return ("<tr><td>" + (index+1) + " " + "<a href=#array.url>" + array.first_name + " " + (array.middle_name || "") + " " + array.last_name + "</a>" + "</td><td>" + array.party + "</td><td>" + array.state + "</td><td>" + array.seniority + "</td><td>" + array.votes_with_party_pct + " % </td></tr>")})
//document.write(encab+cuerpo_tabla)
document.getElementById("senate-data").innerHTML = encab
document.getElementById("senate-data").innerHTML += '<tbody>'

for(var i = 0; i < cuerpo_tabla.length; i++) {
  document.getElementById("senate-data").innerHTML += cuerpo_tabla[i]
}

// de la sig manera me sale con comas (,) por eso se hizo con for
//document.getElementById("senate-data").innerHTML += cuerpo_tabla
document.getElementById("senate-data").innerHTML += pie
//console.log(document.getElementById("senate-data").innerHTML)
