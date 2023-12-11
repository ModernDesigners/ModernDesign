import { ServiceList } from "../../assets/arrays/services";
import Waves2 from "../../assets/curves/Waves2";
import Waves3 from "../../assets/curves/Waves3";
import { Iinfo } from "../../assets/icons/icons";
import ServiceCard from "./components/ServiceCard";

export interface IServiceCard {
  name: string;
  providing: {
    including: string[];
    notIncluding: string[];
  };
  price: number;
  color: string;
  shadowColor: string;
}

export default function Service() {
  return (
    <div className="ServiceSection relative bg-gradient-to-r from-[#002032] to-[#1C0032] min-h-screen pb-56">
      <Waves2 />
      <div className="contentContainer my-10">
        <h1 className="text-white text-center text-[40px] tracking">
          სერვისები
        </h1>
        <div className=" flex gap-12 justify-between items-center mt-16 mb-16 flex-wrap">
          {ServiceList.map((e: IServiceCard, i: number) => (
            <ServiceCard key={i} {...e} />
          ))}
        </div>
        <div className=" bg-cardBg border-2 rounded-xl border-cardBorder py-6 px-4 ">
          <div className=" inline-flex items-center px-6 py-2 pl-4 rounded-xl bg-yellowBg text-yellow">
            <Iinfo className=" stroke-yellow mr-[14px]" /> გაითვალისწინეთ
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <p className="text-mainWhite">
              შეკვეთის დამზადების დრო განისაზღვრება მისი მოცულობით, დეტალებით და
              გვერდების რაოდენობით შეკვეთის ორ დღიან გადაცილებაზე თანხა უკან
              გიბრუნდებათ
            </p>
            <p className="text-mainWhite">
              შეკვეთის დამზადების დრო განისაზღვრება მისი მოცულობით, დეტალებით და
              გვერდების რაოდენობით შეკვეთის ორ დღიან გადაცილებაზე თანხა უკან
              გიბრუნდებათ
            </p>
            <p className="text-mainWhite">
              შეკვეთის დამზადების დრო განისაზღვრება მისი მოცულობით
            </p>
          </div>
        </div>
      </div>
      <Waves3 className="w-full absolute bottom-0" />
    </div>
  );
}
