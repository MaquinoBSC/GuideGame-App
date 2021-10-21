const guideList= document.querySelector('.guides');
const loggedOutLinks= document.querySelectorAll('.logged-out');
const loggedInLink= document.querySelectorAll('.logged-in');
const accountDetails= document.querySelector('.account-details');
const adminItems= document.querySelectorAll('.admin');


const setupUI= (user)=> {
    if(user){
        if(user.admin){
            adminItems.forEach(item=> item.style.display= 'block');
        }
        //user info
        db.collection('users').doc(user.uid).get().then((doc)=> {
            const html= `
                <div>Logged in as: ${user.email}</div>
                <div>${doc.data().bio}</div>
                <div class="pink-text">${user.admin ? 'Admin' : ''} </div>
            `;
            accountDetails.innerHTML= html;
        });

        //toggle ui elements
        loggedInLink.forEach((item)=> item.style.display= 'block');
        loggedOutLinks.forEach((item)=> item.style.display= 'none');
    }
    else{
        adminItems.forEach(item=> item.style.display= 'none');
        //hide user info
        accountDetails.innerHTML= '';

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