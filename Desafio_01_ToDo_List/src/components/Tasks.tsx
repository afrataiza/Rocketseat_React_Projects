import { PlusCircle } from 'phosphor-react';
import styles from './Tasks.module.css';
import { Task } from './Task';
import { Empty } from './Empty';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
  createdAt: string;
}

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [isAddTaskDisabled, setIsAddTaskDisabled] = useState(true);

  useEffect(() => {
    const storegedTasks = localStorage.getItem('tasks');
    if (storegedTasks !== null) {
      setTasks(JSON.parse(storegedTasks));
    }
  }, []);

  const handleAddTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = event.currentTarget.querySelector('input');

    if (input !== null && input.value !== '') {
      const newTask = {
        id: tasks.length + 1,
        title: input.value,
        isCompleted: false,
        createdAt: new Date().toLocaleDateString('pt-BR', {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        }),
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
      input.value = '';
      setIsAddTaskDisabled(true);
      toast.success('Tarefa criada com sucesso!', {});
    }
  };

  const handleRemoveTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    toast.error('Tarefa removida com sucesso!', {});
  };

  const handleToggleTask = (id: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  useEffect(() => {
    const filteredTasks = tasks.filter((task) => task.isCompleted).length;
    setCompletedTasks(filteredTasks);
  }, [tasks]);


  return (
    <div className={styles.tasks}>
      <form
        className={styles.addTask}
        onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Adicionar nova tarefa"
          onChange={(event) => setIsAddTaskDisabled(event.target.value === '')}
        />
        <button
          type="submit"
          disabled={isAddTaskDisabled}>
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
      <div className={styles.tasksList}>
        <div className={styles.tasksProgress}>
          <p className={styles.tasksCreated}>
            Tarefas Criadas <span>{tasks.length}</span>
          </p>
          <p className={styles.tasksCompleted}>
            Concluídas <span>{`${completedTasks} de ${tasks.length}`}</span>
          </p>
        </div>
        <div className={styles.tasksContainer}>
          {tasks.length === 0 ? (
            <Empty />
          ) : (
            tasks.map((task) => (
              <Task
                key={task.id}
                id={task.id}
                handleToggleTask={handleToggleTask}
                title={task.title}
                isCompleted={task.isCompleted}
                createdAt={task.createdAt}
                handleRemoveTask={handleRemoveTask}
              />
            ))
          )}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnHover
        pauseOnFocusLoss
        draggable
        theme='dark'
      />
    </div>
  );
}
