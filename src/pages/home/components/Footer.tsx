import FooterDecor from "../../../components/FooterDecor";

export default function Footer() {
  return (
    <footer className=" bg-[#0A091D] relative">
      <FooterDecor className="top-0 translate-y-[-50%]" />
      <div className="contentContainer">
        <div className="flex w-full justify-between pt-28 lg:flex-wrap ">
          <div className="lg:w-[50%] lg:items-center lg:text-center lg:mb-10 sm:!w-[100%] sm:pb-5 sm:border-b-2 sm:border-inputBorder flex flex-col gap-1 [&>p]:text-subWhite  [&>p]:max-w-[270px]">
            <h3 className="text-white text-xl mb-3 lg:text-[25px] lg:mb-[25px]">
              ჩვენს შესახებ
            </h3>
            <p className="lg:text-[18px] ">
              ჩვენ დაგეხმარებით ვებგვერდის დამზადებაში და მის გამართვაში
            </p>
          </div>
          <div className="lg:w-[50%] lg:items-center lg:text-center lg:mb-10 sm:!w-[100%] sm:pb-5 sm:border-b-2 sm:border-inputBorder flex flex-col gap-1 [&>p]:text-subWhite [&>p]:transition-colors [&>p]:cursor-pointer hover:[&>p]:text-mainWhite">
            <h3 className="text-white text-xl mb-3 lg:text-[25px] lg:mb-[25px]">
              კონტაქტი
            </h3>
            <p className="lg:text-[18px]">მესიჯი</p>
            <p className="lg:text-[18px]">FACEBOOK</p>
            <p className="lg:text-[18px]">INSTAGRAM</p>
          </div>
          <div className="lg:w-[50%] lg:items-center lg:text-center lg:mb-10 sm:!w-[100%] sm:pb-5 sm:border-b-2 sm:border-inputBorder flex flex-col gap-1 [&>p]:text-subWhite [&>p]:transition-colors [&>p]:cursor-pointer hover:[&>p]:text-mainWhite">
            <h3 className="text-white text-xl mb-3 lg:text-[25px] lg:mb-[25px]">
              სერვისები
            </h3>
            <p className="lg:text-[18px]">სტარტერი</p>
            <p className="lg:text-[18px]">ექსპო</p>
            <p className="lg:text-[18px]">ბიზნეს</p>
            <p className="lg:text-[18px]">შეთანხმებით</p>
          </div>
          <div className="lg:w-[50%] lg:items-center lg:text-center lg:mb-10 sm:!w-[100%] flex flex-col gap-1 [&>p]:text-subWhite [&>p]:transition-colors [&>p]:cursor-pointer hover:[&>p]:text-mainWhite">
            <h3 className="text-white text-xl mb-3 lg:text-[25px] lg:mb-[25px]">
              ნავიგაცია
            </h3>
            <p className="lg:text-[18px]">მთავარი</p>
            <p className="lg:text-[18px]">პროექტები</p>
            <p className="lg:text-[18px]">გამოცდილება</p>
            <p className="lg:text-[18px]">სერვისები</p>
            <p className="lg:text-[18px]">კონტაქტი</p>
          </div>
        </div>
        <div className="h-[3px] w-full bg-lineWhite2 rounded-md mt-9"></div>
        <p className="text-subWhite text-end mt-2 pb-11">Ⓒ ModernDesign</p>
      </div>
    </footer>
  );
}
