type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="absolute bg-white h-[124px] left-0 top-1/2 translate-y-[-50%] w-[835px]">
      <div className="leading-[normal] not-italic overflow-clip relative rounded-[inherit] size-full text-nowrap">
        <p className="absolute font-display left-[40px] text-[26px] text-black top-[calc(50%-15px)]">{`Technology name `}</p>
        <p className="absolute font-body font-medium left-[570px] text-[#909090] text-[16px] top-[50px]">{text}</p>
      </div>
      <div aria-hidden="true" className="absolute border-[1px_0px] border-black border-solid inset-[-1px_0] pointer-events-none" />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute h-[196px] left-[285px] top-[172px] w-[835px]" data-name="1">
      <Text text="Lorem ipsum dolor sit amet." />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute h-[196px] left-[285px] top-[384px] w-[835px]" data-name="2">
      <Text text="Lorem ipsum dolor sit amet." />
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute h-[196px] left-[285px] top-[596px] w-[835px]" data-name="3">
      <Text text="Lorem ipsum dolor sit amet." />
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute h-[196px] left-[285px] top-[808px] w-[835px]" data-name="4">
      <Text text="Lorem ipsum dolor sit amet." />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[72px] left-[80px] top-[160px] w-[590px]">
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
      <p className="absolute font-display leading-[normal] left-0 not-italic text-[60px] text-black text-nowrap top-0">Technology Capablities</p>
    </div>
  );
}

export default function TechnolgiesWeWork() {
  return (
    <div className="bg-white relative size-full" data-name="technolgies we work">
      {[...Array(2).keys()].map((_, i) => (
        <Frame key={i} />
      ))}
      <div className="absolute h-0 left-[80px] top-[140px] w-[645.001px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 645 1">
            <line id="Line 2" stroke="var(--stroke-0, black)" x2="645.001" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-body leading-[normal] left-[691px] not-italic text-[#909090] text-[14px] text-nowrap top-[113px]">2025</p>
    </div>
  );
}