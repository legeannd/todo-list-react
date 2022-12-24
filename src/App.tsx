import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import styles from './App.module.css';
import { Tasks } from './components/Tasks';

import './global.css';
import { TaskProps } from './components/Task';

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

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
        <Tasks tasks={tasks} onMarkAsDone={handleMarkTaskAsDone} onDelete={handleDeleteTask} doneTasks={'0'} />
      </div>
    </>
  )
}