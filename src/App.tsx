import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import styles from './App.module.css';
import { Tasks } from './components/Tasks';

import './global.css';
import { TaskProps } from './components/Task';

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [doneTasks, setDoneTasks] = useState('0');

  useEffect(() => {
    const doneTasksNumber = tasks.reduce((acc, task) => {
      if (task.isDone) {
        return acc + 1;
      }
    }, 0);

    setDoneTasks(`${doneTasksNumber ?? 0} de ${tasks.length}`)
  }, [tasks])
  

  function handleCreateTask(taskValue: string) {
    const newTask = {
      isDone: false,
      content: taskValue,
      id: uuidv4(),
    }
    setTasks([...tasks, newTask])
  }

  function handleMarkTaskAsDone() {
    console.log('check');
  }

  function handleDeleteTask() {
    console.log('delete');
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <NewTask onCreate={handleCreateTask} />
        <Tasks tasks={tasks} onMarkAsDone={handleMarkTaskAsDone} onDelete={handleDeleteTask} doneTasks={doneTasks} />
      </div>
    </>
  )
}