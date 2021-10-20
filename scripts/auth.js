// Listen for auth staus changes
auth.onAuthStateChanged((user)=> {
    if(user){
        //get data
        db.collection('guides').onSnapshot((snapshot)=> {
            setupGuides(snapshot.docs);
            setupUI(user);
        }).catch((erro)=> {
            console.log(erro.message);
        });
    }
    else{
        setupUI();
        setupGuides([]);
    }
});

//create a new guide
const createForm= document.querySelector('#create-form');
createForm.addEventListener('submit', (e)=> {
    e.preventDefault();

    db.collection('guides').add({
        title: createForm['title'].value,
        content: createForm['content'].value,
    }).then(()=> {
        //Close modal an reste the form
        const modal= document.querySelector('#modal-create');
        M.Modal.getInstance(modal).close();
        createForm.reset();
    }).catch((err)=> {
        console.log(err.message);
    });
});

//signup
const signupForm= document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e)=> {
    e.preventDefault();

   //get user info
   const email= signupForm['signup-email'].value;
   const password= signupForm['signup-password'].value;

   //Sign up the user
    auth.createUserWithEmailAndPassword(email, password)
        .then((cred)=> {
            console.log(cred.user);
            //hacemos referencia al modal y lo cerramos usando materialize
            const modal= document.querySelector('#modal-signup');
            M.Modal.getInstance(modal).close();
            signupForm.reset();
        });
});



//Logout
const logout= document.querySelector('#logout');
logout.addEventListener('click', (e)=>{
    e.preventDefault();

    auth.signOut().then(()=> {
        console.log("User Signed Out");
    });
});


//Login
const loginForm= document.querySelector('#login-form');
loginForm.addEventListener('submit', (e)=> {
    e.preventDefault();

    //get user Info
    const email= loginForm["login-email"].value;
    const password= loginForm["login-password"].value;

    auth.signInWithEmailAndPassword(email, password).then((cred)=> {
        console.log(cred.user);

        //close the login modal and reset the form
        const modal= document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    });
});