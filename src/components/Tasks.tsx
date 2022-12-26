import styles from './Tasks.module.css';

import clipboard from '../assets/clipboard.png';
import { Task, TaskProps } from './Task';
import { TaskObject } from '../App';

interface TasksProps {
  tasks: TaskObject[];
  doneTasks: string;
  onMarkAsDone: (id: string) => void;
  onDelete: (id: string) => void;
}

export function Tasks({ tasks, doneTasks, onMarkAsDone, onDelete }: TasksProps) {

  return (
    <main className={styles.tasks}>
      <header className={styles.info}>
        <div className={styles.createdTasks}>
          <span>Created tasks</span>
          <span>{tasks.length}</span>
        </div>
        <div className={styles.finishedTasks}>
          <span>Completed</span>
          <span>{doneTasks}</span>
        </div>
      </header>

      {tasks.length === 0 ? (
        <article className={styles.empty}>
          <img src={clipboard} alt="Clipboard" />
          <div>
            <strong>You don't have tasks registered yet</strong>
            <span>Create tasks and organize your to-do items</span>
          </div>
        </article>
      ) : (
        <article className={styles.tasksList}>
          {tasks.map(task => (
            <Task 
              isDone={task.isDone} 
              content={task.content} 
              id={task.id} 
              key={task.id} 
              onMarkAsDone={onMarkAsDone}
              onDelete={onDelete}
            />
          ))}
        </article>
      )}

    </main>
  )
}