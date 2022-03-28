export default function ProjectCard ({project}) {
  return (
    <div>
      <img src={project.media} width='125px' height='200px'/>
      <div key={project._id}>{project.name}</div>
  </div>
  )
}