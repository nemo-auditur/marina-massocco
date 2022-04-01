
export default function Landingpage({topProjects}) {
    return (
      <>
      {topProjects.map((project) =>(
      <div key={project._id}> 
          <div >{project.name}</div>
          <img src={project.media}/>
            </div>
          ))}
      </>
    )
}