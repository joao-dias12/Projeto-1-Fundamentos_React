import { Comment } from "./Comment"
import styles from "./Post.module.css"
import { Avatar } from "./Avatar"


export function Post(props) {

    console.log(props)
    return (
        <article className={styles.post}> 
            <header>
                <div className={styles.author}>
                    <Avatar src={props.author.avatarUrl}  /> {/* Colocando os atributos do objeto "props" na interface */}
                    

                    <div className={styles.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>
                </div>

                <time title="14 de outubro de 2022" dateTime="14/10/2022 as 13h"> Publicado há 1h</time>
            </header>

        <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p><a> jane.design/doctorcare</a></p>
            <p>
                <a>#novoprojeto </a>{' '} 
                <a>#nlw</a>{' '}
                <a>#rocketseat</a>
            </p>
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