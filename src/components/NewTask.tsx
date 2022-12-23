import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';

export function NewTask() {
  return (
    <div className={styles.newTask}>
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa" 
        className={styles.input}
      />
      
      <button className={styles.button}>
        Criar
        <PlusCircle size={16} color="white" weight="bold"/>
      </button>
    </div>
  )
}