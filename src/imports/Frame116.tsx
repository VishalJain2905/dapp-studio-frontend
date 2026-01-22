import svgPaths from "./svg-s2261u06tb";

function Component() {
  return (
    <div className="absolute left-[168px] size-[100px] top-[12px]" data-name="31">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g id="31">
          <g id="Intersect">
            <path d={svgPaths.pe534000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p9e5e400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1e741600} fill="var(--fill-0, white)" />
            <path d={svgPaths.pf505600} fill="var(--fill-0, white)" />
            <path d={svgPaths.p48eb100} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1efdf400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p18732700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3d94d800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3f721700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p6731880} fill="var(--fill-0, white)" />
            <path d={svgPaths.p75ce100} fill="var(--fill-0, white)" />
            <path d={svgPaths.p29c8c100} fill="var(--fill-0, white)" />
            <path d={svgPaths.p17000800} fill="var(--fill-0, white)" />
          </g>
          <g id="Ellipses">
            <path d={svgPaths.p24efda00} id="Ellipse 68" stroke="url(#paint0_linear_84_64)" strokeWidth="1.16667" />
            <g filter="url(#filter0_d_84_64)" id="Ellipse 65">
              <circle cx="36" cy="50" r="20.4167" shapeRendering="crispEdges" stroke="url(#paint1_linear_84_64)" strokeWidth="1.16667" />
            </g>
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="60.6667" id="filter0_d_84_64" width="51.3333" x="15" y="29">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="4.66667" dy="14" />
            <feGaussianBlur stdDeviation="2.33333" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_84_64" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_84_64" mode="normal" result="shape" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_84_64" x1="52.9167" x2="73.3333" y1="33.0833" y2="72.1667">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#272727" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_84_64" x1="24.9167" x2="48.8333" y1="30.75" y2="78.5833">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#272727" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] overflow-clip relative rounded-[12px] size-full">
      <Component />
      <div className="absolute font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] leading-[100.02%] left-[24px] not-italic text-[20px] text-nowrap text-white top-[36px]">
        <p className="mb-0">Engineered to</p>
        <p>Scale Securely</p>
      </div>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[24px] not-italic text-[#909090] text-[14px] top-[125px] w-[232px]">Our solutions are built on rock-solid architecture that scales effortlessly and keeps your data safe — so you can grow without limits.</p>
    </div>
  );
}