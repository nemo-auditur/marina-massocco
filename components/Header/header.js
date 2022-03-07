import Link from 'next/link'
import { useState } from 'react'
import styles from './Header.module.css'

export default function Header (){

  const [toggleMenu, setToggleMenu] = useState(false)

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu)
  }
    return (
    <header >
     {toggleMenu && (
      <nav className={styles.container}>
        <Link href="/">
         <a className={styles.items}>Accueil</a>
        </Link>
        <Link href="/details/details">
          <a className={styles.items}>Projets</a>
        </Link>
        <Link href="/contact/contact">
          <a className={styles.items}>Contact</a>
        </Link>
      </nav>
        )}
        
      {toggleMenu ? 
        <div 
          className={`${styles.menu_btn} ${styles.open}`}
          onClick={() => toggleNavSmallScreen()}>
          <div className={`${styles.menu_btn_burger} ${styles.open}`}></div>
        </div>
      : 
        <div 
          className={styles.menu_btn}
          onClick={ () => toggleNavSmallScreen()}>
          <div className={styles.menu_btn_burger}></div>
        </div>    
      }
    </header>
    )
}
