export default function FooterDecor(props: { className?: string }) {
  return (
    <div
      className={`flex left-0 absolute w-full items-center justify-center overflow-x-clip ${props.className} 3xl:hidden`}
    >
      <div className=" flex items-center justify-center absolute w-[350px] aspect-square rotate-45 bg-[#3EB9FF] left-0 translate-x-[-50%] z-10">
        <div className=" bg-[#006CA9] rounded-tr-2xl h-[80%] aspect-square"></div>
      </div>
      <div className=" flex items-center justify-center absolute w-[350px] aspect-square rotate-45 bg-[#3EB9FF] left-0 translate-x-[-50%] z-0 blur-[100px] opacity-90"></div>
      <div className="absolute h-12 w-[calc(100%-(200px*2))] bg-gradient-to-r from-[#3EB9FF] to-[#8E43FF] m-auto z-[11]"></div>
      <div className="absolute h-12 w-[calc(100%-(200px*2))] bg-gradient-to-r from-[#3EB9FF] to-[#8E43FF] m-auto z-0 blur-[100px] opacity-90"></div>
      <div className=" flex items-center justify-center absolute w-[350px] aspect-square rotate-45 bg-[#8E43FF] right-0 translate-x-[50%] z-10">
        <div className=" bg-[#4600AE] rounded-bl-2xl h-[80%] aspect-square"></div>
      </div>
      <div className=" flex items-center justify-center absolute w-[350px] aspect-square rotate-45 bg-[#8E43FF] right-0 translate-x-[50%] z-0 blur-[100px] opacity-90"></div>
    </div>
  );
}
