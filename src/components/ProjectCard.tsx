import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../App";

export default function ProjectCard(props: {
  image: string;
  showImages: {
    title: string;
    images: string[];
  };
  setIsShowImagesActive: Function;
}) {
  const UserContext = useContext(userContext);
  const showImagesFunction = () => {
    props.setIsShowImagesActive(true);
    UserContext?.setactiveProject({
      name: props.showImages.title,
      images: props.showImages.images,
    });
  };
  return (
    <div className="w-[32%] h-[250px] lg:w-[47%] sm:h-[200px] sm:!w-[100%] rounded-2xl group shadow-projectCard overflow-hidden flex-shrink-0 relative cursor-pointer flex items-center justify-center projectCard  ">
      <img
        className="transition-transform duration-300 ease-in-out h-full w-full object-cover group-hover:scale-110"
        src={props.image}
        alt="projectImage"
      />
      <div className="flex justify-between  absolute z-[20] bottom-6 w-full px-5  opacity-0 group-hover:opacity-100 transition-all duration-300 md:flex-col sm:!flex-row sm:bottom-0">
        <button
          onClick={showImagesFunction}
          className="bg-blueButton text-white w-[48%] p-1.5 rounded-md 2xl:text-sm md:w-full md:mb-2 md:py-2 sm:!w-[49%] sm:p-4 2xl:h-[50px] "
        >
          ფოტოების ნახვა
        </button>
        <Link
          to={`/Projects/${props.showImages.title}`}
          className="w-[48%] md:w-[100%] sm:!w-[48%]"
        >
          <button className="bg-blueButton text-white w-[100%] p-1.5 rounded-md 2xl:text-sm md:w-full md:mb-2 md:py-2 2xl:h-[50px]  sm:p-4 ">
            დეტალები
          </button>
        </Link>
      </div>
      <div className="absolute transition-opacity duration-300 h-full w-full top-0 left-0 z-10 bg-gradient-to-b from-transparent via-transparent to-opaBlack group-hover:opacity-0"></div>
    </div>
  );
}
