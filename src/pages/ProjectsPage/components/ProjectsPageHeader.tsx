interface HeaderInterface {
  setIsActiveOption: Function;
  isActiveOption: number;
  options: any;
}
export default function ProjectsPageHeader({
  setIsActiveOption,
  isActiveOption,
  options,
}: HeaderInterface) {
  return (
    <div className="flex gap-5 justify-center mt-10 mb-6">
      {options.map((e: { title: string }, i: number) => (
        <div
          key={i}
          onClick={() => setIsActiveOption(i)}
          className={`w-[200px] h-[35px]  rounded-md flex justify-center items-center  cursor-pointer transition-all
            ${isActiveOption === i ? "text-white" : "text-blueButton"}
            ${
              isActiveOption === i
                ? "bg-blueButton"
                : "bg-blueButtonTransparent"
            }`}
        >
          {e.title}
        </div>
      ))}
    </div>
  );
}
