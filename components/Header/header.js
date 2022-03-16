import Link from 'next/link'
import { useState } from 'react'
import styles from './Header.module.css'

export default function Header (props){

  const [toggleMenu, setToggleMenu] = useState(false)
  const [themMenu, setThemeMenu] = useState(props)

  console.log(props)
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
          <a className={styles.items}>Accueil</a>
          </Link>
          <Link href="/projects">
            <a className={styles.items}>Projets</a>
          </Link>
          <Link href="/contact">
            <a className={styles.items}>Contact</a>
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
