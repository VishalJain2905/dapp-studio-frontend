import clsx from "clsx";
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex items-center justify-center px-[10px] py-[6px] relative rounded-[100px] shrink-0", additionalClassNames)}>
      <p className="font-body leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.32px]">{text}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[100px] size-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[28px] items-center justify-center px-[14px] py-[6px] relative size-full">
          <Text text="Home" additionalClassNames="w-[67px]" />
          <Text text="about Us" />
          <Text text="Pricing" />
          <Text text="FAQs" />
        </div>
      </div>
    </div>
  );
}