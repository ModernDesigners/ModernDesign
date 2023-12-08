export default function LangIcon(props: {
  image: string;
  title: string;
  color: string;
}) {
  return (
    <div className="group bg-cardBg h-[68px] aspect-square rounded-lg flex justify-center items-center transition-colors hover:bg-cardBgHover relative">
      <img
        className="max-h-[45px] max-w-[45px] w-[90%] select-none pointer-events-none"
        src={props.image}
        alt="TechnologyIcon"
      />
      <div
        className="absolute text-[12px] font-main2 px-2 py-1 rounded-md bg-black text-white -bottom-[30px] z-10 pointer-events-none select-none opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ color: props.color }}
      >
        {" "}
        {props.title}
      </div>
    </div>
  );
}
