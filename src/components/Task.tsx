import styles from './Task.module.css';
import { Trash, Circle, CheckCircle } from 'phosphor-react';


export interface TaskProps {
  isDone: boolean;
  content: string;
  id: string;
  onMarkAsDone: (id: string) => void;
  onDelete: (id: string) => void;
}

export function Task({ isDone, content, id, onMarkAsDone, onDelete }: TaskProps) {
  return (
    <div className={styles.task}>
      <div>
        <button onClick={() => onMarkAsDone(id)}>
          {isDone ? (
            <CheckCircle size={24} color="#5e60ce" weight='fill' />
            ) : (
              <Circle size={24} color="#4ea8de" weight='bold' />
          )}
        </button>
        <span className={isDone ? styles.doneTask : styles.newTask}>
          {content}
        </span>
      </div>
      <button onClick={() => onDelete(id)}>
        <Trash size={24} color="#808080" />
      </button>
    </div>
  );
}