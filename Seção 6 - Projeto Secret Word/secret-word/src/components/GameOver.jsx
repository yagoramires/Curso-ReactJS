import React from 'react';
import styles from './GameOver.module.css';

const GameOver = ({ retry, score }) => {
  return (
    <div className={styles.gameOverContainer}>
      <h1>Game Over !</h1>
      <p>
        Sua pontuação foi de: <span>{score}</span>
      </p>
      <button onClick={retry}>Finalizar Jogo</button>
    </div>
  );
};

export default GameOver;
