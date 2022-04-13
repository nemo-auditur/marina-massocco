import ProjectsLayout from '../../components/ProjectsLayout/ProjectsLayout'
import { connectToDatabase } from '../../lib/mongodb'

export default function Projects({projects}) {
    return (
    <>
      <ProjectsLayout projects={projects}/>
    </>
    )
}

export async function getStaticProps() {
  const { db } = await connectToDatabase();
  const projects = await db
    .collection("projects")
    .find()
    .sort({sector: 1})
    .limit(20)
    .toArray();
    
  return {
    props: {
      projects: JSON.parse(JSON.stringify(projects)),
    },
  };
}
