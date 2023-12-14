export default function ProjectCard(props: { image: string }) {
  return (
    <div className=" w-[410px] h-[230px] sm:h-[200px] sm:w-[100%] rounded-2xl shadow-projectCard overflow-hidden flex-shrink-0 relative cursor-pointer flex items-center justify-center [&>img]:hover:scale-110  [&>div]:hover:opacity-0 ">
      <img
        className="transition-transform duration-300 ease-in-out sm:h-full w-full object-cover"
        src={props.image}
        alt="projectImage"
      />
      <div className="absolute transition-opacity duration-300 h-full w-full top-0 left-0 z-10 bg-gradient-to-b from-transparent via-transparent to-opaBlack"></div>
    </div>
  );
}
