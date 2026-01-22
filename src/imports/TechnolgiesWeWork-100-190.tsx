import clsx from "clsx";
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div className={clsx("absolute bg-white h-[77px] left-0 translate-y-[-50%] w-[322px]", additionalClassNames)}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[570px] not-italic text-[#909090] text-[16px] text-nowrap top-[50px]">{text}</p>
        <Text text="Lorem ipsum dolor sit amet." />
      </div>
      <div aria-hidden="true" className="absolute border-[1px_0px] border-black border-solid inset-[-1px_0] pointer-events-none" />
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="absolute h-[38px] leading-[normal] left-[3px] not-italic text-nowrap top-[calc(50%+0.5px)] translate-y-[-50%] w-[141px]">
      <p className="absolute font-['Poppins:Medium',sans-serif] left-0 text-[14px] text-black top-[calc(50%-19px)]">{`Technology name `}</p>
      <p className="absolute font-['Poppins:Medium',sans-serif] left-0 text-[#909090] text-[10px] top-[27px]">{text}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[38px] left-[0.01px] top-[12.5px] w-[325px]">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-0 not-italic text-[32px] text-black text-nowrap top-0">Technology Capablities</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[398px] left-[39.01px] top-[96.5px] w-[322px]">
      <Text1 text="Lorem ipsum dolor sit amet." additionalClassNames="top-[calc(50%-160.5px)]" />
      <Text1 text="Lorem ipsum dolor sit amet." additionalClassNames="top-[calc(50%-53.5px)]" />
      <Text1 text="Lorem ipsum dolor sit amet." additionalClassNames="top-[calc(50%+53.5px)]" />
      <Text1 text="Lorem ipsum dolor sit amet." additionalClassNames="top-[calc(50%+160.5px)]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[494.499px] left-[15.99px] top-[calc(50%+0.75px)] translate-y-[-50%] w-[361.009px]">
      <Frame />
      <Frame1 />
      <div className="absolute h-0 left-0 top-0 w-[325.015px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
            <line id="Line 2" stroke="var(--stroke-0, black)" x2="325.015" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function TechnolgiesWeWork() {
  return (
    <div className="bg-white relative size-full" data-name="technolgies we work">
      <Frame2 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[691px] not-italic text-[#909090] text-[14px] text-nowrap top-[113px]">2025</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[312px] not-italic text-[#909090] text-[12px] text-nowrap top-[52px]">2025</p>
    </div>
  );
}