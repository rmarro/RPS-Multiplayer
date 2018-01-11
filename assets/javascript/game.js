// how can you only allow a player to see and interact with their buttons, and
    // only on their turn???
// how can you only have changes displayed (rps selection before reveal) for
    //the person who chose it? 
        // save selection to firebase but firebase doesn't do anything else to
            //site at that time-- regular js there?

// 1. Get 2 players online and saved as nodes in firebase
// Player is asked for their name, or told game is full if already 2
    // how restrict online presense to 2?
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