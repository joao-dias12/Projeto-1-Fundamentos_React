import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Comment } from "./Comment"
import { Avatar } from "./Avatar"

import styles from "./Post.module.css"
import { useState } from 'react'



// estado = variaveis que eu quero que o componente monitore. useState é o que monitora

export function Post({author, publishedAt, content}) {
   const [comments, setComments] = useState([ 
    'Post muito bacana hein'
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

        const newCommentText = event.target.comment.value // tem um evento, que é o "submit", esse evento tem um target. esse target é o formulario. o formulario tem dentro dele uma textarea com o atributo "name" = comment. então eu quero pegar o value que foi inserido dentro dessa text area

        console.log()

        setComments([...comments, newCommentText]) // "...coments" copia os valores da variavel "comments" naquele momento
        event.target.comment.value = ''; // Deixando a caixa de comentario vazia depois
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

            <textarea name="comment" placeholder="Deixe o seu comentario" />

            <footer>
                <button type="submit">Publicar</button>
            </footer>
        </form>

        <div className={styles.commentList}>
            {comments.map(comment =>{
                return <Comment content={comment}/>
            })}

        </div>
        </article>
        
    )
}