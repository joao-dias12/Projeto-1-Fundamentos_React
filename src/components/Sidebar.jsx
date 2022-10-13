import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=40" alt="" 
            />
            
            <div  className={styles.profile}>
                <strong> Diego Fernandes</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    EDITAR O SEU PERFIL
                </a>
            </footer>
        </aside>
    )
}