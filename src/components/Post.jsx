import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Comment } from "./Comment"
import { Avatar } from "./Avatar"

import styles from "./Post.module.css"
import { useState } from 'react'



// estado = variaveis que eu quero que o componente monitore. useState é o que monitora

export function Post({author, publishedAt, content}) {
   const [comments, setComments] = useState([ 
    1,
    2,
    ])

    // comments é a variavel, e setcoments é a função que vai alterar a variavel e avisar ao react
   
   
    const publishedDateFormatted = format( publishedAt,"d 'de' LLLL 'as' HH:mm'h' ", {locale: ptBR}) 
   // Essa data foi formatada utilizando a documentação da biblioteca date-fns

   const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, 
    {locale: ptBR,
    addSuffix: true
})

function handleCreateNewComment (){
    event.preventDefault() //Função que retira a necessidade de ser redirecionado para outra pagina

    setComments([...comments, comments.length +1]) // "...coments" copia os valores da variavel "comments" naquele momento
    
}
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
           {content.map(line =>{
            if (line.type == 'paragraph') {
                return <p>{line.content}</p>;
            } else if (line.type == 'link'){
                return <p><a href='#'>{line.content}</a></p>;
            }
           })}
        </div>
        
        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Deixe o seu feedback</strong>

            <textarea placeholder="Deixe o seu comentario" />

            <footer>
                <button type="submit">Publicar</button>
            </footer>
        </form>

        <div className={styles.commentList}>
            {comments.map(comment =>{
                return <Comment/>
            })}

        </div>
        </article>
        
    )
}