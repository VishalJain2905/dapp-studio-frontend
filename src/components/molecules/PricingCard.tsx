import { CheckIcon } from "../atoms/Icon";
import "../../styles/pricing-cards.css";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  className?: string;
}

export function PricingCard({ 
  title, 
  description, 
  price, 
  features, 
  isPopular = false, 
  className = '' 
}: PricingCardProps) {
  return (
    <div className={`pricing-card ${isPopular ? 'popular' : ''} ${className}`}>
      {/* Popular Badge */}
      {isPopular && (
        <div className="popular-badge">
          <p className="popular-badge-text">
            Popular
          </p>
        </div>
      )}
      
      {/* Content wrapper */}
      <div className="pricing-card-content">
        {/* Title */}
        <p className="pricing-card-title">
          {title}
        </p>
        
        {/* Description */}
        <p className="pricing-card-description">
          {description}
        </p>
        
        {/* Price */}
        <p className="pricing-card-price">
          {price}
        </p>
        
        {/* Features */}
        <div className="pricing-card-features">
          {features.map((feature, index) => (
            <div key={index} className="pricing-card-feature-item">
              <CheckIcon size="sm" color="primary" />
              <p className="pricing-card-feature-text">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Animated gradient border on hover */}
      <div className="pricing-card-border-animation" aria-hidden="true" />
    </div>
  );
}
