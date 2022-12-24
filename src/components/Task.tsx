import styles from './Task.module.css';
import { Trash, Circle, CheckCircle } from 'phosphor-react';

interface TaskProps {
  isDone: boolean;
  content: string;
}

export function Task({ isDone, content }: TaskProps) {
  return (
    <div className={styles.task}>
      <div>
        <button>
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
      <button>
        <Trash size={24} color="#808080" />
      </button>
    </div>
  );
}