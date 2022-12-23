import { Header } from "./components/Header"

import { Post } from './components/Post';
import styles from '../src/App.module.css'
import './global.css'
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/CarlosFariass.png',
      name: 'Carlos Farias',
      role: 'Front-End Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-12-22 16:36:00')
  },
]


export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <>
                <Post 
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
                <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                />
            </>
            )
          })}
        </main>
      </div>
    </>
  )
}

