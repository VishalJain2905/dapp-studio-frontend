interface TechCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  activeMobileTech: number | null;
  onMobileClick: (id: number) => void;
}

import "../../styles/tech-card.css";

// ... imports remain the same if any ...

export function TechCard({
  id,
  title,
  description,
  imageUrl,
  activeMobileTech,
  onMobileClick
}: TechCardProps) {
  return (
    <div
      className="tech-card group"
      onClick={() => onMobileClick(activeMobileTech === id ? 0 : id)}
    >
      {/* Hover Image - Desktop */}
      <div className="tech-card-hover-image-wrapper">
        <div className="tech-card-hover-image-inner">
          <img
            src={imageUrl}
            alt="Technology preview"
            className="tech-card-image"
          />
        </div>
      </div>

      <div className="tech-card-content">
        {/* Desktop Layout */}
        <div className="tech-card-desktop-layout">
          <p className="tech-card-title-desktop">
            {title}
          </p>
          <p className="tech-card-desc-desktop">
            {description}
          </p>
        </div>

        {/* Mobile Layout */}
        <div className="tech-card-mobile-layout">
          <p className="tech-card-title-mobile">
            {title}
          </p>
          <p className="tech-card-desc-mobile">
            {description}
          </p>

          {/* Mobile Image - Shows on tap */}
          {activeMobileTech === id && (
            <div className="tech-card-mobile-image-wrapper">
              <img
                src={imageUrl}
                alt="Technology preview"
                className="tech-card-image"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
