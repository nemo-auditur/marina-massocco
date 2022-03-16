import Head from 'next/head'
import Landing from './landing/landing'
import { connectToDatabase } from '../lib/mongodb'

export default function Home({topProjects}) {

  return (
<>
  <Head>
    <title>Marina Massocco</title>
    <meta name="description" content="Marina Massocco - Costumière styliste" />
    <link rel="icon" href="/favicon.ico" />
    <link href='https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap' rel="stylesheet"/>
  </Head>
  <main>
      <Landing/>
      {topProjects.map((project) =>(
      <div key={project._id}> 
          <div >{project.name}</div>
          <img src={project.media}/>
            </div>
          ))}
  </main>
</>
  )
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const topProjects = await db
    .collection("projects")
    .find({top_project: true})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  return {
    props: {
      topProjects: JSON.parse(JSON.stringify(topProjects)),
    },
  };
}
