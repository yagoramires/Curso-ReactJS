import React, { useRef } from 'react';
import { useState } from 'react';
import styles from './Game.module.css';

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState('');
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);
    setLetter('');
    letterInputRef.current.focus();
  };

  return (
    <div className={styles.gameContainer}>
      <p className={styles.points}>
        Pontuação: <span>{score}</span>
      </p>

      <h2 className={styles.title}>Advinhe a palavra:</h2>
      <p className={styles.tip}>
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </p>
      <p className={styles.tries}>
        Você ainda tem <span>{guesses}</span> tentativas
      </p>
      <div className={styles.wordContainer}>
        {letters.map((letter, i) =>
          guessedLetters.includes(
            letter.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
          ) ? (
            <span key={i} className={styles.letter}>
              {letter}
            </span>
          ) : (
            <span key={i} className={styles.blankSquare}></span>
          ),
        )}
      </div>

      <div className={styles.letterContainer}>
        <p>Tente advinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='letter'
            maxLength={1}
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button type='submit'>Tentar!</button>
        </form>

        <div className={styles.wrongLettersContainer}>
          <p>Letras já utilizadas:</p>
          {wrongLetters.map((letter, i) => (
            <span key={i}>{letter.toUpperCase()}, </span>
          ))}
        </div>
      </div>
      {/* <button onClick={verifyLetter}>End</button> */}
    </div>
  );
};

export default Game;
