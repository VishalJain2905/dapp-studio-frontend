import svgPaths from "./svg-ohv27gd816";
import imgDAppUx1 from "figma:asset/49638aafa53220174ac60fea951139384144d06c.png";
import imgScreenshot20251216At121739Pm1 from "figma:asset/4c578fc2038773261f9b9a2c8f7cfe5464557281.png";

function Frame1() {
  return (
    <div className="h-[34px] relative shrink-0 w-[124px]">
      <div className="absolute h-[28px] left-0 top-[calc(50%-3px)] translate-y-[-50%] w-[24px]" data-name="dApp_@ux 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDAppUx1} />
      </div>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[27px] not-italic text-[16px] text-nowrap text-white top-[4px] tracking-[-0.32px]">dApp Studio</p>
    </div>
  );
}

function CharmMenuHamburger() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="charm:menu-hamburger">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="charm:menu-hamburger">
          <path d={svgPaths.p1b2c00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[16px] top-[20px] w-[361px]">
      <Frame1 />
      <CharmMenuHamburger />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[24px] py-[14px] relative rounded-[100px] shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.32px]">View Services</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[100px] shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.32px]">Get In Touch</p>
    </div>
  );
}

function RiArrowUpLine() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="ri:arrow-up-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="ri:arrow-up-line">
          <rect fill="var(--fill-0, white)" height="34" rx="17" width="34" />
          <path d={svgPaths.p269080} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex h-[52px] items-center justify-center px-[14px] py-[6px] relative rounded-[100px] shrink-0">
      <Frame />
      <RiArrowUpLine />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[91px] items-center left-1/2 top-[699px] translate-x-[-50%]">
      <Frame2 />
      <Frame4 />
    </div>
  );
}

export default function IPhone() {
  return (
    <div className="bg-black relative size-full" data-name="iPhone 16 - 2">
      <div className="absolute h-[853px] left-0 top-0 w-[393px]" data-name="Screenshot 2025-12-16 at 12.17.39 PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[101.11%] left-[-14.06%] max-w-none top-[-0.63%] w-[128.29%]" src={imgScreenshot20251216At121739Pm1} />
        </div>
      </div>
      <Frame5 />
      <div className="absolute font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] leading-[normal] left-[calc(50%+7.5px)] not-italic text-[32px] text-center text-white top-[540px] translate-x-[-50%] w-[308px]">
        <p className="mb-0">Engineering the Future</p>
        <p>of Digital Innovation.</p>
      </div>
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[calc(50%+7.5px)] not-italic text-[#909090] text-[14px] text-center top-[626px] translate-x-[-50%] w-[286px]">We build advanced, secure, and scalable solutions for forward-thinking companies.</p>
      <Frame3 />
    </div>
  );
}