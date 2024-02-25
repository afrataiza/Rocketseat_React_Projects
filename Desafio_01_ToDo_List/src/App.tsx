import { Header } from './components/Header';
import styles from './App.module.css';
import { Tasks } from './components/Tasks';

function App() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Tasks />
      </main>
    </>
  );
}

export default App;
