import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps {
  title: string;
  isCompleted: boolean;
  id: number;
  handleToggleTask: (id: number) => void;
  createdAt: string;
  handleRemoveTask: (id: number) => void;
}

export function Task({
  title,
  isCompleted,
  id,
  handleToggleTask,
  createdAt,
  handleRemoveTask,
}: TaskProps) {
  return (
    <form className={styles.task}>
      <div>
        <input
          type="checkbox"
          id="task"
          checked={isCompleted}
          onChange={() => handleToggleTask(id)}
        />
        <label htmlFor="task">{title}</label>
        <button
          type="button"
          onClick={() => handleRemoveTask(id)}>
          <Trash size={24} />
        </button>
      </div>
      <span>{createdAt}</span>
    </form>
  );
}
