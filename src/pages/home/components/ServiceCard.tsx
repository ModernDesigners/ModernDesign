import styled from "styled-components";
import { IServiceCard } from "../Service";

export default function ServiceCard({
  name,
  providing,
  price,
  color,
  shadowColor,
}: IServiceCard) {
  return (
    <div
      className=" h-[480px] min-w-[250px] w-[280px] bg-cardBg border-2 rounded-xl border-cardBorder py-6 px-4  flex-[1] relative transition-all duration-300 ease-in-out overflow-hidden hover:flex-[2] 2xl:hover:flex-[1] 2xl:min-w-[45%] md:!min-w-full  "
      style={{ boxShadow: `15px 15px 0 ${shadowColor}` }}
    >
      <h3
        className="text-center text-main text-[21px]"
        style={{ color: color }}
      >
        {name}
      </h3>
      <div className=" h-[3px] rounded-md mx-auto my-4 w-12 bg-cardBg"></div>
      <div className="flex flex-col gap-[10px] mt-6">
        {providing.including.map((e: string, i: number) => (
          <p
            key={i}
            className=" text-mainWhite whitespace-nowrap text-ellipsis w-full overflow-hidden"
          >
            {e}
          </p>
        ))}
        {providing.notIncluding.map((e: string, i: number) => (
          <p key={i} className=" ruledOption">
            {e}
          </p>
        ))}
      </div>
      <h3
        className="w-full left-0 text-center text-xl absolute bottom-14 z-10 font-bold min-w-full"
        style={{ color: color }}
      >
        {price < 0 ? "???" : price}₾
      </h3>
      <OrderButton
        $color={color}
        className=" text-mainWhite tracking-widest w-full h-11 absolute rounded-b-lg bottom-0 left-0 transition duration-200"
      >
        შეკვეთა
      </OrderButton>
    </div>
  );
}
const OrderButton = styled.button<{ $color: string }>`
  background-color: ${(props) => props.$color};
  &:hover {
    box-shadow: 0 15px 50px ${(props) => props.$color},
      inset 0px 0px 80px rgba(255, 255, 255, 0.2);
  }
`;
