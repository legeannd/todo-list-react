import styles from './Tasks.module.css';

import clipboard from '../assets/clipboard.png';

export function Tasks () {
  return (
    <main className={styles.tasks}>
      <header className={styles.info}>
        <div className={styles.createdTasks}>
          <span>Tarefas criadas</span>
          <span>0</span>
        </div>
        <div className={styles.finishedTasks}>
          <span>Concluídas</span>
          <span>0</span>
        </div>
      </header>
      <article className={styles.empty}>
        <img src={clipboard} alt="Clipboard" />
        <div>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      </article>
    </main>
  )
}