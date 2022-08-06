import { useEffect, useState, useCallback } from 'react';
import './App.css';

import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

import { wordsList } from './data/data';

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' },
];

function App() {
  const guessesQuantity = 5;

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQuantity);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    //pick a random category
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];
    // console.log(category);

    //pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];
    // console.log(word);

    return { word, category };
  }, [words]);

  const startGame = useCallback(() => {
    const { word, category } = pickWordAndCategory(); //destructuring object

    let wordLetters = word.split(''); //create an array of letters
    wordLetters = wordLetters.map((letter) => letter.toLowerCase()); //set all letters to lowercase

    //fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name); //startGame
  }, [pickWordAndCategory]);

  const verifyLetter = (letter) => {
    const normalizedLetter = letter
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
    //check if letter has already been utilized
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    )
      return;

    const normalLetters = letters.map((letter) =>
      letter.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
    );

    // push a guessed letter or remove a guess
    if (normalLetters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const resetStates = () => {
    setWrongLetters([]);
    setGuessedLetters([]);
  };

  // check if guesses ended
  useEffect(() => {
    if (guesses <= 0) {
      //reset all states
      resetStates();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // check win condition
  useEffect(() => {
    const normalLetters = letters.map((letter) =>
      letter.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
    );
    const uniqueLetters = [...new Set(normalLetters)];

    // win condition
    if (guessedLetters.length === uniqueLetters.length) {
      //add score
      setScore((actualScore) => (actualScore += 100));
      resetStates();
      setGuesses(guessesQuantity);

      //restart game with new word
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  const retry = () => {
    setGuesses(guessesQuantity);
    setScore(0);

    setGameStage(stages[0].name);
  };

  return (
    <div className='App'>
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === 'end' && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
