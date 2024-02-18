import { Header } from "./components/Header";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch('https://my-json-server.typicode.com/afrataiza/posts_mock_api/posts');
      const data = await response.json();
      setPosts(data);
    }
    getPosts();

    const getComments = async () => {
      const response = await fetch('https://my-json-server.typicode.com/afrataiza/posts_mock_api/comments');
      const data = await response.json();
      setComments(data);
    };
    getComments();

    const getAuthors = async () => {
      const response = await fetch('https://my-json-server.typicode.com/afrataiza/posts_mock_api/authors');
      const data = await response.json();
      setAuthors(data);
    };
    getAuthors();
  }, []);

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Sidebar />
        <section>
          {

          }
          <Post posts={posts} comments={comments} authors={authors} />
        </section>
      </main>
    </>
  )
}

export default App
