import { Ifacebook, Iinstagram } from "../../../assets/icons/icons";

export default function ContactForm() {
  return (
    <div className="mt-24">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="max-w-[450px] mx-auto"
      >
        <div className="flex flex-col gap-7">
          <div className="inputBlock">
            <p>სახელი</p>
            <input className="inputStyle" type="text" />
          </div>
          <div className="inputBlock">
            <p>ელფოსტა/ნომერი</p>
            <input className="inputStyle" type="text" />
          </div>
          <div className="inputBlock">
            <p>შეტყობინება</p>
            <textarea className="inputStyle resize-none h-24"></textarea>
          </div>
          <button className=" mx-auto text-mainWhite h-[38px] w-56 bg-red rounded-lg shadow-[7px_7px_0] shadow-redBg transition-[box-shadow,_background-color] duration-[0.2s,_0.5s] hover:shadow-none hover:bg-redBr">
            გაგზავნა
          </button>
        </div>
      </form>

      <div className=" h-1 w-14 bg-lineWhite2 mx-auto mt-[34px] mb-8 rounded-md"></div>

      <div className=" flex gap-4 justify-center">
        <Ifacebook className="h-11 aspect-square cursor-pointer transition-[filter] duration-300 hover:brightness-125" />
        <Iinstagram className="h-11 aspect-square cursor-pointer transition-[filter] duration-300 hover:brightness-125" />
      </div>
    </div>
  );
}
