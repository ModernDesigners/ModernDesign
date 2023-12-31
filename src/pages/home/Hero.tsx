import { Link } from "react-router-dom";
import DecorBlock from "../../assets/curves/DecorBlock";
import Blocks1 from "../../assets/curves/Blocks1";
import { IarrowDown } from "../../assets/icons/icons";

export default function Hero() {
  const diffBlocks = 50;
  const decorBlocks = [
    ["rgba(0, 71, 255, 0.60)"],
    ["rgba(0, 71, 255, 0.45)"],
    ["rgba(0, 71, 255, 0.30)"],
    ["rgba(0, 71, 255, 0.15)"],
  ];

  return (
    <div className="heroSection relative overflow-hidden">
      <div className="contentContainer">
        <div className=" flex items-center min-h-screen sm:min-h-full pb-56  sm:flex-col md:mt-[65px] sm:!mt-[130px]  sm:text-center sm:pb-[160px]">
          <div className=" w-[50%]  flex flex-col gap-6 sm:w-[70%] ">
            <div className="flex flex-col gap-[14px]">
              <p className="text-black text-4xl">
                ჩვენ ვამზადებთ <span className="text-main">ვებსაიტებს</span>
              </p>
              <p className="text-subBlack text-lg max-w-[500px]">
                ჩვენ დაგეხმარებით ვებგვერდის დამზადებაში და მის გამართვაში
              </p>
            </div>
            <div className="flex gap-4 sm:flex-col items-center">
              <button className="defButton">შეკვეთა</button>
              <button className="text-main w-[220px] h-[40px] transition-colors duration-300 rounded-md hover:bg-mainBack2">
                ჩვენს შესახებ
              </button>
            </div>
            <div className=" mt-5 text-black6 sm:mt-0  inline-flex">
              <Link
                to={"/Projects"}
                className="cursor-pointer [&>div>svg>path]:animate-pulse flex items-center sm:justify-center"
              >
                <div className=" h-8 aspect-square rounded-full bg-mainBack2 flex items-center justify-center [&>svg>path]:fill-mainHover mr-4">
                  {IarrowDown}
                </div>
                <p className="">პროექტების ნახვა</p>
              </Link>
            </div>
          </div>
          <div className=" w-[50%] flex items-center justify-center sm:hidden">
            <div className="relative w-[100%] flex justify-end ">
              {decorBlocks.map((e: string[], i: number) => (
                <DecorBlock
                  key={i}
                  col={e[0]}
                  className="decorBlock animate-dancingBlocks "
                  style={{
                    top: i * diffBlocks - 200 + "px",
                    animationDelay: i * 200 + "ms",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Blocks1 className="absolute w-full left-0 bottom-0 pointer-events-none objCurves " />
    </div>
  );
}
