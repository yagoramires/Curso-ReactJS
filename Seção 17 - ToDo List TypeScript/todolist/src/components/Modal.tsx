import React from 'react';
import styles from './Modal.module.css';

import { BiX } from 'react-icons/bi';

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const toggleModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector('#modal');
    modal!.classList.toggle('hide');
  };

  return (
    <div id='modal' className='hide'>
      <div className={styles.fade} onClick={toggleModal}></div>
      <div className={styles.modal}>
        <span className={styles.closeModal}>
          <BiX onClick={toggleModal} />
        </span>
        <h2>Texto</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
