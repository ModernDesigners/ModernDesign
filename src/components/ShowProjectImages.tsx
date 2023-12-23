import a from "../assets/images/projects/project1.webp";

export default function ShowProjectImages(props: {
  isShowImagesActive: boolean;
  setIsShowImagesActive: Function;
}) {
  console.log(props.isShowImagesActive);
  const closeButton = () => {
    props.setIsShowImagesActive(false);
  };

  return (
    <div
      className={`p-14  bg-white fixed   duration-200 ease-linear w-full h-[550px] z-20 rounded-tl-[50px] rounded-tr-[50px] shadow-showImages ${
        props.isShowImagesActive ? "bottom-0" : "bottom-[-550px]"
      }`}
    >
      <div className="flex justify-between mb-5">
        <div>
          <h1 className="text-2xl">პროექტის ფოტოები</h1>
        </div>
        <div
          className=" bg-blueButtonTransparent w-[55px] h-[55px] flex justify-center items-center flex-col cursor-pointer "
          onClick={closeButton}
        >
          <div className="h-1 w-[35px] rotate-45 bg-blueButton absolute"></div>
          <div className="h-1 w-[35px] -rotate-45 bg-blueButton absolute"></div>
        </div>
      </div>
      <div className="flex gap-[1%] justify-center">
        <img src={a} alt="" className="w-[33%] h-[280px] object-cover" />
        <img src={a} alt="" className="w-[33%] h-[280px] object-cover" />
        <img src={a} alt="" className="w-[33%] h-[280px] object-cover" />
      </div>
      <button className="absolute bottom-5 right-14 bg-blueButton text-white px-5 py-2.5 rounded-md">
        დეტალების ნახვა
      </button>
    </div>
  );
}
