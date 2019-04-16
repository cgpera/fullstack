document.getElementById("filtro").addEventListener("change", filtByParty)

function filtByParty() {
  var checkedBoxes = document.querySelectorAll('input[name=party]:checked');
  var partido = Array.from(checkedBoxes).map(element => element.value)
  for (i = 0; i < partido.length; i++) {
    // si miembros[i].party 
    console.log(miembros.map(element => element.party == partido[i]))
  }
}