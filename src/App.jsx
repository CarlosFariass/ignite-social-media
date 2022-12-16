import { Header } from "./components/Header"

import { Post } from './components/Post';
import styles from '../src/App.module.css'
import './global.css'
import { Sidebar } from "./components/Sidebar";


export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            autor="Carlos Farias"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod temporibus architecto aliquam ipsam voluptatem iure veritatis ut laudantium, sequi ducimus inventore facilis. Sapiente unde id temporibus facilis rem fugit corrupti."
          />
          <Post 
            autor="someone else"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod temporibus architecto aliquam ipsam voluptatem iure veritatis ut laudantium, sequi ducimus inventore facilis. Sapiente unde id temporibus facilis rem fugit corrupti."
          />
        </main>
      </div>
    </>
  )
}

