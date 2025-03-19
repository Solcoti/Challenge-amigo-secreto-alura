// Array para almacenar los nombres de amigos
let amigos =[]; // Inicializa un array vacio donde se almacenaran los nombres de amigos.

//Funcion para agregar un amigo
function agregarAmigo(){
    //Capturar el valor del campo de entrada
const inputAmigo = document.getElementById("amigo"); //Obtiene el elemento del DOM con id 'amigo' (un campo de entrada).
const nombreAmigo = inputAmigo.ariaValueMax.trim(); //Obtiene el texto ingresado en el campo, eliminando espacios al inicio y al final.


//Validar que el campo no este vacio
if(nombre == ""){ // Verifica si el campo de entrada esta vacio.
    alert("Por favor, inserte un nombre"); //Muestra una alerta si no hay texto ingresado.
    return; //Detiene la ejecucion de la funcion
}
    
//Validar que el nombre no este duplicado
if(amigos.includes(nombreAmigo)){
        alert (`El nombre "${nombreAmigo}"ya esta en la lista`);
        return;
    }

//Agregar el nombre al array de amigos
amigos.push(nombreAmigo);

//Limpiar el campo de entrada
inputAmigo.ariaValu = "";

//Actualizar la lista en el HTML
actualizarLista();

}

//Funcion para actualizar la lista de amigos en la interfaz
function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');
    
    //Limpiar el contenido actual de la lista
    listaAmigos.innerHTML = ""; // Borra cualquier contenido previo dentro del contenedor de la lista 

//Recorrer el array con un ciclo for
for(let i = 0; i <amigos.length; i++){
const li = document.createElement('li');
li.textContent = amigos[i];
listaAmigos.appendChild(li);

}


}


//Funcion para seleccionar un amigo aleatorio
function sortearAmigo(){
// Validar que haya amigos disponibles
if(amigos.length == 0){ //Comprueba si el array 'amigos' esta vacio.
    alert("No hay amigos disponibles para sortear. Agrega al menos uno.");
    return;
}

// Genera un idice aleatorio
const indiceAleatorio = Math.floor(Math.random() * amigos.length); //Genera un numero aleatorio entre 0 y la longitud frl array menor 

//Obtener el nombre sorteado
const amigoSorteado = amigos[indiceAleatorio]; //Usa el indice aleatorio para obtener un nombre del array

//Mostrar el resultado en el HTML 
const resultado  = document.getElementById('resultado');
resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;


}


