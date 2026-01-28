import clsx from "clsx";
import imgTexture from "figma:asset/225d51d90ac23d1d315ee056047f3310ff4bc3e6.png";
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] h-[66px] left-0 overflow-clip rounded-[14px] top-0 w-[360px]">
      <p className="absolute font-display leading-[100.02%] left-[86px] not-italic text-[20px] text-nowrap text-white top-[calc(50%-12px)]">{text}</p>
    </div>
  );
}
type LightWavesBackgroundImageProps = {
  additionalClassNames?: string;
};

function LightWavesBackgroundImage({ additionalClassNames = "" }: LightWavesBackgroundImageProps) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("absolute flex h-[506.875px] items-center justify-center translate-x-[-50%] w-[449.457px]", additionalClassNames)}>
      <div className="flex-none rotate-[20.303deg]">
        <div className="h-[420.741px] opacity-20 relative w-[323.568px]" data-name="Light Wave">
          <div className="absolute inset-[-11.19%_-14.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 418 515">
              <g filter="url(#filter0_f_104_367)" id="Light Wave" opacity="0.5" style={{ mixBlendMode: "plus-lighter" }}>
                <ellipse cx="208.884" cy="257.471" fill="var(--fill-0, #77EBFF)" rx="161.784" ry="210.371" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="514.941" id="filter0_f_104_367" width="417.768" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_104_367" stdDeviation="23.55" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function LightWaves() {
  return (
    <div className="absolute contents left-[calc(50%-57.84px)] top-[973.39px] translate-x-[-50%]" data-name="Light Waves">
      <div className="absolute h-[548px] left-[calc(50%-160px)] opacity-20 top-[1082px] translate-x-[-50%] w-[496px]" data-name="Light Wave">
        <div className="absolute inset-[-10.68%_-11.79%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 613 665">
            <g filter="url(#filter0_f_104_377)" id="Light Wave" style={{ mixBlendMode: "plus-lighter" }}>
              <ellipse cx="306.5" cy="332.5" fill="var(--fill-0, #77EBFF)" rx="248" ry="274" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="665" id="filter0_f_104_377" width="613" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_104_377" stdDeviation="29.25" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[637.211px] items-center justify-center left-[calc(50%-77.43px)] top-[973.39px] translate-x-[-50%] w-[559.219px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[20.303deg]">
          <div className="h-[531.585px] opacity-20 relative w-[399.591px]" data-name="Light Wave">
            <div className="absolute inset-[-8.86%_-11.79%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 494 626">
                <g filter="url(#filter0_f_104_373)" id="Light Wave" opacity="0.5" style={{ mixBlendMode: "plus-lighter" }}>
                  <ellipse cx="246.896" cy="312.892" fill="var(--fill-0, #77EBFF)" rx="199.796" ry="265.792" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="625.785" id="filter0_f_104_373" width="493.791" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_104_373" stdDeviation="23.55" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[403.543px] items-center justify-center left-[calc(50%+132.69px)] top-[1081.61px] translate-x-[-50%] w-[411.227px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[20.303deg]">
          <div className="h-[310.564px] opacity-20 relative w-[323.568px]" data-name="Light Wave">
            <div className="absolute inset-[-15.17%_-14.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 418 405">
                <g filter="url(#filter0_f_104_375)" id="Light Wave" opacity="0.5" style={{ mixBlendMode: "plus-lighter" }}>
                  <ellipse cx="208.884" cy="202.382" fill="var(--fill-0, #77EBFF)" rx="161.784" ry="155.282" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="404.764" id="filter0_f_104_375" width="417.768" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_104_375" stdDeviation="23.55" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <LightWavesBackgroundImage additionalClassNames="left-[calc(50%+113.57px)] top-[1300.34px]" />
      <LightWavesBackgroundImage additionalClassNames="left-[calc(50%-229.25px)] top-[1300.57px]" />
      <LightWavesBackgroundImage additionalClassNames="left-[calc(50%-82.21px)] top-[1381.11px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute contents left-[calc(50%+0.12px)] top-[885px] translate-x-[-50%]" data-name="Container">
      <div className="absolute left-[calc(50%+0.12px)] size-[1102.24px] top-[885px] translate-x-[-50%]" data-name="Light">
        <div className="absolute inset-[-36.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1903 1903">
            <g filter="url(#filter0_f_104_379)" id="Light">
              <circle cx="951.12" cy="951.12" fill="url(#paint0_radial_104_379)" r="551.12" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1902.24" id="filter0_f_104_379" width="1902.24" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_104_379" stdDeviation="200" />
              </filter>
              <radialGradient cx="0" cy="0" gradientTransform="translate(653.828 1422.27) rotate(-47.765) scale(1155.28 1524.42)" gradientUnits="userSpaceOnUse" id="paint0_radial_104_379" r="1">
                <stop offset="0.056982" />
                <stop offset="0.970352" stopColor="#77EBFF" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <LightWaves />
      <div className="absolute left-[calc(50%+0.32px)] size-[742.645px] top-[1064.8px] translate-x-[-50%]" data-name="Light">
        <div className="absolute inset-[-4.51%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 810 810">
            <g filter="url(#filter0_f_104_369)" id="Light" style={{ mixBlendMode: "plus-lighter" }}>
              <circle cx="404.822" cy="404.822" fill="var(--fill-0, #77EBFF)" r="371.322" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="809.645" id="filter0_f_104_369" width="809.645" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_104_369" stdDeviation="16.75" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[calc(50%+0.32px)] size-[742.645px] top-[1064.8px] translate-x-[-50%]" data-name="Dark">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 743 743">
          <g filter="url(#filter0_i_104_371)" id="Dark">
            <circle cx="371.322" cy="371.322" fill="var(--fill-0, black)" r="371.322" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="742.645" id="filter0_i_104_371" width="742.645" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="0.5" result="effect1_innerShadow_104_371" />
              <feOffset />
              <feGaussianBlur stdDeviation="19.95" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
              <feBlend in2="shape" mode="normal" result="effect1_innerShadow_104_371" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] h-[212px] left-[81px] overflow-clip rounded-[20px] top-[364px] w-[360px]" data-name="Card">
      <div className="absolute flex flex-col font-body justify-center leading-[22.4px] left-[30px] not-italic text-[#ccc] text-[14px] top-[141px] tracking-[-0.32px] translate-y-[-50%] w-[300px]">
        <p className="mb-0">{`We build tools, dashboards, and automated `}</p>
        <p>systems that streamline your daily operations, helping you and your team work faster and smarter.</p>
      </div>
      <BackgroundImageAndText text="Increased Productivity" />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] h-[66px] left-0 overflow-clip rounded-[14px] top-0 w-[360px]">
      <p className="absolute font-display leading-[100.02%] left-[calc(50%-62px)] not-italic text-[20px] text-nowrap text-white top-[calc(50%-12px)]">Cost Reduction</p>
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] h-[212px] left-[81px] overflow-clip rounded-[20px] top-[616px] w-[360px]" data-name="Card">
      <div className="absolute flex flex-col font-body justify-center leading-[0] left-[30px] not-italic text-[#ccc] text-[14px] top-[141px] tracking-[-0.32px] translate-y-[-50%] w-[300px]">
        <p className="leading-[22.4px]">Our development approach focuses on clean, efficient code, minimizing overhead, reducing technical debt, and keeping maintenance costs low.</p>
      </div>
      <Frame />
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] h-[212px] left-[460px] overflow-clip rounded-[20px] top-[616px] w-[360px]" data-name="Card">
      <div className="absolute flex flex-col font-body justify-center leading-[22.4px] left-[30px] not-italic text-[#ccc] text-[14px] top-[141px] tracking-[-0.32px] translate-y-[-50%] w-[300px]">
        <p className="mb-0">{`Custom development that actually delivers `}</p>
        <p className="mb-0">{`from clean UI to scalable Web3 infrastructure, `}</p>
        <p>we turn ideas into high-performing products</p>
      </div>
      <BackgroundImageAndText text="Why Brand Choose Us" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] h-[66px] left-0 overflow-clip rounded-[14px] top-0 w-[360px]">
      <p className="absolute font-display leading-[100.02%] left-[calc(50%-82px)] not-italic text-[20px] text-nowrap text-white top-[calc(50%-12px)]">{`Scalablity & Growth`}</p>
    </div>
  );
}

