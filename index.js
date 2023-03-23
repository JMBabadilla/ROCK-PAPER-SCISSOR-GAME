function play(playerMove) {
	var moves = ['rock', 'paper', 'scissors'];
	var computerMove = moves[Math.floor(Math.random() * moves.length)];
	
	var result;
	if (playerMove === computerMove) {
		result = 'Tie!';
	} else if (
		(playerMove === 'rock' && computerMove === 'scissors') ||
		(playerMove === 'paper' && computerMove === 'rock') ||
		(playerMove === 'scissors' && computerMove === 'paper')
	) {
		result = 'You win!';
	} else {
		result = 'Computer wins!';
	}
	
	document.getElementById('result').innerHTML = `You played ${playerMove}, computer played ${computerMove}. ${result}`;
}
