// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js"></script>
// <script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//  https://firebase.google.com/docs/web/setup#available-libraries -->


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDRlRiB-_WTbnhCqVEVRkEZD1L0WwlhHIA",
  authDomain: "uvapp-78f42.firebaseapp.com",
  projectId: "uvapp-78f42",
  storageBucket: "uvapp-78f42.appspot.com",
  messagingSenderId: "859119990183",
  appId: "1:859119990183:web:56e9775cdd10e797487282",
  measurementId: "G-P4YL9CKTRM"
    // YourCode
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


   // // read data
//    var count =0;
   
 
//    firebase.database().ref("users/user3").on("value", (sanpshot) => {
//       // console.log(sanpshot.val());
//       count=sanpshot.val().balance;
//       console.log(count);

      
//     });

  // // Add data
  // let obj = {
  //   // walletAddress:0,
  //   balance:count
  // };
  // firebase.database().ref("users/user3").set(obj);

 

 // update data
//   let newupdateddata = {
//     name: "TF0",
//   };
//   firebase.database().ref("users/user3").update(newupdateddata);

  // remove data
//   firebase.database().ref("users/user3").remove();


// var btn = document.getElementById("btn");
// var disp = document.getElementById("display");
// btn.onclick = function () {
//     count+=0.01;
//     disp.innerHTML = count;
//        let newupdateddata = {
//     balance: count,
//   };
//   firebase.database().ref("users/user3").update(newupdateddata);
//}
