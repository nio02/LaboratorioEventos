//Capturamos la lista
const lista = document.getElementById("lista");

//Agregar tarea
function addTask(task){
    const contenedor = document.createElement('li');
    contenedor.classList.add('item-tarea');

    const botonCompletar = document.createElement('button');
    botonCompletar.textContent = "Completar";
    
    //Se debe agregar el evento aqui, ya que despues no lo reconocera
    botonCompletar.addEventListener('click', () => {  
        if (texto){
            texto.classList.toggle('tarea-incompleta');
        }
    });

    const texto = document.createElement('p');
    texto.classList.add('tarea-incompleta');
    texto.textContent = task;

    const botonEliminar = document.createElement('button');
    botonCompletar.classList.add('btn-completar')
    botonEliminar.textContent = 'Eliminar';

    //Se debe agregar el evento aqui, ya que despues no lo reconocera
    botonEliminar.addEventListener('click', () => { 
        lista.removeChild(contenedor)
    })

    contenedor.appendChild(botonCompletar);
    contenedor.appendChild(texto);
    contenedor.appendChild(botonEliminar);
    lista.appendChild(contenedor)    
};

//Event Listener

//Elementos
const botonAgregar = document.getElementById("agregar-tarea");
const tareaNueva = document.getElementById("escribir-tarea");

//Evento
botonAgregar.addEventListener('click', () => {
    event.preventDefault();
    let mensaje = tareaNueva.value.trim();

    if (!mensaje){
        alert("Escribe una tarea!")
    } else {
        addTask(mensaje);
    tareaNueva.value = '';
    }
});