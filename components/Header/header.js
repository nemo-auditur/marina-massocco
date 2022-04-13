import Link from 'next/link'
import { useState } from 'react'
import styles from './Header.module.css'

export default function Header (props){

  const [toggleMenu, setToggleMenu] = useState(false)

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu)
  }
    return (
    <header >        
      {toggleMenu ?
        <nav className={`${styles.container} ${styles.container_open}`}>
        <div 
          className={`${styles.menu_btn} ${styles.open}`}
          onClick={() => toggleNavSmallScreen()}>
          <div className={`${styles.menu_btn_burger} ${styles.open}`}></div>
        </div>
          <Link href="/">
          <a className={styles.items}>ACCUEIL</a>
          </Link>
          <Link href="/projects">
            <a className={styles.items}>PROJETS</a>
          </Link>
          <Link href="/contact">
            <a className={styles.items}>CONTACT</a>
          </Link>
        </nav>
      : 
      <nav className={styles.container}>
        <div 
          className={styles.menu_btn}
          onClick={ () => toggleNavSmallScreen()}>
          <div className={styles.menu_btn_burger}></div>
        </div>    
      </nav>
      }
    </header>
    )
}
