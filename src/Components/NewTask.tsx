import styles from './NewTask.module.css'

export function NewTask() {
  return (
    <div>
      <input type="text" className={styles.input}/>
      <button type="button"></button>
    </div>
  )
}