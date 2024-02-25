import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task() {
  return (
    <div className={styles.task}>
      <input
        type="checkbox"
        id="task"
      />
      <label htmlFor="task">Tarefa 1</label>
      <Trash size={24} />
    </div>
  );
}
