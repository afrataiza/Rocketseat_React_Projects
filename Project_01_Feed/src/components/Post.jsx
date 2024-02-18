import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/afrataiza.png" />
          <div className={styles.authorInfo}>
            <strong>Afra Taíza</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time
          title="13 de Fevereiro de 2024"
          dateTime="2024-02-13 14:54:25">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          facilisis
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium a
          dolore eaque excepturi nisi. Officia quo a cupiditate ex accusamus
          quidem quam minus suscipit laboriosam temporibus! Rerum explicabo cum
          repellendus?
        </p>
        <p>
          <a href="#">afrataiza.web/projects</a>
        </p>
        <p>
          <a href="#">#desenvolvimento #tecnologia</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
