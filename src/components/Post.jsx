import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Comment } from "./Comment"
import styles from "./Post.module.css"
import { Avatar } from "./Avatar"


export function Post({author, publishedAt}) {
   const publishedDateFormatted = format( publishedAt,"d 'de' LLLL 'as' HH:mm'h' ", {locale: ptBR}) 
   // Essa data foi formatada utilizando a documentação da biblioteca date-fns

   const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, 
    {locale: ptBR,
    addSuffix: true
})

    
    return (
        <article className={styles.post}> 
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}  /> {/* Colocando os atributos do objeto "props" na interface */}
                    

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                {publishedDateRelativeToNow}
                </time>
            </header>

        <div className={styles.content}>
           
        </div>
        
        <form className={styles.commentForm}>
            <strong>Deixe o seu feedback</strong>

            <textarea placeholder="Deixe o seu comentario" />

            <footer>
                <button type="submit">Publicar</button>
            </footer>
        </form>

        <div className={styles.commentList}>
            <Comment/>
            <Comment/>
            <Comment/>

        </div>
        </article>
        
    )
}