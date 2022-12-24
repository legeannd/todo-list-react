import styles from './Task.module.css';
import { Trash, Circle, CheckCircle } from 'phosphor-react';


export interface TaskProps {
  isDone: boolean;
  content: string;
  id: string;
  onMarkAsDone?: () => void;
  onDelete?: () => void;
}

export function Task({ isDone, content, onMarkAsDone, onDelete }: TaskProps) {
  return (
    <div className={styles.task}>
      <div>
        <button onClick={onMarkAsDone}>
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
      <button onClick={onDelete}>
        <Trash size={24} color="#808080" />
      </button>
    </div>
  );
}