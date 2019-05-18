
var firebaseConfig = {
  apiKey: "AIzaSyB-euI19G3u4FuTD1FpFOyPjyjhJMiOf8k",
  authDomain: "dms-chia.firebaseapp.com",
  databaseURL: "https://dms-chia.firebaseio.com",
  projectId: "dms-chia",
  storageBucket: "dms-chia.appspot.com",
  messagingSenderId: "132326518160",
  appId: "1:132326518160:web:09502dab93c4ae57"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Variables
var pageURL = window.location.protocol + "//" + window.location.host;
var pageLogin = "/index.html";
var pageMain = "/main.html";
var pageAdmin = "/admin.html";
console.log("pageURL is: " + pageURL);
console.log("pageLogin is: " + pageLogin);
console.log("pageMain is: " + pageMain);
console.log("pageAdmin is: " + pageAdmin);

// Function for Logging out
function callLogout() {
  firebase.auth().signOut().then(function () {
    console.log("User has been Signed Out!");
    sessionStorage.clear();
    window.location.replace(pageURL + pageLogin);
  }).catch(function (e) {
    console.log("Error signing out:", e);
  });
}
