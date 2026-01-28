import svgPaths from "./svg-2cx68a9655";

function Frame1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[24px] py-[14px] relative rounded-[100px] shrink-0">
      <p className="font-body font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.32px]">View Services</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[100px] shrink-0">
      <p className="font-body leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.32px]">Get In Touch</p>
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

function Frame3() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex h-[52px] items-center justify-center px-[14px] py-[6px] relative rounded-[100px] shrink-0">
      <Frame />
      <RiArrowUpLine />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative size-full">
      <Frame1 />
      <Frame3 />
    </div>
  );
}