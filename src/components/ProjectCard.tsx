export default function ProjectCard(props: {
  image: string;
  showImages: {
    title: string;
    images: string[];
  };
  setShowImages: Function;
  setIsShowImagesActive: Function;
}) {
  const showImages = () => {
    props.setShowImages(props.showImages);
    props.setIsShowImagesActive(true);
  };
  return (
    <div className="w-[32%] h-[230px] lg:w-[47%] sm:h-[200px] sm:!w-[100%] rounded-2xl group shadow-projectCard overflow-hidden flex-shrink-0 relative cursor-pointer flex items-center justify-center  ">
      <img
        className="transition-transform duration-300 ease-in-out h-full w-full object-cover group-hover:scale-110"
        src={props.image}
        alt="projectImage"
      />
      <div className="flex justify-between  absolute z-[20] bottom-6 w-full px-5  opacity-0 group-hover:opacity-100 transition-all duration-300 md:flex-col sm:!flex-row sm:bottom-0">
        <button
          onClick={showImages}
          className="bg-blueButton text-white w-[48%] p-1.5 rounded-md 2xl:text-sm md:w-full md:mb-2 md:py-2 sm:!w-[49%] sm:p-4 "
        >
          ფოტოების ნახვა
        </button>
        <button
          onClick={showImages}
          className="bg-blueButton text-white w-[48%] p-1.5 rounded-md 2xl:text-sm md:w-full md:mb-2 md:py-2 sm:!w-[49%] sm:p-4 "
        >
          დეტალები
        </button>
      </div>
      <div className="absolute transition-opacity duration-300 h-full w-full top-0 left-0 z-10 bg-gradient-to-b from-transparent via-transparent to-opaBlack group-hover:opacity-0"></div>
    </div>
  );
}
