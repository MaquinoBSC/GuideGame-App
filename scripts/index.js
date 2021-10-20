const guideList= document.querySelector('.guides');
const loggedOutLinks= document.querySelectorAll('.logged-out');
const loggedInLink= document.querySelectorAll('.logged-in');

const setupUI= (user)=> {
    if(user){
        //tooggle ui elements
        loggedInLink.forEach((item)=> item.style.display= 'block');
        loggedOutLinks.forEach((item)=> item.style.display= 'none');
    }
    else{
        //tooggle ui elements
        loggedInLink.forEach((item)=> item.style.display= 'none');
        loggedOutLinks.forEach((item)=> item.style.display= 'block');
    }
}

//setup guides
const setupGuides= (data)=> {
    if(data.length){
        let html= '';
        data.forEach((doc)=> {
            const guide= doc.data();
            const li= `
                    <li>
                        <div class="collapsible-header grey lighten-4">${guide.title}</div>
                        <div class="collapsible-body white">${guide.content}</div>
                    </li>
                `;
            html+= li;
        });
        guideList.innerHTML= html;
    }
    else{
        guideList.innerHTML= "<h5 class='center-align'>Login to view guides</h5>"
    }
}

//Configurar componentes de materialize
document.addEventListener('DOMContentLoaded', function(){
    //DOMCOntentLoaded es un evento que se ejecuta cuando una vez que el contenido se renderiza en la pagina
    let modals= document.querySelectorAll('.modal');
    //Funciones de materialize
    M.Modal.init(modals);

    let items= document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
});