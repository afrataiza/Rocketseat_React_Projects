import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ posts, comments, authors }) {
  const findAuthor = (authorId) => {
    if (authors.length === 0) {
      return;
    }
    const author = authors.find((author) => author.id === authorId);
    return author;
  };

  const filterComments = (postId) => {
    if (comments.length === 0) {
      return;
    }
    const filteredComments = comments.filter((comment) => comment.postId === postId);
    return filteredComments || [];
  };

  return (
    <>
      {posts.length > 0 && posts.map((post) => {
        return (
          <article
            className={styles.post}
            key={post.id}>
            <header>
              <div className={styles.author}>
                <Avatar src={findAuthor(post.authorId).image} />
                <div className={styles.authorInfo}>
                  <strong>{`${findAuthor(post.authorId).firstName} ${
                    findAuthor(post.authorId).lastName
                  }`}</strong>
                  <span>{findAuthor(post.authorId).role}</span>
                </div>
              </div>
              <time
                title={post.publishedAt}
                dateTime={post.publishedAt}>
                Publicado há {post.publishedAt}
              </time>
            </header>
            <div className={styles.content}>
              <p>{post.title}</p>
              <p>{post.content}</p>
              <p>
                <a href={post.link}>{post.link}</a>
              </p>
              <p>
                {post.tags.map((tag) => {
                  return (
                    <a
                      key={tag}
                      href={`#${tag}`}>
                      {`#${tag}`}{' '}
                    </a>
                  );
                })}
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
              {filterComments(post.id).map((comment) => {
                return (
                  <Comment
                    key={comment.id}
                    author={findAuthor(comment.authorId)}
                    content={comment.content}
                    createdAt={comment.createdAt}
                  />
                );
              })}
            </div>
          </article>
        );
      })}
    </>
  );
}
