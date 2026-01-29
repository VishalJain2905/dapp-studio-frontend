import React from "react";
import "../../styles/infinite-scroller.css";

// Logo data - replace with actual client logos
const logos = [
  { name: "TechCorp", text: "TECHCORP" },
  { name: "Innovate", text: "INNOVATE" },
  { name: "CloudScale", text: "CLOUDSCALE" },
  { name: "NextGen", text: "NEXTGEN" },
  { name: "FutureLabs", text: "FUTURELABS" },
  { name: "DataFlow", text: "DATAFLOW" },
  { name: "CodeBase", text: "CODEBASE" },
  { name: "BuildHub", text: "BUILDHUB" },
];

export function InfiniteLogoScroller() {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="infinite-scroller-container">
      <div className="infinite-scroller-track">
        {duplicatedLogos.map((logo, index) => (
          <div key={`${logo.name}-${index}`} className="infinite-scroller-item">
            <span className="infinite-scroller-logo">{logo.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
