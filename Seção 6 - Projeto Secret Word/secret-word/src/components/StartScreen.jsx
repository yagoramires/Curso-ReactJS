import React from 'react';
import styles from './StartScreen.module.css';

const StartScreen = ({ startGame }) => {
  return (
    <div className={styles.startContainer}>
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar o jogo!</p>
      <button onClick={startGame}>Começar</button>
    </div>
  );
};

export default StartScreen;
