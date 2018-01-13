// how can you only allow a player to see and interact with their buttons, and
    // only on their turn???
// how can you only have changes displayed (rps selection before reveal) for
    //the person who chose it? 
        // save selection to firebase but firebase doesn't do anything else to
            //site at that time-- regular js there?

// 1. Get 2 players online and saved as nodes in firebase
// Player is asked for their name, or told game is full if already 2
    // assigned p1 or p2
    // update firebase with player name, number
    // update html with name
    // once 2, update turn and button options show

// 2. Gameplay
    // Turn node to show if it's p1 or p2 turn 
        // Record players' choices
    // Logic to determine win
        // how?? javascript function triggered by addChild/value?
    // Display choices and winner
    // Increase wins and losses accordingly
        // saved in player node-- set() for wins/losses keys?
    // Reset buttons and play the next round

// 4. Chat 
    // Save usernames
    // Push messages to firebase
        // Look at Saturday class and online resources to start this

//=======================================================


// Initialize Firebase
var config = {
    apiKey: "AIzaSyAegjt31NE8XeeONMMmt7akANPi26aTpaM",
    authDomain: "rps-game-41b05.firebaseapp.com",
    databaseURL: "https://rps-game-41b05.firebaseio.com",
    projectId: "rps-game-41b05",
    storageBucket: "",
    messagingSenderId: "1042427264201"
};

firebase.initializeApp(config);

var database = firebase.database();
var playersRef = database.ref("/players");

// var connectionsRef = database.ref("/connections");
// var connectedRef = database.ref(".info/connected");
// connectedRef.on("value", function(snap) {
//     if (snap.val()) {
//         var con = connectionsRef.push(true);
//         con.onDisconnect().remove();
//     }
// });


// Add player on submit button
$("#add-name-button").on("click", function(){
    event.preventDefault();
    var name = $("#name-input").val();
    var player = {
        name: name,
        losses: 0,
        wins: 0,
    };
    // When a player is added, see if they're 1st or 2nd
    playersRef.once("value").then(function(snapshot){
        var playerNumber = snapshot.numChildren();
        if (playerNumber == 0) {
            playersRef.child("1").set(player);
        } 
        else if (playerNumber == 1) {
            playersRef.child("2").set(player);
        } 
        else {
            console.log("game full")
        }
    });
});

// When a player is added, put their name in panel headings
playersRef.on("child_added", function(snapshot, prevChildKey){
    playerObject = snapshot.val();
    console.log(prevChildKey);
    if (prevChildKey === "1") {
        $("#p2-heading").text("Player 2: " + playerObject.name);
    } else {
        $("#p1-heading").text("Player 1: " + playerObject.name);
    }
});






