import svgPaths from "./svg-o93hm6nx6k";

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

export default function Frame1() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[100px] size-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[14px] py-[6px] relative size-full">
          <Frame />
          <RiArrowUpLine />
        </div>
      </div>
    </div>
  );
}