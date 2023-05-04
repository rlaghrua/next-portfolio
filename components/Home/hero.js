import Link from "next/link";
import Animation from "./animation";

export default function Hero() {
  return (
    <>
      <>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            안녕하세요 빡빡이 입니다!
            <br className="hidden lg:inline-block" />
            오늘도 빡코딩?
          </h1>
          <p className="mb-8 leading-relaxed">
            피고 수 안고, 광야에서 커다란 예수는 철환하였는가? 같이, 날카로우나
            방지하는 앞이 얼음이 꽃이 있는가? 것이 얼음 이 있을 곳으로 심장은
            때문이다. 원질이 것이 굳세게 보배를 수 그들의 구하지 미인을 자신과
            힘있다. 우리의 이상의 열락의 것이다. 굳세게 얼마나 곳이 뼈 피가
            영락과 얼마나 천하를 봄바람이다. 거선의 청춘을 수 피에 원질이 커다란
            길을 말이다. 창공에 실로 기쁘며, 것이 얼음 새가 청춘의 피다.
            관현악이며, 온갖 우리 그리하였는가?
          </p>
          <div className="flex justify-center">
            <Link href="/projects" className="btn-project">
              프로젝트 보러가기
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Animation />
        </div>
      </>
    </>
  );
}
