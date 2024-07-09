// class = a blueprint for creating objects
//          define what properties and methods they have
//          use a constructor for unique properties

class Player{
    score = 0;

    pause(){
        console.log("You pause the game");
    }
    exit(){
        console.log("You exited the game");
    }
}

const player1 = new Player();
const player2 = new Player();

player1.score += 3;
player2.score += 1;

console.log("Player 1 score:",player1.score);
console.log("Player 2 score:", player2.score);
player1.exit();