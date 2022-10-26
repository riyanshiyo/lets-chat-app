// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}

function send(){
    msg=document.getElementById("msg").value
    firebase.database().ref(room_name).push({
        name:user_name,
message:msg,
like:0
    })
    document.getElementById("msg").value=""
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val();
     if(childKey != "purpose") { firebase_message_id = childKey;
         message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message=message_data['message'];
like = message_data['like'];
name_with_tag= "<h4>"+name+"</h4>";
message_with_tag = "<h4 class='message_h4'> "+ message + "</h4>"; like_button="<button class= ' btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>Likes :"+ like +"</button>";
row = name_with_tag +message_with_tag +like_button; document.getElementById("output").innerHTML += row;

 } }); }); }
getData();


function updateLike (message_id)
{
console.log("clicked on like button -" + message_id);
button_id = message_id;
 likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
   console.log(updated_likes);

firebase.database().ref(room_name). child (message_id).update({
like : updated_likes
}
);
}

function logout() {
    localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
     }