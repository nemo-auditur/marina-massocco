import Image from "next/image";
import Coverimage from "../../public/images/moodoid.jpeg";
import styles from "./Coverpage.module.css";

export default function Coverpage() {
  return (
    <>
      <div style={{ height: "100vh", position: "relative" }}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Marina Massocco</h1>
          <div className={styles.subtitle}>Costumière & styliste</div>
        </div>
        <Image
          className={styles.landingImage}
          src={Coverimage}
          alt="Landing Page"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          placeholder="Landing page author"
          priority
        />
        <div className={styles.bouncingArrow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </>
  );
}
