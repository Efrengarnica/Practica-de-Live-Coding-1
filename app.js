//Traer mi lista desordenada por medio de su id, el boton y el input en donde está la palabra.
const ulLista = document.getElementById("ulLista");
const palabra= document.getElementById("palabra");
const enviarBoton = document.getElementById("enviarBoton");


//Función que recibe una Arreglo y un String.
function imprimirAreglo(string, Arreglo){
    let cantPalabras= string.length;
    let nuevoArreglo=[]
    for(let i=0;i<Arreglo.length;i++){
        if(Arreglo[i].length>cantPalabras){
            nuevoArreglo.push(Arreglo[i])
        }
    }//for
    return nuevoArreglo;
}// imprimirAreglo

//Mi Arreglo
const myArray = ["sol", "código", "libro", "react", "viento", "python", "git", "música", "viento", "ciudad", "nube", "mar", "viento1", "viento2", "viento3", "viento4", "viento5", "viento6", "viento7", "viento8"];

//Funcion para agreggar las palabras en la lista de mi html
function arrayPrint(arr){
    if(arr.length===0){
        window.alert("La longitud de tu palabra es igual ó más grande que todas las palabras del arreglo, entonces NO hay palabras para mostrar")
    }else{
    for(let i=0;i<arr.length;i++){
        ulLista.insertAdjacentHTML("beforeend", `
            <li>${arr[i]}</li>
            `)
        }//for
    }//else
}//arrayPrint

enviarBoton.addEventListener("click",function(event){
    event.preventDefault();
    //Borro el contenido anterior
    while (ulLista.firstChild) {
        ulLista.removeChild(ulLista.firstChild);
      }
    //Primero obtengo mi array modificado
    let arreglo= imprimirAreglo(palabra.value,myArray);
    //Después lo agrego a la lista
    arrayPrint(arreglo);
});//evento


