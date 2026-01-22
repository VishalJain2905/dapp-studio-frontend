import svgPaths from "./svg-shwr5e5yx1";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0 w-full">
      <IcRoundDone />
      <p className="font-['Poppins:Regular',sans-serif] h-[24px] leading-[normal] not-italic relative shrink-0 text-[#909090] text-[14px] w-[271px]">{children}</p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0 w-full">
      <IcRoundDone />
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#909090] text-[14px] w-[271px]">{text}</p>
    </div>
  );
}

function IcRoundDone() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic:round-done">
          <path d={svgPaths.p427fe80} fill="var(--fill-0, #77EBFF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0 w-full">
      <IcRoundDone />
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#909090] text-[14px] w-[264px]">Clean, modern frontend with responsive design </p>
    </div>
  );
}

function Frame1() {
  return <Wrapper>Basic backend and functionality</Wrapper>;
}

function Frame2() {
  return <Wrapper>{`Support post delivery `}</Wrapper>;
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 top-[216px] translate-x-[-50%] w-[304px]">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Text text="Mobile-freindly performance" />
      <Text text="Revision cycles" />
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[24px] size-full">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] leading-[normal] left-[calc(50%-30px)] not-italic text-[20px] text-white top-[60px] w-[61px]">Starter</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[180px] not-italic text-[#909090] text-[14px] text-center top-[94px] translate-x-[-50%] w-[304px]">{`Best suited for business websites, SaaS platforms, Web3 utilities with backend logic `}</p>
        <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[calc(50%+0.5px)] not-italic text-[32px] text-center text-nowrap text-white top-[152px] translate-x-[-50%]">$1,500</p>
        <Frame3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#0045df] border-solid inset-[-1px] pointer-events-none rounded-[25px]" />
    </div>
  );
}