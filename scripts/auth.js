// Listen for auth staus changes
auth.onAuthStateChanged((user)=> {
    if(user){
        //get data
        db.collection('guides').get().then((snapshot)=> {
            setupGuides(snapshot.docs);
            setupUI(user);
        });
    }
    else{
        setupUI();
        setupGuides([]);
    }
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