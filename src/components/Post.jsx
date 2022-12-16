import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post () {
    return (
        <article className={styles.post}>
            <header className={styles.postHeader}>
                <div className={styles.author}>
                    <img src="https://github.com/CarlosFariass.png" />
                    <div className={styles.authorInfo}>
                        <strong>Carlos Farias</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
            
                <time title='16 de dezembro de 2022' dateTime='2022-12-16 12:40:13'>Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉{' '}
                    <a href=''>jane.design/doctorcare</a>
                </p>
                <p>
                    <a href=''>#novoprojeto</a>
                    <a href=''>#nlw </a>           
                    <a href=''>#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                    <strong>Deixe um comentário</strong>

                    <textarea 
                        placeholder='Deixe um comentário'
                    />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}