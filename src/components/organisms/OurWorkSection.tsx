import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MoveRight } from "lucide-react";
import "../../styles/our-work.css";

interface WorkItem {
  title: string;
  category: string;
  description: string;
  image: string;
}

const workItems: WorkItem[] = [
  {
    title: "DeFi Analytics Hub",
    category: "Web3 / Fintech",
    description: "A comprehensive dashboard for tracking decentralized finance protocols with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2064&auto=format&fit=crop",
  },
  {
    title: "NFT Genesis Market",
    category: "Marketplace",
    description: "Premium digital art commerce platform featuring curated collections and seamless bidding systems.",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "AI Neural Workspace",
    category: "SaaS / AI",
    description: "Productivity suite integrated with advanced neural networks to automate complex workflows and research.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2064&auto=format&fit=crop",
  },
  {
    title: "Metaverse Gaming Portal",
    category: "GameDev / Web3",
    description: "Immersive 3D entry point for the next generation of cross-chain multiplayer experiences.",
    image: "https://images.unsplash.com/photo-1614728263952-84ea206f99b6?q=80&w=2008&auto=format&fit=crop",
  }
];

export function OurWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} className="work-section">
      <div className="work-section-container">
        {/* Header */}
        <div className="work-section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="work-section-title"
          >
            Our Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="work-section-subtitle"
          >
            Custom solutions built with precision, performance, and future-proof technologies.
          </motion.p>
        </div>

        {/* Work Grid */}
        <div className="work-grid">
          {workItems.map((item, index) => (
            <WorkCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface WorkCardProps {
  item: WorkItem;
  index: number;
  key?: number | string;
}

const WorkCard = ({ item, index }: WorkCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0, 0, 0.25, 1] }}
      className="work-card"
    >
      <div className="work-card-image-content">
        <img src={item.image} alt={item.title} className="work-card-image" loading="lazy" />
        <div className="work-card-overlay" />
      </div>

      <div className="work-card-content">
        <div className="work-card-category">{item.category}</div>
        <h3 className="work-card-title">{item.title}</h3>
        <p className="work-card-description">{item.description}</p>
        
        <div className="work-card-button">
          <span className="work-button-text">Explore Project</span>
          <div className="work-button-icon">
            <MoveRight size={18} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

