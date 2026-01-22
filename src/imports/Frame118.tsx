import svgPaths from "./svg-0jnora1o78";
import clsx from "clsx";

function Component42Helper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className="absolute flex h-[59.713px] items-center justify-center left-[14px] top-[20.14px] w-[71.426px]">
      {children}
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("h-[64px] w-[32px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 64">
        {children}
      </svg>
    </div>
  );
}

function Vertical() {
  return (
    <Wrapper additionalClassNames="absolute left-[33.71px] top-[18px]">
      <g id="vertical">
        <path d={svgPaths.p3b234580} id="Ellipse 88" stroke="url(#paint0_linear_84_80)" strokeWidth="0.5" />
        <path d={svgPaths.p2d800580} id="Ellipse 89" stroke="url(#paint1_linear_84_80)" strokeWidth="0.5" />
        <path d={svgPaths.p7e81400} id="Ellipse 90" stroke="url(#paint2_linear_84_80)" strokeWidth="0.5" />
      </g>
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_84_80" x1="13.8667" x2="28.9532" y1="0" y2="70.38">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_84_80" x1="16" x2="31.0865" y1="0" y2="70.38">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_84_80" x1="18.1333" x2="33.2198" y1="0" y2="70.38">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </Wrapper>
  );
}

function Left() {
  return (
    <Wrapper additionalClassNames="relative">
      <g id="left">
        <path d={svgPaths.p3b234580} id="Ellipse 88" stroke="url(#paint0_linear_84_75)" strokeWidth="0.5" />
        <path d={svgPaths.p2d800580} id="Ellipse 89" stroke="url(#paint1_linear_84_75)" strokeWidth="0.5" />
        <path d={svgPaths.p7e81400} id="Ellipse 90" stroke="url(#paint2_linear_84_75)" strokeWidth="0.5" />
      </g>
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_84_75" x1="13.8667" x2="28.9532" y1="0" y2="70.38">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_84_75" x1="16" x2="31.0865" y1="0" y2="70.38">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_84_75" x1="18.1333" x2="33.2198" y1="0" y2="70.38">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </Wrapper>
  );
}

function Right() {
  return (
    <Wrapper additionalClassNames="relative">
      <g id="right">
        <path d={svgPaths.p3b234580} id="Ellipse 88" stroke="url(#paint0_linear_84_70)" strokeWidth="0.5" />
        <path d={svgPaths.p2d800580} id="Ellipse 89" stroke="url(#paint1_linear_84_70)" strokeWidth="0.5" />
        <path d={svgPaths.p7e81400} id="Ellipse 90" stroke="url(#paint2_linear_84_70)" strokeWidth="0.5" />
      </g>
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_84_70" x1="13.8667" x2="28.9532" y1="0" y2="70.38">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_84_70" x1="16" x2="31.0865" y1="0" y2="70.38">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_84_70" x1="18.1333" x2="33.2198" y1="0" y2="70.38">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </Wrapper>
  );
}

function Component() {
  return (
    <div className="absolute left-[168px] overflow-clip size-[100px] top-[12px]" data-name="42">
      <Vertical />
      <Component42Helper>
        <div className="flex-none rotate-[300deg]">
          <Left />
        </div>
      </Component42Helper>
      <Component42Helper>
        <div className="flex-none rotate-[240deg] scale-y-[-100%]">
          <Right />
        </div>
      </Component42Helper>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] overflow-clip relative rounded-[12px] size-full">
      <Component />
      <div className="absolute font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] leading-[100.02%] left-[24px] not-italic text-[20px] text-nowrap text-white top-[36px]">
        <p className="mb-0">Innovate</p>
        <p>Beyond Limits</p>
      </div>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[24px] not-italic text-[#909090] text-[14px] top-[125px] w-[232px]">Leverage the power of AI, automation, and Web3. We build intelligent, next-gen solutions that move your business into the future.</p>
    </div>
  );
}