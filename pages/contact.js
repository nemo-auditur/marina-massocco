import Header from '../components/Header/header'
import styles from '../styles/Contact.module.css'
import Image from 'next/image'
import Marina from '../public/images/marina.jpg'

export default function Detail() {
    return (
    <>  
    <Header theme='white'/>
        <div className={styles.container}>
            <div className={styles.blocImage}>
                <Image
                    className={styles.landingImage}
                    src={Marina}
                    alt="Landing Page"
                    layout='responsive'
                    objectFit='cover'
                    objectPosition='center'
                    placeholder='Landing page author'/>
            </div>
            <div className={styles.blocText}>
                <div>
                    <h1 className={styles.h1}>Marina Massoco</h1>
                    <h2 className={styles.h2}>Costumière styliste</h2>
                    <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum erat urna, ultrices rhoncus risus consectetur fermentum. Suspendisse vitae leo vel nunc congue rutrum. Pellentesque mattis libero ipsum, at luctus sem viverra eu. Donec id risus fermentum, euismod urna sit amet, condimentum erat. Aliquam vitae vehicula elit, sed mattis lectus. Praesent ultricies dictum efficitur. Curabitur posuere massa eget rhoncus molestie. Nulla consequat diam nec eros tincidunt euismod. Mauris ipsum sem, dignissim in ipsum venenatis, suscipit consectetur velit. Fusce ornare placerat dui. Nam cursus ullamcorper justo in cursus. Mauris vel massa efficitur neque tempor commodo.</p>
                </div>
                <div>
                    <h2 className={styles.h2}>Contact</h2>
                    <div>marina@mail.fr</div>
                    <div>0700000000</div>
                    <div>31 rue de paris</div>
                    <div>PARIS 75000</div>
                </div>
            </div>
        </div>
    </>
    )
}