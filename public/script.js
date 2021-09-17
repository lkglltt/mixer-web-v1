var firebaseConfig = {
    apiKey: "AIzaSyCdpAMUWgXLGXzDVPH3ATQPMgrHBwJ2JUk",
    authDomain: "entre-65e0d.firebaseapp.com",
    projectId: "entre-65e0d",
    storageBucket: "entre-65e0d.appspot.com",
    messagingSenderId: "957468521933",
    appId: "1:957468521933:web:834411efd4402b3e53c084",
    measurementId: "G-NE8ZR2TB7X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

// target the firebase collection 
const db = firestore.collection("form-responses");

// function to get the responses from the form
let getResponses = (id)  => document.getElementById(id).value;

// function to submit to firebase
let submitResponse = (e) => {
    e.preventDefault();
    var nameInput = getResponses("name");
    var phoneNumberInput = getResponses("phone-number");
    var authCodeInput = getResponses("auth-code");
    var rsvpStatusInput = document.querySelector('input[type="radio"]:checked').value;


    db.doc(authCodeInput).collection("responders").doc(phoneNumberInput).set({
        name: nameInput,
        RSVP: rsvpStatusInput,  
        number: phoneNumberInput,
    });


    //display an alert to confirm response
    document.getElementById("alert").style.display = "block";

    //reset the form once it has been sumbitted
    //document.getElementById("form").reset();
    document.getElementById("form").style.display = "none";

}

// adding the event listener
document.getElementById("form").addEventListener("submit", submitResponse);




