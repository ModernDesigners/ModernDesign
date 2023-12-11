import BigCircle1 from "../../assets/curves/BigCircle1";
import BigCircle2 from "../../assets/curves/BigCircle2";
import LittleCircle1 from "../../assets/curves/LittleCircle1";
import LittleCircle2 from "../../assets/curves/LittleCircle2";
import ContactForm from "./components/ContactForm";

export default function Contact() {
  return (
    <div className="ContactSection bg-gradient-to-b from-[#100] to-[#0A0A1F] min-h-screen relative overflow-hidden">
      <BigCircle1 className="absolute top-[100px] -left-[160px] animate-[rolling_10s_infinite_linear]" />
      <LittleCircle1 className="absolute top-[140px] -left-[120px] animate-[rolling_15s_infinite_reverse_linear]" />
      <BigCircle2 className="absolute bottom-[200px] -right-[160px] animate-[rolling_20s_infinite_reverse_linear]" />
      <LittleCircle2 className="absolute bottom-[240px] -right-[120px] animate-[rolling_12s_infinite_linear]" />
      <div className="contentContainer py-16">
        <h1 className="text-mainWhite text-center text-[40px] tracking">
          კონტაქტი
        </h1>
        <ContactForm />
      </div>
    </div>
  );
}
