const fetch = require('node-fetch')

/**********************************************************************************
OPCION TRADICIONAL
**********************************************************************************/
function getNombre(username){
  const url = `https://api.github.com/users/${username}`
  fetch(url)
    .then( res => res.json() )
    .then( json => { console.log(json.name)  })
   // .error ( err => { console.log('error: ', err) })
}

// Llamada a la funcion
// getNombre('mortegac')


/**********************************************************************************
OPCION USANDO ASYNC AWAIT
  async => Cada vez que usamos esta palabra, javascript retorna una promesa
  await => espera que se ejecute la promesa   
**********************************************************************************/
//async function getNombreAsync(username){
const getNombreAsync= async (username)=> {  
                            const url = `https://api.github.com/users/${username}`
                            const respuesta = await fetch(url)
                            const json = await respuesta.json()

                            if(respuesta.status !== 200)
                                throw Error('El usuario no existe')

                            return json  
}


/////////////////////////////////////////////////////////
//FORMAS DE LLAMAR LA FUNCION
/////////////////////////////////////////////////////////
// OPCION -1 Devuelve una promesa
// getNombreAsync('mortegac')
//   .then((nombre) => console.log(nombre))
//   .catch((e) => console.log(`Error: ${e}`))


// OPCION -2 No devuelve una promesa, se procesa en forma sincrona
//(async function(){
(async ()=> {
              try{
                const nombre = await getNombreAsync('mortegac')
                console.log(nombre)

              }catch(e){
                console.log(`Error: ${e}`)

               }
})()