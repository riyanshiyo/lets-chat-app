var firebaseConfig = {
      apiKey: "AIzaSyA9xjJHxMvrKfbVlAn_RnhwnrRv3UTg3ug",
      authDomain: "kwitter-54a74.firebaseapp.com",
      databaseURL: "https://kwitter-54a74-default-rtdb.firebaseio.com",
      projectId: "kwitter-54a74",
      storageBucket: "kwitter-54a74.appspot.com",
      messagingSenderId: "41142341573",
      appId: "1:41142341573:web:ed2951df5d1e5defe345ac"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function addRoom(){
      room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
})
localStorage.setItem("room_name",room_name)
window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();
function redirectToRoomName(name){
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}