import Image from 'next/image'
import styles from './ProjectCard.module.css'
import {useState} from 'react'
import Spacer from '../Spacer/Spacer'

export default function ProjectCard ({project}) {

  const [modalOpen, setModalOpen] = useState(false)

  const modalBehaviour  = () => {
    setModalOpen(!modalOpen)
  }
  
  return (
    <>
    {project.media ? 
    <>
      <div 
        key={project._id}
        className={styles.cardContainer}
        onClick={()=>{
          modalBehaviour()
        } }>
      <Image 
        alt="front picture of the project"
        src={project.media}
        className={styles.cardPicture}
        layout='responsive'
        width={200}
        height={300}
        />
      <div key={project._id} className={styles.cardText}>{project.name}</div>
      </div>
      {
      modalOpen ? 
      <div className={styles.modalBackground}>
          <div 
            className={styles.modalContainer}>
            <div 
              className={styles.closeButton}
              onClick={()=> {
                modalBehaviour()
              }}> X</div>
              <div className={styles.modalImage}>
                {/* <Image
                  alt="front picture of the project"
                  src={project.media}
                  className={styles.cardPicture}
                  layout='responsive'
                  width={150}
                  height={200}
                /> */}
              </div>
              <div className={styles.modalText}>
                <h1>{project.name}</h1>
                <div>{project.date}</div>
                <div> Réalisateur : {project.realisator}</div>
                <div>Produteur : {project.productor}</div>
                <div>Vidéo : {project.video}</div>
                <h2>Prestation réalisée</h2>
                <Spacer/>
                <div>{project.role}</div>
              </div>
                
          </div>
        </div>
      :
      null
    }
      </>      
    : 
      null
    }
    </>
  )
}