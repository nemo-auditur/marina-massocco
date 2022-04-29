import styles from './Projects.module.css'
import ProjectCard from '../ProjectCard/ProjectCard'

export default function Projects({projects}) {

  return (
    <>
    <div className={styles.container}>
    <h1>Publicité</h1>
      <div className={styles.cardContainer}>
      {projects.map((project) => (
        project.sector === 'Publicité' ? 
        <div key={project._id}>{project.name}</div>
        : null 
      ))}
      </div>  
      <h1>Longs métrages</h1>
      <div className={styles.cardContainer}>
      {projects.map((project) => (
        project.sector === 'Long métrage' ?
          <ProjectCard project={project}/>          
          : null 
          ))
          }
      </div>
      <h1>Courts métrages</h1>
      <div className={styles.cardContainer}>
      {projects.map((project) => (
        project.sector === 'Court métrage' ?
          <ProjectCard project={project}/>          
          : null 
          ))
          }
      </div>
      <h1>Musique</h1>
      <div className={styles.cardContainer}>
      {projects.map((project) => (
        project.sector === 'Musique' ? 
        <ProjectCard project={project}/>          
              : null
      ))}
      </div>
      <h1>Télévision</h1>
      <div className={styles.cardContainer}>
      {projects.map((project) => (
        project.sector === 'Télévision' ? 
        <ProjectCard project={project}/>          
        : null 
      ))}
      </div>
    </div>
    </>
  )
}