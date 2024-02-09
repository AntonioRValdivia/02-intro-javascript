
const getImagen = async() => {          // Es una alternativa a las promesas, se usa async y await

    try {                     // En lugar del then y catch se usa un bloque try catch
        
        const apiKey = 'kkkbthvrYljoiz1MBBaBB0ROa1He9lvZ';
        const resp = await fetch( `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}` );
        const { data } = await resp.json(); // con el await se se vuelve síncrono parte del código
                                        // y se espera a que se resuelva la promesa
        const { url } = data.images.original;

        const img = document.createElement('img'); 
        img.src = url;                              
        document.body.append( img );   
        
    } catch (error) {
        console.error(error)
    }
 

}

getImagen();







// const apiKey = 'kkkbthvrYljoiz1MBBaBB0ROa1He9lvZ';

// const peticion = fetch( `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}` );  

// peticion.then( resp => resp.json() )            
//         .then( ({data}) => {                
//             const { url } = data.images.original;  

//             const img = document.createElement('img'); 
//             img.src = url;                              

//             document.body.append( img );              
//         })
// .catch( console.warn );