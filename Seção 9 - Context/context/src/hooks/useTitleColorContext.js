import { useContext } from 'react';
import { TitleColorContext } from '../context/TitleColorContext';

export const useTitleColorContext = () => {
  const context = useContext(TitleColorContext);

  if (!context) {
    console.log('Houve um erro ao inicializar o context!');
  }

  return context;
};
