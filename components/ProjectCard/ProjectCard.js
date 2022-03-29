import styles from './ProjectCard.module.css'

export default function ProjectCard ({project}) {
  return (
    <div className={styles.cardContainer}>
      <img src={project.media} width="200px"className={styles.cardPicture}/>
      <div key={project._id} className={styles.cardText}>{project.name}</div>
  </div>
  )
}