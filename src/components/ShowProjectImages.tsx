import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import { useContext } from "react";
import { userContext } from "../App";

export default function ShowProjectImages(props: {
  isShowImagesActive: boolean;
  setIsShowImagesActive: Function;
}) {
  const closeButton = () => {
    props.setIsShowImagesActive(false);
  };
  const UserContext = useContext(userContext);

  return (
    <>
      <div
        onClick={closeButton}
        className={` pointer-events fixed top-0 left-0 h-full w-full bg-black z-20 Shades ${
          props.isShowImagesActive ? "getShades" : ""
        }`}
      ></div>
      <div
        className={` z-30 p-14  bg-white fixed   duration-200 ease-linear w-full h-[550px] rounded-t-[40px] ${
          props.isShowImagesActive ? "bottom-0" : "bottom-[-550px]"
        }`}
      >
        <div className="flex justify-between mb-5 mt-5">
          <div>
            <h1 className="text-[22px] text-black6">პროექტის ფოტოები</h1>
          </div>
        </div>

        <div
          className=" bg-blueButtonTransparent h-[50px] aspect-square rounded-2xl flex justify-center items-center flex-col cursor-pointer absolute top-6 right-6 transition-colors duration-300 hover:bg-blueButtonTransparentHover"
          onClick={closeButton}
        >
          <div className="h-1 w-[30px] rounded-2xl rotate-45 bg-blueButton absolute"></div>
          <div className="h-1 w-[30px] rounded-2xl -rotate-45 bg-blueButton absolute"></div>
        </div>
        <ImageSlider UserContext={UserContext} />

        <Link
          to={`Projects/${UserContext?.activeProject.name}`}
          onClick={() => props.setIsShowImagesActive(false)}
        >
          <button className="absolute bottom-5 right-14 bg-blueButton text-white px-5 py-2.5 rounded-md">
            დეტალების ნახვა
          </button>
        </Link>
      </div>
    </>
  );
}
