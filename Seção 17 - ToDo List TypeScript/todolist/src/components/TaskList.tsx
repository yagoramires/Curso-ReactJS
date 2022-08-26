import styles from './TaskList.module.css';
import { ITask } from '../interfaces/Task';

import { BiTrash, BiPencil } from 'react-icons/bi';

type Props = {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask): void;
};

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
  return (
    <ul className={styles.list}>
      {taskList.length > 0 &&
        taskList.map((task) => (
          <li key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h3>{task.title}</h3>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <BiPencil onClick={() => handleEdit(task)} />
              <BiTrash
                onClick={() => {
                  handleDelete(task.id);
                }}
              />
            </div>
          </li>
        ))}
      {taskList.length === 0 && <p>Não há tarefas cadastradas!</p>}
    </ul>
  );
};

export default TaskList;
