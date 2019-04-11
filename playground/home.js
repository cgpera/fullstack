var menos = document.getElementById("menos")
console.log(menos, menos.innerText)
menos.addEventListener('click', change_value);

function change_value() {
  if(menos.innerText == "Read More...") {
    menos.innerText = "Read Less..."
  }
  else {
    menos.innerText = "Read More..."
  }
}