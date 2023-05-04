import Link from "next/link";
import Animation from "./animation";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          KIM HOKYEOM
        </h1>
        <div className="flex justify-center">
          <Link href="/projects" className="btn-project">
            Project
          </Link>
        </div>
      </div>
      <div className="max-w-[500px]">
        <Animation />
      </div>
    </>
  );
}
