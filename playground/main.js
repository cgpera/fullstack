console.log("Iniciando Javascript...")
var myName = 'Claudio'
console.log("Mi nombre es " + myName)
var age = 57;
console.log("Mi edad es ", age)
var ignasiAge = 32, ageDiff
ageDiff = age - ignasiAge
console.log("La diferencia de edad entre ignasi y yo es: ", ageDiff)

if(age > 21) {
  console.log("You are older than 21")
}
else if (age < 21) {
  console.log("You are not older than 21")
}
else {
  console.log("You are 21 years old")
}

if(ageDiff > 0) {
  console.log("You are older than ignasi")
}
else if (ageDiff < 0) {
  console.log("You are younger than ignasi")
}
else {
  console.log("You have the same age than ignasi")
}