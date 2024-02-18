import { Header } from "./components/Header";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

function App() {

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Sidebar />
        <section>
          <Post />
        </section>
      </main>
    </>
  )
}

export default App
