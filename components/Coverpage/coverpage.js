import Image from 'next/image'
import Coverimage from '../../public/images/landingpage.jpg'
import styles from './Coverpage.module.css'

export default function Coverpage (){

    return (
    <>
    <div style={{height:'100vh'}}>
      <div className={styles.textContainer}>        
        <h1>Marina Massocco</h1>
        <div>Costumière & styliste</div>
      </div>
      <Image
        className={styles.landingImage}
        src={Coverimage}
        alt="Landing Page"
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        placeholder='Landing page author'/>
      </div>
    </>
    )
}
