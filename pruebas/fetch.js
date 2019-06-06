const url = 'https://randomuser.me/api/?results=10'
const ul = document.getElementById("authors")


fetch(url)
.then(resp => resp.json())
.then(function(data) {
//  console.log(data.results)
  let authors = data.results
  authors.map(author => {
    let li = createNode('li')
    let img = createNode('img')
    let span = createNode('span')
    img.src = author.picture.medium
    span.innerHTML = `${author.name.first} ${author.name.last}`
    append(li, img)
    append(li, span)
    ul.appendChild(li)
//    append(ul, li)
  })
})
.catch(err => console.log(err))

function createNode(element) {
  return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
  return parent.appendChild(el); // Append the second parameter(element) to the first one
}

let data = {
  name: 'Sara'
}

const url2 = 'https://randomuser.me/api'

// The parameters we are gonna pass to the fetch function
let fetchData = { 
  method: 'POST', 
  body: JSON.stringify(data),
  mode: 'cors', 
  headers: new Headers()
}

fetch(url2, fetchData)
.then(res => res.json())
.then(function(response) {
  console.log('exito', response)
})
.catch(err => console.log(err))