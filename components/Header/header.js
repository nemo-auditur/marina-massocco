import Link from 'next/link'
import { useState } from 'react'
import { getStaticProps } from '../../pages/projects';
import styles from './Header.module.css'

const Header = (props) => {

  const [toggleMenu, setToggleMenu] = useState(false)

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu)
  }
    return (
    <header >        
      {toggleMenu ?
        <nav className={props.theme === 'black'? `${styles.container} ${styles.container_open_black}`: `${styles.container} ${styles.container_open_white}`}>
        <div 
          className={`${styles.menu_btn} ${styles.open}`}
          onClick={() => toggleNavSmallScreen()}>
          <div className={props.theme === 'black' ? `${styles.menu_btn_burger_black} ${styles.open}` : `${styles.menu_btn_burger_white} ${styles.open}`}></div>
        </div>
          <Link href="/">
          <h1 className={styles.items}>ACCUEIL</h1>
          </Link>
          <Link href="/projects">
            <h1 className={styles.items}>PROJETS</h1>
          </Link>
          <Link href="/contact">
            <h1 className={styles.items}>CONTACT</h1>
          </Link>
        </nav>
      : 
      <nav className={styles.container}>
        <div 
          className={styles.menu_btn}
          onClick={ () => toggleNavSmallScreen()}>
          <div className={props.theme === 'black' ? `${styles.menu_btn_burger_black}` : `${styles.menu_btn_burger_white}`}></div>
        </div>    
      </nav>
      }
    </header>
    )
}

export default Header