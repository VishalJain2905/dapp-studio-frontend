import clsx from "clsx";
type Component1Props = {
  additionalClassNames?: string;
};

function Component1({ additionalClassNames = "" }: Component1Props) {
  return (
    <div className={clsx("absolute h-[22.5px] w-[39.3px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 23">
        <g id="Component 12">
          <g id="Ellipse 92"></g>
          <g id="Ellipse 93"></g>
        </g>
      </svg>
    </div>
  );
}
type ComponentProps = {
  additionalClassNames?: string;
};

function Component({ additionalClassNames = "" }: ComponentProps) {
  return (
    <div className={clsx("absolute h-[22.5px] top-[27px] w-[39px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 23">
        <g id="Component 2">
          <g id="Ellipse 92"></g>
          <g id="Ellipse 93"></g>
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-px top-0">
      <p className="absolute font-['Poppins:Medium',sans-serif] h-[108px] leading-[normal] left-px mix-blend-screen not-italic text-[#0a0a0a] text-[64px] top-0 w-[397px]">dApp Studio</p>
    </div>
  );
}

function Duplicate() {
  return (
    <div className="absolute contents left-0 top-0" data-name="duplicate">
      <p className="absolute font-['Poppins:Medium',sans-serif] h-[108px] leading-[normal] left-0 mix-blend-screen not-italic text-[64px] text-black top-0 w-[397px]">dApp Studio</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-[27px]">
      <Component additionalClassNames="left-0" />
      <Component additionalClassNames="left-[39px]" />
      <Component additionalClassNames="left-[78px]" />
      <Component additionalClassNames="left-[117px]" />
      <Component additionalClassNames="left-[156px]" />
      <Component additionalClassNames="left-[195px]" />
      <Component additionalClassNames="left-[234px]" />
      <Component additionalClassNames="left-[273px]" />
      <Component additionalClassNames="left-[312px]" />
      <Component additionalClassNames="left-[351px]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-[72px]">
      <Component1 additionalClassNames="left-0 top-[72px]" />
      <Component1 additionalClassNames="left-[39.3px] top-[72px]" />
      <Component1 additionalClassNames="left-[78.6px] top-[72px]" />
      <Component1 additionalClassNames="left-[117.9px] top-[72px]" />
      <Component1 additionalClassNames="left-[157.2px] top-[72px]" />
      <Component1 additionalClassNames="left-[196.5px] top-[72px]" />
      <Component1 additionalClassNames="left-[235.8px] top-[72px]" />
      <Component1 additionalClassNames="left-[275.1px] top-[72px]" />
      <Component1 additionalClassNames="left-[314.4px] top-[72px]" />
      <Component1 additionalClassNames="left-[353.7px] top-[72px]" />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-[49.5px]">
      <Component1 additionalClassNames="left-0 top-[49.5px]" />
      <Component1 additionalClassNames="left-[39.3px] top-[49.5px]" />
      <Component1 additionalClassNames="left-[78.6px] top-[49.5px]" />
      <Component1 additionalClassNames="left-[117.9px] top-[49.5px]" />
      <Component1 additionalClassNames="left-[157.2px] top-[49.5px]" />
      <Component1 additionalClassNames="left-[196.5px] top-[49.5px]" />
      <Component1 additionalClassNames="left-[235.8px] top-[49.5px]" />
      <Component1 additionalClassNames="left-[275.1px] top-[49.5px]" />
      <Component1 additionalClassNames="left-[314.4px] top-[49.5px]" />
      <Component1 additionalClassNames="left-[353.7px] top-[49.5px]" />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-0 top-[27px]">
      <Group2 />
      <Group1 />
      <Group3 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Mask group">
      <Duplicate />
      <Group4 />
    </div>
  );
}

export default function Group5() {
  return (
    <div className="relative size-full">
      <Group />
      <MaskGroup />
    </div>
  );
}