import Header from '../components/Header/header'
import Projects from '../components/Projects/projects'
import { connectToDatabase } from '../lib/mongodb'

export default function Detail({projects}) {
    return (
    <>
      <Header theme={'black'}/>
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

    console.log(projects)
  return {
    props: {
      projects: JSON.parse(JSON.stringify(projects)),
    },
  };
}
