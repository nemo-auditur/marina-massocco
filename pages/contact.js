import Layout from "../components/TransitionLayout/TransitionLayout";
import styles from "../styles/Contact.module.css";
import Image from "next/image";
import Marina from "../public/images/marina.jpg";

export default function Detail() {
  const informations = {
    name: "Marine Massocco",
    job: "Costumière styliste",
    mail: "marina@mail.fr",
    phone: "0700000000",
    adress: "31 rue de paris",
    town: "PARIS 75 000",
  };
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <div className={styles.blocImage}>
            <Image
              className={styles.landingImage}
              src={Marina}
              alt="Landing Page"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              placeholder="Landing page author"
            />
          </div>
          <div className={styles.blocText}>
            <div>
              <h1 className={styles.h1}>Marina Massoco</h1>
              <h2 className={styles.h2}>Costumière styliste</h2>
              <p className={styles.p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                fermentum erat urna, ultrices rhoncus risus consectetur
                fermentum. Suspendisse vitae leo vel nunc congue rutrum.
                Pellentesque mattis libero ipsum, at luctus sem viverra eu.
                Donec id risus fermentum, euismod urna sit amet, condimentum
                erat. Aliquam vitae vehicula elit, sed mattis lectus. Praesent
                ultricies dictum efficitur. Curabitur posuere massa eget rhoncus
                molestie. Nulla consequat diam nec eros tincidunt euismod.
                Mauris ipsum sem, dignissim in ipsum venenatis, suscipit
                consectetur velit. Fusce ornare placerat dui. Nam cursus
                ullamcorper justo in cursus. Mauris vel massa efficitur neque
                tempor commodo.
              </p>
            </div>
            <div>
              <h2 className={styles.h2}>Contact</h2>
              <div>{informations.mail}</div>
              <div>{informations.phone}</div>
              <div>{informations.adress}</div>
              <div>{informations.town}</div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
