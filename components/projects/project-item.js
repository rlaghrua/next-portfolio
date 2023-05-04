import Link from "next/link";
import Image from "next/legacy/image";

export default function ProjectItem({ data }) {
  const title = data.properties.Name.title[0]?.plain_text;
  const gitHub = data.properties.Github.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.tag?.multi_select;
  const start = data.properties.WorkPeriod?.date.start;
  const end = data.properties.WorkPeriod?.date.end;

  return (
    <div className="project-card">
      <div className="project-cover-image">
        <Image
          className="rounded-t-xl"
          src={imgSrc}
          alt="cover image"
          width="100%"
          height="55%"
          layout="responsive"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        <Link
          href={gitHub}
          target="_blank"
          className="text-slate-400 hover:text-slate-700"
        >
          깃허브 바로가기
        </Link>
        <p className="my-1 text-xs md:text-xs">
          {start} ~ {end}
        </p>
        <div className="flex items-start mt-2">
          {tags.map((aTag) => (
            <h1
              className="w-30 mr-2 rounded-md bg-gray-100 px-2 py-1 text-xs dark:bg-slate-600"
              key={aTag.id}
            >
              {" "}
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
