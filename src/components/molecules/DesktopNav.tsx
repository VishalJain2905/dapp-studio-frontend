import { NavLink } from "../atoms/NavLink";
import "../../styles/navbar-glass.css";

interface DesktopNavProps {
  isLight: boolean;
}

export function DesktopNav({ isLight }: DesktopNavProps) {
  return (
    <div
      className={`navbar-glass hidden lg:flex items-center ${isLight ? 'light' : ''}`}
    >
      <NavLink href="#" isLight={isLight} className="nav-spotlight">Home</NavLink>
      <NavLink href="#" isLight={isLight} className="nav-spotlight">About Us</NavLink>
      <NavLink href="#" isLight={isLight} className="nav-spotlight">Pricing</NavLink>
      <NavLink href="#" isLight={isLight} className="nav-spotlight">FAQs</NavLink>
    </div>
  );
}
