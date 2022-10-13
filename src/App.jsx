// JSX = JavaScrip + XML
import { Header } from './components/header';
import { Post }  from './Post';

import './global.css'
export function App() {
  
  return (
    <div>

    <Header />

      <Post
      author="Diego Fernandes"
      content=" Loremmmmm"
      
      />
      <Post
      author="João Dias"
      content=" Novo Post"
      
      />
    </div>
  )
}
