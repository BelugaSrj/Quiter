var firebaseConfig = {
    apiKey: "AIzaSyDOal0Gy3oCnZXN33gDorqIJOUp66kdLn8",
    authDomain: "quitter-508c8.firebaseapp.com",
    databaseURL: "https://quitter-508c8-default-rtdb.firebaseio.com",
    projectId: "quitter-508c8",
    storageBucket: "quitter-508c8.appspot.com",
    messagingSenderId: "502547160710",
    appId: "1:502547160710:web:456326695ec84e6f9efb07"
  };
firebase.initializeApp(firebaseConfig);

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
    
    localStorage.setItem("room_name", room_name);

    window.location = "quitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name -" + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
     document.getElementById("output").innerHTML += row;
    
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "quitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "Quitter.html";
}