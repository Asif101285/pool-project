
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDsz8emrreZjWpteszhrQM68LZIju-nCaI",
    authDomain: "login-page-30b56.firebaseapp.com",
    projectId: "login-page-30b56",
    storageBucket: "login-page-30b56.appspot.com",
    messagingSenderId: "382474443323",
    appId: "1:382474443323:web:13010bc12c17e64d0ada1e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const form = document.querySelector("#form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const signUpEmail = document.querySelector("#email").value;
  const signUpPassword = document.querySelector("#password").value;
  const auth = getAuth();
   
  
createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("signup sucssedfull")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  })

  

