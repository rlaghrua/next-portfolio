import Head from "next/head";
import Layout from "../../components/layout";
import { TOKEN, DATABASE_ID } from "../../config";
import ProjectItem from "../../components/projects/project-item";

export default function Projects({ projects }) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-5 mb-10">
        <Head>
          <title>projects</title>
          <meta name="description" content="portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="grid grid-cols-1 align-middle lg:grid-cols-4 md:grid-cols-2 p-10 m-4 gap-8 transition-opacity">
          {projects?.results.map((aProject) => (
            <ProjectItem key={aProject.id} data={aProject} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-02-22",
      "content-type": "application/json",
      authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  const projectNames = projects.results.map(
    (aProject) => aProject.properties.Name.title[0]?.plain_text
  );

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
