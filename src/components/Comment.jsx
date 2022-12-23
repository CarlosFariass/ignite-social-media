import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'


export function Comment({content, onDeleteComment}) {

    function handleDeleteComment(){
        onDeleteComment(content);
    }


    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/CarlosFariass.png' />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorTime}>
                            <time title='16 de dezembro de 2022' dateTime='2022-12-16 12:40:13'>Cerca de 2h atrás </time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}