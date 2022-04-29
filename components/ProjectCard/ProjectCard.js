import Image from 'next/image'
import styles from './ProjectCard.module.css'
import {useState} from 'react'
import Spacer from '../Spacer/Spacer'
import { motion, AnimatePresence } from "framer-motion";

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
      <AnimatePresence>
        {modalOpen ? 
        <motion.div 
          className={styles.modalBackground}
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.3
            }
          }}
          exit={{
            opacity: 0,
            transition: {
              delay: 0.3
            }
          }}
          onClick={()=> {
            modalBehaviour()
          }}>
            <motion.div 
              className={styles.modalContainer}
              initial={{
                x: 100,
                opacity: 0
              }}
              animate={{
                x: 100,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.3
                }
              }}
              exit={{
                x: 100,
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }}
              >
              <div 
                className={styles.modalCloseButton}
                onClick={()=> {
                  modalBehaviour()
                }}> X</div>
                <div className={styles.modalImage}>
                  <Image
                    alt="front picture of the project"
                    src={project.media}
                    layout='intrinsic'
                    height={400}
                    width={300}
                  />
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
                  
            </motion.div>
          </motion.div>
        :
        null
      }
      </AnimatePresence>
    </>      
    : 
      null
    }
    </>
  )
}