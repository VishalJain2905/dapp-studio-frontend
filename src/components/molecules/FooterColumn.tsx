interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links?: FooterLink[];
  content?: React.ReactNode;
  className?: string;
}

export function FooterColumn({ title, links, content, className = '' }: FooterColumnProps) {
  if (content) {
    return (
      <div className={`flex-1 min-w-0 ${className}`}>
        <h4 className="font-medium text-white text-[14px] leading-[1.4] mb-[8px] md:mb-[20px]">
          {title}
        </h4>
        {content}
      </div>
    );
  }

  return (
    <div className={`flex-1 min-w-0 ${className}`}>
      <h4 className="font-medium text-white text-[14px] leading-[1.4] mb-[16px] md:mb-[8px]">
        {title}
      </h4>
      <nav className="flex flex-col gap-[12px] md:gap-[8px]">
        {links?.map((link, index) => (
          <a 
            key={index}
            href={link.href} 
            className="text-white opacity-60 text-[14px] leading-[1.4] hover:opacity-100 transition-opacity"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

// Specialized footer columns
interface ContactColumnProps {
  phone: string;
  email: string;
}

export function ContactColumn({ phone, email }: ContactColumnProps) {
  return (
    <FooterColumn
      title="Contact us"
      content={
        <div className="flex flex-col gap-[6px] md:gap-[6px]">
          <p className="text-white opacity-60 text-[14px] leading-[1.4]">
            {phone}
          </p>
          <p className="text-white opacity-60 text-[14px] leading-[1.4]">
            {email}
          </p>
        </div>
      }
    />
  );
}

interface SocialLinksProps {
  links: Array<{
    href: string;
    label: string;
    icon: React.ReactNode;
  }>;
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex gap-[8px]">
      {links.map((link, index) => (
        <a 
          key={index}
          href={link.href}
          className="bg-[rgba(255,255,255,0.1)] p-[8px] rounded-[40px] hover:bg-[rgba(255,255,255,0.2)] transition-colors"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
