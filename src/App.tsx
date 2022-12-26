import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import styles from './App.module.css';
import { Tasks } from './components/Tasks';

import './global.css';

export interface TaskObject {
  content: string;
  id: string;
  isDone: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskObject[]>([]);
  const [doneTasks, setDoneTasks] = useState('0');

  useEffect(() => {
    const savedTasks = localStorage.getItem('todo-tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, [])

  useEffect(() => {
    const doneTasksNumber = tasks.reduce((acc, task) => {
      if (task.isDone) {
        return acc + 1;
      }

      return acc;
    }, 0);

    if (tasks.length === 0) {
      setDoneTasks('0');
      localStorage.removeItem('todo-tasks');
    } else {
      setDoneTasks(`${doneTasksNumber} of ${tasks.length}`);
      localStorage.setItem('todo-tasks', JSON.stringify(tasks));
    }

  }, [tasks]);

  function handleCreateTask(taskValue: string) {

    if (taskValue === '') {
      return;
    }

    const newTask = {
      isDone: false,
      content: taskValue,
      id: uuidv4(),
    }
    setTasks([newTask, ...tasks]);
  }

  function handleMarkTaskAsDone(id: string) {
    const allTasksWithChangedDone = tasks.map((task) => {
      if (task.id === id) {
        return {...task, isDone: true}
      }

      return task;
    });

    const tasksWithoutDoneTasks = allTasksWithChangedDone.filter(task => !task.isDone);
    const tasksWithoutUndoneTasks = allTasksWithChangedDone.filter(task => task.isDone);
 
    setTasks([...tasksWithoutDoneTasks, ...tasksWithoutUndoneTasks]);
  }

  function handleDeleteTask(id: string) {
    const tasksWithoutDeletedTask = tasks.filter(task => task.id !== id);
    setTasks(tasksWithoutDeletedTask);
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