import Head from "next/head";
import { connectToDatabase } from "../lib/mongodb";
import Layout from '../components/TransitionLayout/TransitionLayout'
import Coverpage from "../components/Coverpage";
import ProjectsLayout from '../components/ProjectsLayout/ProjectsLayout'

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>Marina Massocco</title>
        <meta
          name="description"
          content="Marina Massocco - Costumière styliste"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Layout>
          <Coverpage />
          <ProjectsLayout projects={projects}/>
        </Layout>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const projects = await db
  .collection("projects")
  .find()
  .sort({ sector: 1 })
  .limit(20)
  .toArray();

return {
  props: {
    projects: JSON.parse(JSON.stringify(projects)),
  },
};
}
