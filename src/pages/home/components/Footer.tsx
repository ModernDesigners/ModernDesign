export default function Footer() {
  return (
    <footer className=" bg-[#0A091D] relative">
      <div className="contentContainer">
        <div className="flex w-full justify-between pt-28">
          <div className="flex flex-col gap-1 [&>p]:text-subWhite [&>p]:max-w-[270px]">
            <h3 className="text-white text-xl mb-3">ჩვენს შესახებ</h3>
            <p>ჩვენ დაგეხმარებით ვებგვერდის დამზადებაში და მის გამართვაში</p>
          </div>
          <div className="flex flex-col gap-1 [&>p]:text-subWhite">
            <h3 className="text-white text-xl mb-3">კონტაქტი</h3>
            <p>მესიჯი</p>
            <p>FACEBOOK</p>
            <p>INSTAGRAM</p>
          </div>
          <div className="flex flex-col gap-1 [&>p]:text-subWhite">
            <h3 className="text-white text-xl mb-3">სერვისები</h3>
            <p>სტარტერი</p>
            <p>ექსპო</p>
            <p>ბიზნეს</p>
            <p>შეთანხმებით</p>
          </div>
          <div className="flex flex-col gap-1 [&>p]:text-subWhite">
            <h3 className="text-white text-xl mb-3">ნავიგაცია</h3>
            <p>მთავარი</p>
            <p>პროექტები</p>
            <p>გამოცდილება</p>
            <p>სერვისები</p>
            <p>კონტაქტი</p>
          </div>
        </div>
        <div className="h-[3px] w-full bg-lineWhite2 rounded-md mt-9"></div>
        <p className="text-subWhite text-end mt-2 pb-11">Ⓒ ModernDesign</p>
      </div>
    </footer>
  );
}
