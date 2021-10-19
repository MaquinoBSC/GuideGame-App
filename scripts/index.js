//Configurar componentes de materialize
document.addEventListener('DOMContentLoaded', function(){
    //DOMCOntentLoaded es un evento que se ejecuta cuando una vez que el contenido se renderiza en la pagina
    let modals= document.querySelectorAll('.modal');
    //Funciones de materialize
    M.Modal.init(modals);

    let items= document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
});