function Card3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] h-[212px] left-[839px] overflow-clip rounded-[20px] top-[616px] w-[360px]" data-name="Card">
      <div className="absolute flex flex-col font-body justify-center leading-[0] left-[30px] not-italic text-[#ccc] text-[14px] top-[141px] tracking-[-0.32px] translate-y-[-50%] w-[300px]">
        <p className="leading-[22.4px]">We build systems that grow with you, whether you’re launching an MVP or scaling to 1M+ users, we ensure performance and structure never hold you back.</p>
      </div>
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] h-[66px] left-0 overflow-clip rounded-[14px] top-0 w-[360px]">
      <p className="absolute font-display leading-[100.02%] left-[calc(50%-120px)] not-italic text-[20px] text-nowrap text-white top-[calc(50%-12px)]">Better Customer Experience</p>
    </div>
  );
}

function Card4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] h-[212px] left-[460px] overflow-clip rounded-[20px] top-[364px] w-[360px]" data-name="Card">
      <div className="absolute flex flex-col font-body justify-center leading-[22.4px] left-[30px] not-italic text-[#ccc] text-[14px] top-[141px] tracking-[-0.32px] translate-y-[-50%] w-[300px]">
        <p className="mb-0">{`From sleek UIs to smooth performance, we `}</p>
        <p className="mb-0">{`craft user-first products that boost `}</p>
        <p>engagement, reduce bounce rates, and leave a lasting impression.</p>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] h-[66px] left-0 overflow-clip rounded-[14px] top-0 w-[360px]">
      <p className="absolute font-display leading-[100.02%] left-[calc(50%-64px)] not-italic text-[20px] text-nowrap text-white top-[calc(50%-12px)]">24/7 Availablity</p>
    </div>
  );
}

function Card5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] h-[212px] left-[839px] overflow-clip rounded-[20px] top-[364px] w-[360px]" data-name="Card">
      <div className="absolute flex flex-col font-body justify-center leading-[0] left-[30px] not-italic text-[#ccc] text-[14px] top-[141px] tracking-[-0.32px] translate-y-[-50%] w-[300px]">
        <p className="leading-[22.4px]">We ensure your platforms are reliable, secure, and up 24/7 with proactive monitoring, fast fixes, and ongoing support when you need it most.</p>
      </div>
      <Frame3 />
    </div>
  );
}

export default function BenefitsOfJoiningUs() {
  return (
    <div className="bg-black blur-[0px] filter relative size-full" data-name="benefits of joining us">
      <Container />
      <div className="absolute bg-repeat bg-size-[100px_100px] bg-top-left inset-[-0.03%_-0.03%_0.03%_0.03%] mix-blend-overlay" data-name="texture" style={{ backgroundImage: `url('${imgTexture}')` }} />
      <div className="absolute font-display leading-[normal] left-[81px] not-italic text-[60px] text-white top-[140px] w-[811px]">
        <p className="mb-0">{`The key benefits of partnering `}</p>
        <p>with us for your business growth</p>
      </div>
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
    </div>
  );
}