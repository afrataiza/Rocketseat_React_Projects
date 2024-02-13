import { Header } from "./components/Header/Header";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Sidebar />
        <section>Feed</section>
      </main>
    </>
  )
}

export default App
