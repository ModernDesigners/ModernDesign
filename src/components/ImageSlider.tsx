import { useEffect, useRef } from "react";

export default function ImageSlider(props: { UserContext: any }) {
  const imagesRow = useRef<null | HTMLDivElement>(null);
  const imagesBlock = useRef<null | HTMLImageElement>(null);
  const getImages: string[] = props.UserContext.activeProject.images;
  const leftClick = () => {
    if (imagesRow.current && imagesBlock.current) {
      imagesRow.current.scrollBy(-(imagesBlock.current.clientWidth + 20), 0);
      if (imagesRow.current.scrollLeft === 0) {
        imagesRow.current.scrollTo(imagesRow.current.scrollWidth, 0);
      }
    }
  };
  const rightClick = () => {
    if (imagesRow.current && imagesBlock.current) {
      imagesRow.current.scrollBy(imagesBlock.current.clientWidth + 20, 0);

      if (
        imagesRow.current.scrollLeft + imagesRow.current.clientWidth ==
        imagesRow.current.scrollWidth
      ) {
        imagesRow.current.scrollTo(0, 0);
      }
    }
  };
  useEffect(() => {
    imagesRow.current?.scrollTo(0, 0);
  }, [props.UserContext?.activeProject.name]);
  return (
    <div className=" flex items-center relative">
      <button
        onClick={leftClick}
        className=" transition-colors duration-200  hover:bg-mainWhited flex [&>svg]:h-12 justify-center items-center h-16 aspect-square rounded-full bg-white shadow-[0px_0px_20px_rgba(30,106,255,0.25)] absolute left-0 translate-x-[-50%] cursor-pointer active:bg-mainWhited2"
      >
        {icons.leftIcon}
      </button>
      <button
        onClick={rightClick}
        className=" transition-colors duration-200 hover:bg-mainWhited flex [&>svg]:h-12 justify-center items-center h-16 aspect-square rounded-full bg-white shadow-[0px_0px_20px_rgba(30,106,255,0.25)] absolute right-0 translate-x-[50%] cursor-pointer active:bg-mainWhited2"
      >
        {icons.rightIcon}
      </button>
      <div
        ref={imagesRow}
        className="flex gap-x-[20px] flex-nowrap overflow-hidden noscroll scroll-smooth w-full"
      >
        {getImages.map((e: string, i: number) => (
          <img
            key={i}
            ref={imagesBlock}
            src={e}
            alt=""
            className="w-[33%] min-w-[350px] h-auto max-h-[300px] object-cover object-top  shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

const icons = {
  rightIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" fill="none">
      <g clip-path="url(#clip0_106_129)">
        <path
          d="M12.169 10.4975L18.6573 17L12.169 23.5025L14.1665 25.5L22.6665 17L14.1665 8.5L12.169 10.4975Z"
          fill="#1E6AFF"
        />
      </g>
      <defs>
        <clipPath id="clip0_106_129">
          <rect
            width="34"
            height="34"
            fill="white"
            transform="matrix(-1 0 0 -1 34 34)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  leftIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" fill="none">
      <g clip-path="url(#clip0_106_122)">
        <path
          d="M21.831 23.5025L15.3427 17L21.831 10.4975L19.8335 8.5L11.3335 17L19.8335 25.5L21.831 23.5025Z"
          fill="#1E6AFF"
        />
      </g>
      <defs>
        <clipPath id="clip0_106_122">
          <rect width="34" height="34" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
};
