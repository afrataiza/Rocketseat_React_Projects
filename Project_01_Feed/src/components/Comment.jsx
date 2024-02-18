import { HandsClapping, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({ author, content, createdAt}) {
  return (
    <div className={styles.comment}>
      < Avatar hasBorder={false} src={author.image} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.commentInfo}>
              <strong>{`${author.firstName} ${author.lastName}`}</strong>
              <time
                title={createdAt}
                dateTime={createdAt}>
                {createdAt}
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>
            {content}
          </p>
        </div>
        <footer>
          <button>
            <HandsClapping size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
