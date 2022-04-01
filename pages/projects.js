import Projects from '../components/Projects/Projects'
import { connectToDatabase } from '../lib/mongodb'

export default function Detail({projects}) {
    return (
    <>
      <Projects projects={projects}/>
    </>
    )
}

export async function getServerSideProps() {
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
