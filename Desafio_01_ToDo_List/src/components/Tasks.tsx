import { PlusCircle } from 'phosphor-react';
import styles from './Tasks.module.css';
import { Task } from './Task';
import { Empty } from './Empty';

export function Tasks() {
  const tasks = [1];
  return (
    <div className={styles.tasks}>
      <form className={styles.addTask}>
        <input
          type="text"
          placeholder="Adicionar nova tarefa"
        />
        <button type="submit">
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
      <div className={styles.tasksList}>
        <div className={styles.tasksProgress}>
          <p className={styles.tasksCreated}>
            Tarefas Criadas <span>0</span>
          </p>
          <p className={styles.tasksCompleted}>
            Concluídas <span>0</span>
          </p>
        </div>
        <div className={styles.tasksContainer}>
          {tasks.length === 0 ? <Empty /> : <Task />}
        </div>
      </div>
    </div>
  );
}
