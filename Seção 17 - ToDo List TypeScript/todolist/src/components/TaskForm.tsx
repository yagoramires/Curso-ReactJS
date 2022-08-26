import styles from './TaskForm.module.css';

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

import { ITask } from '../interfaces/Task';

type Props = {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficulty: number): void;
};

const TaskForm = ({
  btnText,
  taskList,
  task,
  setTaskList,
  handleUpdate,
}: Props) => {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [difficulty, setDifficulty] = useState(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      if (isNaN(parseInt(e.target.value))) {
        return;
      }
      setDifficulty(parseInt(e.target.value));
    }
  };
  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
    } else {
      const id = Math.floor(Math.random() * 1000);

      const newTask = {
        id,
        title,
        difficulty,
      };

      setTaskList!([...taskList, newTask]);
      setTitle('');
      setDifficulty(0);
    }
  };

  return (
    <form className={styles.form} onSubmit={addTaskHandler}>
      <div className={styles.input_container}>
        <label htmlFor='title'>Título:</label>
        <input
          type='text'
          name='title'
          placeholder='Título da tarefa'
          value={title}
          onChange={handleChange}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor='difficulty'>Dificuldade:</label>
        <input
          type='text'
          name='difficulty'
          placeholder='Dificuldade da tarefa'
          value={difficulty}
          onChange={handleChange}
        />
      </div>
      <input type='submit' value={btnText} />
    </form>
  );
};

export default TaskForm;
