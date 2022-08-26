import { useState } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';

import styles from './App.module.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import { ITask } from './interfaces/Task';
import Modal from './components/Modal';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskUpdate, setTaskUpdate] = useState<ITask | null>(null);

  const toggleModal = (): void => {
    const modal = document.querySelector('#modal');
    modal!.classList.toggle('hide');
  };

  const deleteTask = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const editTask = (task: ITask): void => {
    toggleModal();
    setTaskUpdate(task);
    console.log('clicou');
  };

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updateTask: ITask = { id, title, difficulty };

    const updatedItems = taskList.map((task) => {
      return task.id === updateTask.id ? updateTask : task;
    });

    setTaskList(updatedItems);
    toggleModal();
  };

  return (
    <div className='App'>
      <Modal
        children={
          <TaskForm
            btnText={'Atualizar'}
            taskList={taskList}
            task={taskUpdate}
            handleUpdate={updateTask}
          />
        }
      />
      <Header />
      <main className={styles.main}>
        <div>
          <TaskForm
            btnText={'Enviar'}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>

        <div>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
