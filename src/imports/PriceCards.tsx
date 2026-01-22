import svgPaths from "./svg-kztwphafbl";
import clsx from "clsx";

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0 w-full">
      <IcRoundDoneBackgroundImage />
      <p className="font-['Poppins:Regular',sans-serif] h-[24px] leading-[normal] not-italic relative shrink-0 text-[#909090] text-[14px] w-[271px]">{children}</p>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ additionalClassNames = "" }: BackgroundImage1Props) {
  return (
    <div className={clsx("absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 translate-x-[-50%] w-[304px]", additionalClassNames)}>
      <BackgroundImageAndText text="Clean, modern frontend with responsive design" />
      <BackgroundImageAndText1 text="Basic backend and functionality" />
      <BackgroundImage />
      <BackgroundImageAndText2 text="Mobile-freindly performance" />
      <BackgroundImageAndText2 text="Revision cycles" />
    </div>
  );
}
type BackgroundImageAndText2Props = {
  text: string;
};

function BackgroundImageAndText2({ text }: BackgroundImageAndText2Props) {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0 w-full">
      <IcRoundDoneBackgroundImage />
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#909090] text-[14px] w-[271px]">{text}</p>
    </div>
  );
}

function BackgroundImage() {
  return <BackgroundImage2>{`Support post delivery `}</BackgroundImage2>;
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return <BackgroundImage2>{text}</BackgroundImage2>;
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0 w-full">
      <IcRoundDoneBackgroundImage />
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#909090] text-[14px] w-[264px]">{text}</p>
    </div>
  );
}

function IcRoundDoneBackgroundImage() {
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
    <div className="absolute bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-center left-[253px] px-[9px] py-[6px] rounded-[6px] top-[24px] w-[83px]">
      <p className="bg-clip-text font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(91.5656deg, rgb(119, 235, 255) 5.5%, rgb(84, 118, 239) 21.521%, rgb(3, 146, 255) 48.542%, rgb(119, 235, 255) 75.563%, rgb(0, 69, 223) 102.58%)" }}>
        Populer
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] h-[460px] left-[460px] overflow-clip rounded-[24px] top-[461px] w-[360px]">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[calc(50%-52px)] not-italic text-[#d9d9d9] text-[20px] top-[84px] w-[105px]">{`Professional `}</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[180px] not-italic text-[#909090] text-[14px] text-center top-[118px] translate-x-[-50%] w-[304px]">{`Best suited for business websites, SaaS platforms, Web3 utilities with backend logic `}</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[calc(50%+0.5px)] not-italic text-[32px] text-center text-nowrap text-white top-[176px] translate-x-[-50%]">$4,500</p>
      <BackgroundImage1 additionalClassNames="top-[240px]" />
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] h-[436px] left-[840px] overflow-clip rounded-[24px] top-[473px] w-[360px]">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[calc(50%-45px)] not-italic text-[20px] text-white top-[60px] w-[91px]">Enterprise</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[180px] not-italic text-[#909090] text-[14px] text-center top-[94px] translate-x-[-50%] w-[304px]">{`Best suited for business websites, SaaS platforms, Web3 utilities with backend logic `}</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-1/2 not-italic text-[32px] text-center text-nowrap text-white top-[152px] translate-x-[-50%]">$10,000</p>
      <BackgroundImage1 additionalClassNames="top-[216px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] h-[436px] left-[80px] overflow-clip rounded-[24px] top-[473px] w-[360px]">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[calc(50%-30px)] not-italic text-[20px] text-white top-[60px] w-[61px]">Starter</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[180px] not-italic text-[#909090] text-[14px] text-center top-[94px] translate-x-[-50%] w-[304px]">{`Best suited for business websites, SaaS platforms, Web3 utilities with backend logic `}</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[calc(50%+0.5px)] not-italic text-[32px] text-center text-nowrap text-white top-[152px] translate-x-[-50%]">$1,500</p>
      <BackgroundImage1 additionalClassNames="top-[216px]" />
    </div>
  );
}

export default function PriceCards() {
  return (
    <div className="bg-black relative size-full" data-name="Price Cards">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[calc(50%-337px)] not-italic text-[60px] text-white top-[180px] w-[674px]">{`What it Cost to Built it Right `}</p>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[65px] justify-center leading-[0] left-1/2 not-italic text-[#909090] text-[20px] text-center top-[294.5px] tracking-[-0.44px] translate-x-[-50%] translate-y-[-50%] w-[674px]">
        <p className="leading-[33px]">{`No fluff. Just quality development, clear deliverables, and  Pricing that reflects real work`}</p>
      </div>
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}