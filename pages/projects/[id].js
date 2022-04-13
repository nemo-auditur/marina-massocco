import { connectToDatabase } from '../../lib/mongodb'

export const getStaticPaths = async () =>  {

    const { db } = await connectToDatabase();
    const projects = await db
      .collection("projects")
      .find()
      .limit(30)
      .toArray();
    
      const paths = projects.map(project => {
          return {
              params : {id: project._id.toString()}
          }
      })
    return {
        paths,
        fallback : false
    }
}


export const getStaticProps = async (context) => {
    const id = context.params.id

    const { db } = await connectToDatabase();
    const project = await db
    .collection("projects")
    .find({_id : id})
    .limit(1)
    .toArray();
    return {
        props: {project :project}
    }
}

const Project = ({project}) => {
    return(
        <>
            <div>details page</div>
            <div>{project.title}</div>
        </>
    )
}

export default Project
