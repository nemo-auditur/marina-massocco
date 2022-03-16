import styles from './Projects.module.css'

export default function Projects({projects}) {
  return (
    <>
      <div className={styles.container}>
      <h1>Cinéma</h1>
     
     {projects.map((project) => (
       project.sector === 'Cinéma' ?
       <div>
         {/* <img width='100px' height='300px' src={project.media}/> */}
         <div key={project._id}>{project.name}</div>
       </div>
       : null 
     ))}
   <h1>Musique</h1>
   {projects.map((project) => (
     project.sector === 'Musique' ? 
     <div key={project._id}>{project.name}</div>
     : null 
   ))}
   <h1>Musique</h1>
   {projects.map((project) => (
     project.sector === 'Musique' ? 
     <div key={project._id}>{project.name}</div>
     : null 
   ))}
    <h1>Télévision</h1>
   {projects.map((project) => (
     project.sector === 'Télévision' ? 
     <div key={project._id}>{project.name}</div>
     : null 
   ))}
   <h1>Publicité</h1>
   {projects.map((project) => (
     project.sector === 'Publicité' ? 
     <div key={project._id}>{project.name}</div>
     : null 
   ))}
      </div>
    </>
  )
}