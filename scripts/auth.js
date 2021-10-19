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