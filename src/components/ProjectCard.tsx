export default function ProjectCard(props: { image: string }) {
  return (
    <div className=" w-[410px] h-[230px] rounded-2xl shadow-projectCard overflow-hidden flex-shrink-0 relative cursor-pointer flex items-center justify-center [&>img]:hover:scale-110 [&>div]:hover:opacity-0 ">
      <img
        className=" transition-transform duration-300 ease-in-out"
        src={props.image}
        alt="projectImage"
      />
      <div className="absolute transition-opacity h-full w-full top-0 left-0 z-10 bg-gradient-to-b from-transparent via-transparent to-opaBlack"></div>
    </div>
  );
}
