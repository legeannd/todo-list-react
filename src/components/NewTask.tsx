import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, KeyboardEvent, useState } from 'react';

interface NewTaskProps {
  onCreate: (content: string) => void;
}

export function NewTask({ onCreate }: NewTaskProps) {
  const [taskValue, setTaskValue] = useState('');

  function handleCreateTaskText (event: ChangeEvent<HTMLInputElement>) {
    setTaskValue(event.target.value)
  }
  
  function handleOnKeyDown (event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      onCreate(taskValue)
      setTaskValue('')
    }
  }

  function handleClickOnCreateButton () {
    onCreate(taskValue)
    setTaskValue('')
  }

  return (
    <div className={styles.newTask}>
      <input 
        type="text" 
        value={taskValue}
        onChange={handleCreateTaskText}
        onKeyDown={handleOnKeyDown}
        placeholder="Add a new task" 
        className={styles.input}
      />
      
      <button className={styles.button} onClick={handleClickOnCreateButton}>
        Create
        <PlusCircle size={16} color="white" weight="bold"/>
      </button>
    </div>
  )
}