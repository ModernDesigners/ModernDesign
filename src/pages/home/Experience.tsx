import { TechnologyList } from "../../assets/arrays/technologies";
import { Iclock, Istar } from "../../assets/icons/icons";
import LangIcon from "./components/LangIcon";

interface ITechnology {
  id: number;
  image: string;
  name: string;
  color: string;
}

export default function Experience() {
  return (
    <div className="ExperienceSection pb-40 bg-experienceBg py-10 md:pt-24">
      <div className="contentContainer">
        <div className="flex items-center">
          <h1 className="text-white text-2xl pr-8">გამოცდილება</h1>
          <div className="h-1 w-full bg-mainWhite rounded-xl translate-y-[3px]"></div>
        </div>
        <div className="flex items-center justify-between mt-10 md:w-[90%] md:m-auto md:mt-20">
          <Istar className=" [&>path]:fill-cyanDecor drop-shadow-stars rotate-45 -translate-x-6" />
          <Istar className=" [&>path]:fill-cyanDecor drop-shadow-stars -rotate-45 translate-x-6" />
        </div>

        <div className="flex mt-20 xl:flex-col xl:items-center text-center  ">
          <div className="text-mainWhiteT [&>div>p]:mb-3 [&>div>p]:max-w-[550px] xl:max-w-full xl:w-full w-[50%] flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <p>3 წლიანი გამოცდილება ვებ-დეველოპმენტში</p>
              <p>სამუშაო გამოცდილება გუნდურ, სატესტო და რეალურ პროექტებზე.</p>
              <p>
                ვებსაიტების, აპლიკაციების და ბანერების დიზაინების გამოცდილება
                FIGMA -ს დახმარებით
              </p>
              <p>
                ვებსაიტების, აპლიკაციების და ბანერების დიზაინების გამოცდილება
                FIGMA -ს დახმარებით
              </p>
            </div>

            <div className="flex gap-4 flex-col xl:items-center xl:mt-20 xl:mb-20">
              <div className="flex items-center text-white tracking-widest sm:justify-between  w-full">
                <div className=" h-9 aspect-square rounded-full bg-cardBg flex justify-center items-center mr-3 sm:w-10 ">
                  <Iclock className="[&>path]:stroke-cyanDecor" />
                </div>
                <p className=" w-full">სწრაფი მომსახურება</p>
              </div>
              <div className="flex items-center text-white tracking-widest sm:justify-between  w-full">
                <div className=" h-9 aspect-square rounded-full bg-cardBg flex justify-center items-center mr-3 sm:w-10 ">
                  <Istar className="[&>path]:fill-cyanDecor" />
                </div>
                <p className=" w-full">ოპტიმიზირებული/სწრაფი პროექტები</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center min-h-full w-[50%] lg:w-[90%]">
            <div className=" min-w-[90%] w-[550px] bg-cardBg border-2 border-cardBorder rounded-lg py-10 px-16 sm:px-5">
              <p className="text-center text-white text-lg">
                ტექნოლოგიები რომლებთანაც გვიმუშავია
              </p>
              <div className=" w-14  h-[3px] rounded-lg bg-lineWhite mx-auto my-5 "></div>
              <div className="flex flex-wrap justify-center gap-5   ">
                {TechnologyList.map((e: ITechnology, i: number) => (
                  <LangIcon
                    key={i}
                    image={e.image}
                    title={e.name}
                    color={e.color}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
