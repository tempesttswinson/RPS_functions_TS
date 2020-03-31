

//declare variables to keep track of wins for each player
var player1Win = 0;
var player2Win = 0;


// Define a hands array with the values 'rock', 'paper', and 'scissors';
hands = ['rock', 'paper', 'scissors'];

// Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3)
function getHand(){
if(parseInt ((Math.random()*10)%3) < .34 ){
	return hands[0];
}else if (parseInt ((Math.random()*10)%3) < .67 ){
	return hands[1];
} else{
	return hands[2];
}
}
//console.log (getHand());

//Define two objects for two players. Each player has name and getHand() properties.
var Player1 = {
name: 'Player1' ,

choice: getHand()
}

var Player2 = {
name: 'Player2' ,

choice: getHand()
}

// console.log(Player1.choice);
// console.log(Player2.choice);

// Define a function called playRound() that
// Takes two player objects as arguments
// Gets hands from each
// Determines the winner
// Logs the hands played and name of the winner.
// If its a tie, log the hands played and "it's a tie".
// Returns the winner object (null if no winner)

function playAround(){

	if (Player1.choice === Player2.choice){
		console.log (Player1.name + "'s choice: "+ Player1.choice +"\n" + Player2.name + "'s choice: " + Player2.choice + "\n It's A Tie!");
	}

	if (Player1.choice === 'rock'){
		if (Player2.choice === 'paper') {
			console.log (Player1.name + "'s choice: "+ Player1.choice + "\n" + Player2.name + "'s choice: " + Player2.choice + "\n" + Player2.name + " WINS!");
			player2Win ++;

		}else{
			console.log (Player1.name + "'s choice: "+ Player1.choice + "\n" + Player2.name + "'s choice: " + Player2.choice + "\n" + Player1.name + " WINS!");
			player1Win ++;
		}
	}

	if (Player1.choice === 'paper'){
		if (Player2.choice === 'scissors') {
			console.log (Player1.name + "'s choice: "+ Player1.choice + "\n" + Player2.name + "'s choice: " + Player2.choice + "\n" + Player2.name + " WINS!");
				player2Win ++;

		}else{
			console.log (Player1.name + "'s choice: "+ Player1.choice + "\n" + Player2.name + "'s choice: " + Player2.choice + "\n" + Player1.name + " WINS!");
			player1Win ++;
		}
	}


	if (Player1.choice === 'scissors'){
		if (Player2.choice === 'rock') {
			console.log (Player1.name + "'s choice: "+ Player1.choice + "\n" + Player2.name + "'s choice: " + Player2.choice + "\n" + Player2.name + " WINS!");
			player2Win ++;

		}else{
			console.log (Player1.name + "'s choice: "+ Player1.choice + "\n" + Player2.name + "'s choice: " + Player2.choice + "\n" + Player1.name + " WINS!");
			player1Win ++;
		}
	}
}

console.log(playAround());
