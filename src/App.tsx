import { Header } from "./components/Header"
import './global.css';
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";
import { Post, PostType } from "./components/Post";


/* eslint-disable */
const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/53958226?v=4',
      name: 'Leandro Oliveira',
      role: 'Programador'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera' },
      { type: 'paragraph', content: ' Acabei de subir mais um projeto no meu Portfólio. É um projeto que fiz no Ignite, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-07-05 13:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/6643122?v=4',
      name: 'Mayk Brito',
      role: 'Programador'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera' },
      { type: 'paragraph', content: ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-07-09 18:00:00'),
  },
]

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )

          })}
        </main>
      </div>
    </>
  )
}
export default App
