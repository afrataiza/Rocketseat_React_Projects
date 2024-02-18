import { HandsClapping, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
  return (
    <div className={styles.comment}>
      < Avatar hasBorder={false} src="https://github.com/afrataiza.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.commentInfo}>
              <strong>Afra Taíza</strong>
              <time
                title="13 de Fevereiro às 15:26h"
                dateTime="2024-02-13 15:26:30">
                Cerca de 2 horas atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            facilisis
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
