import { useContext } from 'react';
import { AppContext } from '../App';

const GameOver = () => {
	const { gameOver, correctWord, currAttempt } = useContext(AppContext);

	return (
		<>
			<div className="gameOver">
				<h3>
					{gameOver.guessedWord
						? 'You guessed the word.'
						: 'You failed'}
				</h3>
				<h1>The Word is: {correctWord}</h1>
				{gameOver.guessedWord && (
					<h3>You guessed in {currAttempt.attempt} attempts.</h3>
				)}
			</div>
		</>
	);
};

export default GameOver;
