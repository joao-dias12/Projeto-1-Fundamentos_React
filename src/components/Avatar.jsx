import styles from './Avatar.module.css'


export function Avatar(props){

    const hasBorder = props.hasBorder !=false;
    return (
        <img 
        className={ hasBorder ? styles.avatarWithBorder : styles.avatar} // se props.hasBorder for true, faça isso(styles.avatarWithBorder) se falso, faça aquilo(styles.avatar) 
        src={props.src} 
        />
    )
}