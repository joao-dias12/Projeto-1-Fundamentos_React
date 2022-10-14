// JSX = JavaScrip + XML
import { Header } from './components/header';
import { Post }  from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css'

import styles from './App.module.css';

export function App() {
  
  return (
    <div>

    <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        
        <main>
          <Post
            author="Diego Fernandes"
            content=" Loremmmmm"
        
          />
          <Post
            author="João Dias"
            content=" Novo Post"
          
          />
        </main>
      </div>
     
    </div>
  )
}
