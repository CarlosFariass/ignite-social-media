import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';


export function Post ({author, publishedAt, content}) {
    const [comments, setComments] = useState(['Post top, hein?'])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLL 'as' HH:mm'h'", {
        locale: ptBr,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true
    })

    function handleAddComments () {
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(){
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete){
        const newListOfCommentWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(newListOfCommentWithoutDeletedOne);
    }

    //if textarea has no letter the btn publish will be disabled//
    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header className={styles.postHeader}>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
            
                <time 
                    title={publishedDateFormatted} 
                    dateTime={publishedAt.toISOString()}>
                        {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type == 'link') {
                        return <p key={line.content}><a href='#'>{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleAddComments} className={styles.commentForm}>
                    <strong>Deixe um coment??rio</strong>

                    <textarea 
                        name='comment'
                        placeholder='Deixe um coment??rio'
                        onChange={handleNewCommentChange}
                        value={newCommentText}
                        required
                    />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment}
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}