
import Image from 'next/image'
import styles from './ProjectCard.module.css'
import Link from 'next/link'

export default function ProjectCard ({project}) {
  return (
    <>
    {project.media ? 
    <>
    <Link 
      key={project._id} 
      href={{
        pathname: `/projects/' + ${project._id}`,
        query :{
          title : project.title
        }
      }}
      as={`/projects/${project._id}`}
      passHref>
        <Image 
        alt="front picture of the project"
        src={project.media}
        className={styles.cardPicture}
        layout='responsive'
        width={200}
        height={300}
        />
      </Link>
      <div key={project._id} className={styles.cardText}>{project.name}</div>
      </>      
    : 
      null
}
    </>
  )
}