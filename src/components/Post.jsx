import styles from "./Post.modules.css"


export function Post() {
    return (
        <article className={styles.post}> 
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://media-exp1.licdn.com/dms/image/C4D03AQG0V_M9h40K0A/profile-displayphoto-shrink_800_800/0/1647860850052?e=1671062400&v=beta&t=ZmeCM9T4Z3PZWnvp18Ph7YVqKFN1bYMvRvSdU-vsh-0"  />
                    <div className={styles.authorInfo}>
                        <strong>João Dias</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="14 de outubro de 2022" dateTime="14/10/2022 as 13h"> Publicado há 1h</time>
            </header>

        <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p>👉<a> jane.design/doctorcare</a></p>
            <p><a>#novoprojeto #nlw #rocketseat</a></p>
        </div>
            
        </article>
        
    )
}