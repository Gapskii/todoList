import { Header } from "./Components/Header";
import { NewTask } from "./Components/NewTask";
import styles from "./App.module.css"

import './global.css'

export default function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <NewTask />
      </div>
    </>
  )
}
