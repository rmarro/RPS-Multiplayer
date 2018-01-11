// how can you only allow a player to interact with their buttons???
// how can you only have changes displayed (rps selection before reveal) for
    //the person who chose it? 
        // save selection to firebase but firebase doesn't do anything else to
            //site at that time-- regular js there?

// 1. Get 2 players online and saved as nodes in firebase
// Player is asked for their name, or told game is full if already 2
    // how restrict online presense to 2?
    // assigned p1 or p2
    // update firebase with player name, number
    // update html with name, waiting for other player if not 2
    // once 2, "let's play!" and buttons show

// 2. Gameplay
    // Record players' choices
        // where? under their player node? in a new round 1 node?
    // Logic to determine win
        // how?? javascript function triggered by addChild/value
    // Display choices and winner
    // Increase score
        // saved in player node? set() for score key?
    // Increase round
    // Reset buttons and play the next round

// 3. Game over
    // When 3 rounds are done, look at scores in firebase
    // whoever's is higher wins
    // display message
    // allow play again if both players select

// 4. Chat 
    // Save usernames
    // Push messages to firebase
        // Look at Saturday class and online resources to start this