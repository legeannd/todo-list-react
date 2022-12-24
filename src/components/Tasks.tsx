import styles from './Tasks.module.css';

import clipboard from '../assets/clipboard.png';
import { Task, TaskProps } from './Task';
import { TaskObject } from '../App';

interface TasksProps {
  tasks: TaskObject[];
  doneTasks: string;
  onMarkAsDone: (id: string) => void;
  onDelete: () => void;
}

export function Tasks({ tasks, doneTasks, onMarkAsDone, onDelete }: TasksProps) {

  return (
    <main className={styles.tasks}>
      <header className={styles.info}>
        <div className={styles.createdTasks}>
          <span>Tarefas criadas</span>
          <span>{tasks.length}</span>
        </div>
        <div className={styles.finishedTasks}>
          <span>Concluídas</span>
          <span>{doneTasks}</span>
        </div>
      </header>

      {tasks.length === 0 ? (
        <article className={styles.empty}>
          <img src={clipboard} alt="Clipboard" />
          <div>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
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