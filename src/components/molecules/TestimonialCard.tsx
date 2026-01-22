import { Avatar } from "../atoms/Image";

interface TestimonialCardProps {
  name: string;
  company: string;
  testimonial: string;
  avatarUrl: string;
  isVisible: boolean;
  delay: number;
}

export function TestimonialCard({ 
  name, 
  company, 
  testimonial, 
  avatarUrl, 
  isVisible, 
  delay 
}: TestimonialCardProps) {
  return (
    <div className="border-b border-[#909090] pb-8">
      <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start">
        <div className="flex items-center gap-4 flex-shrink-0">
          <img 
            src={avatarUrl}
            alt={name}
            className="w-[50px] h-[50px] rounded-full object-cover bg-gray-200"
          />
          <div>
            <p className="font-semibold text-black text-[20px] tracking-[-0.01em]">
              {name}
            </p>
            <p className="text-[#4f4f4f] text-[14px]">
              {company}
            </p>
          </div>
        </div>
        <p className="text-black text-[16px] leading-[109.667%] flex-1">
          {testimonial}
        </p>
      </div>
    </div>
  );
}
