import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=40" alt="" 
            />
            
            <div  className={styles.profile}>
                <img src="https://instagram.fsdu25-1.fna.fbcdn.net/v/t51.2885-19/102435663_3005328039557092_7825619572261650432_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fsdu25-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=eo00N1wunhMAX_HEtLG&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT_QCdd1PKM3YTmrEFHqL8oxACgD7OErWYvB6JgvDRv0Vg&oe=634FFBCE&_nc_sid=8fd12b" alt="" />
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