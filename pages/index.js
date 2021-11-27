import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import missingchild from '../public/missingchild.png';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Missing Child KE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/missingchild.png" />
      </Head>
      <main className={styles.main}>
        <div className ={styles.main__page}>
        <div className = {styles.logo}>
            <Image
            src = {missingchild}
            alt = "compant logo"
            />
        </div>
        <div className = {styles.login__info}>
          <div className = {styles.username}>
            <label>E-mail:</label>
            <input placeholder = "Enter e-mail"/>
            </div>
            <div className = {styles.password}>
            <label>Password:</label>
            <input placeholder = "Enter password"/>
            </div>
            <div className = {styles.login__btn}>
              <button>
                <Link href = "/home">
                login
                </Link>
                </button>
            </div>
            <div className = {styles.create__account}>
              Do not have an account?<Link href = "/register" className = {styles.account__creation}>Create one</Link>
            </div>
        </div>
       </div>
      </main>

      
    </div>
  )
}
