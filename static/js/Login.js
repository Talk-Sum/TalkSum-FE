const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })
})

const googleLogin = (event) => {
    event.preventDefault();  // Prevent the default <a> tag behavior
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
        console.log("Google 로그인 성공", result);
    }).catch((error) => {
        console.log("Google 로그인 오류", error);
    });
}

const facebookLogin = (event) => {
    event.preventDefault();
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
        console.log("Facebook 로그인 성공", result);
    }).catch((error) => {
        console.log("Facebook 로그인 오류", error);
    });
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRGajMi8qc4fRGe9ynsVSC3XQbhmfKPlo",
    authDomain: "talksum-a3deb.firebaseapp.com",
    projectId: "talksum-a3deb",
    storageBucket: "talksum-a3deb.appspot.com",
    messagingSenderId: "964787280654",
    appId: "1:964787280654:web:5b5d3d009f11d64e00d55f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




