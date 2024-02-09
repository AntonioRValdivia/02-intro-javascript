
const apiKey = 'kkkbthvrYljoiz1MBBaBB0ROa1He9lvZ';

const peticion = fetch( `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}` );  // fetch devuelve una promesa

peticion.then( resp => resp.json() )            
        .then( ({data}) => {                // Secuencia de promesas encadenadas
            const { url } = data.images.original;  // Desestructurando los atributos de data hasta llegar a url

            const img = document.createElement('img'); // Creando un elemento img
            img.src = url;                              // Asignando la url a la imagen

            document.body.append( img );              // Agregando la imagen al body  
        })
.catch( console.warn );