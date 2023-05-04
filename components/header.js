import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <span className="ml-2 mr-2 text-xl">PortFolio</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-white">
              Home
            </Link>
            <Link href="/about-me" className="mr-5 hover:text-white">
              About
            </Link>
            <Link href="/projects" className="mr-5 hover:text-white">
              Projects
            </Link>
            <Link
              href="https://rlaghrua.tistory.com/"
              className="mr-5 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tstory
            </Link>
            <Link
              href="https://open.kakao.com/o/sPVOEjhf"
              className="mr-5 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              kakao
            </Link>
          </nav>
          {/* 다크모드 토글 버튼 작업해야함 */}
          <DarkModeToggleButton />
        </div>
      </header>
    </>
  );
}
