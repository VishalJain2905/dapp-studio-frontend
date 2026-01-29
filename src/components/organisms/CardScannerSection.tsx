import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, useAnimationFrame, useInView } from "motion/react";
import "../../styles/card-scanner.css";

// ASCII characters for the code generation
const codeChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789(){}[]<>;:,._-+=!@#$%^&*|\\/\"'`~?";

const MOCK_PROJECTS = [
  { id: 1, tag: "Smart Contract", title: "Liquidity Protocol", status: "Verified", hash: "0x74a...82f" },
  { id: 2, tag: "Infrastructure", title: "Node Cluster X", status: "Healthy", hash: "0x91b...34e" },
  { id: 3, tag: "Analytics", title: "On-Chain Indexer", status: "Syncing", hash: "0x22c...11a" },
  { id: 4, tag: "Security", title: "Audit Engine", status: "Scanning", hash: "0x55d...99z" },
  { id: 5, tag: "Frontend", title: "DEX Interface", status: "Live", hash: "0x33e...77m" },
  { id: 6, tag: "Bridge", title: "Cross-Chain Hub", status: "Active", hash: "0x88f...55p" },
];

function generateCode(width: number, height: number) {
  let out = "";
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      out += codeChars[Math.floor(Math.random() * codeChars.length)];
    }
    if (row < height - 1) out += "\n";
  }
  return out;
}

export function CardScannerSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);
  const scannerCanvasRef = useRef<HTMLCanvasElement>(null);
  
  const [position, setPosition] = useState(-2760);
  const [isScanning, setIsScanning] = useState(false);
  const [asciiContents, setAsciiContents] = useState<string[]>([]);
  
  // Optimization: only run animations if section is in view
  const isInView = useInView(sectionRef, { amount: 0.1 });

  // Initialize ASCII contents (Fixed data to prevent constant re-renders)
  useEffect(() => {
    if (!isInView) return;
    const contents = MOCK_PROJECTS.map(() => generateCode(60, 20));
    setAsciiContents(contents);

    const interval = setInterval(() => {
      setAsciiContents(prev => prev.map(c => Math.random() < 0.1 ? generateCode(60, 20) : c));
    }, 200); // Slower update for performance
    return () => clearInterval(interval);
  }, [isInView]);

  // background scroller movement
  useAnimationFrame((time, delta) => {
    if (!isInView) return;
    const speed = 120; // px per second
    const moveAmount = (speed * delta) / 1000;
    
    setPosition(prev => {
      const newPos = prev + moveAmount;
      return newPos >= 0 ? -2760 : newPos;
    });
  });

  // Background Particle System
  useEffect(() => {
    if (!isInView) return;
    const canvas = particleCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false }); // Perf: alpha false
    if (!ctx) return;

    let w = window.innerWidth;
    let h = 350;
    canvas.width = w;
    canvas.height = h;

    const particles: any[] = [];
    for (let i = 0; i < 80; i++) { // Reduced particle count
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: Math.random() * 0.5 + 0.2,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.4 + 0.1
      });
    }

    let animationFrameId: number;
    const render = () => {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, w, h);
      
      particles.forEach(p => {
        p.x += p.vx;
        if (p.x > w) p.x = -10;
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(render);
    };
    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView]);

  // Scanner Center Particles
  useEffect(() => {
    if (!isInView) return;
    const canvas = scannerCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = 450;
    canvas.width = w;
    canvas.height = h;

    const particles: any[] = [];
    const maxParticles = 150; // Reduced count
    const centerX = w * 0.2;

    const createParticle = () => ({
      x: centerX + (Math.random() - 0.5) * 4,
      y: Math.random() * h,
      vx: Math.random() * 2 + 1,
      vy: (Math.random() - 0.5) * 0.5,
      life: 1.0,
      decay: Math.random() * 0.03 + 0.02,
      size: Math.random() * 1.5 + 0.5
    });

    let animationFrameId: number;
    const render = () => {
      ctx.clearRect(0, 0, w, h);
      if (isScanning) {
        if (particles.length < maxParticles) particles.push(createParticle());
        if (particles.length < maxParticles) particles.push(createParticle());
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.splice(i, i + 1);
          i--;
          continue;
        }

        ctx.globalAlpha = p.life;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      animationFrameId = requestAnimationFrame(render);
    };
    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, isScanning]);

  const streamProjects = useMemo(() => [...MOCK_PROJECTS, ...MOCK_PROJECTS, ...MOCK_PROJECTS], []);

  // Handle Scanning state check (Optimized: Using math instead of DOM queries)
  useEffect(() => {
    if (!isInView) return;
    
    const scannerX = window.innerWidth * 0.2;
    const cardWidth = 380;
    const cardGap = 80;
    const initialOffset = 100;
    
    const active = streamProjects.some((_, i) => {
      const cardLeftGlobal = initialOffset + (i * (cardWidth + cardGap)) + position;
      const cardRightGlobal = cardLeftGlobal + cardWidth;
      return cardLeftGlobal < scannerX + 50 && cardRightGlobal > scannerX - 50;
    });
    
    setIsScanning(active);
  }, [isInView, position, streamProjects]);

  // Handle Scanning state check (Optimized: Using math instead of DOM queries)

  return (
    <section ref={sectionRef} className="card-scanner-section">
      <div className="scanner-container">
        <canvas id="particleCanvas" ref={particleCanvasRef} />

        <div className="card-stream-wrapper" ref={containerRef}>
          <div 
            className="card-scroller" 
            ref={scrollerRef}
            style={{ transform: `translateX(${position}px)` }}
          >
            {streamProjects.map((project, idx) => (
              <CardItem 
                key={`${project.id}-${idx}`} 
                project={project} 
                asciiContent={asciiContents[project.id - 1] || ""}
                scrollerPosition={position}
                index={idx}
              />
            ))}
          </div>
        </div>

        <div className="scanner-bar-container">
          <div className="scanner-bar" />
        </div>

        <canvas id="scannerCanvas" ref={scannerCanvasRef} />
      </div>
    </section>
  );
}

interface CardItemProps {
  project: typeof MOCK_PROJECTS[0];
  asciiContent: string;
  scrollerPosition: number;
  index: number;
}

const CardItem: React.FC<CardItemProps> = ({ project, asciiContent, scrollerPosition, index }) => {
  // Use CSS variables for the clip path reveal - much faster than JS-based getBoundingClientRect every frame
  const scannerX = typeof window !== 'undefined' ? window.innerWidth * 0.2 : 300;
  const cardWidth = 380; // Fixed width from CSS
  const cardGap = 80; // Fixed gap from CSS
  const initialOffset = 100; // scroller padding
  
  // Calculate relative scanner position in card space locally
  const cardLeftGlobal = initialOffset + (index * (cardWidth + cardGap)) + scrollerPosition;
  const relX = scannerX - cardLeftGlobal;
  
  let clipNormal = "inset(0 0 0 0%)";
  let clipAscii = "inset(0 100% 0 0)";

  if (relX > 0 && relX < cardWidth) {
    const percent = (relX / cardWidth) * 100;
    clipNormal = `inset(0 0 0 ${percent}%)`;
    clipAscii = `inset(0 ${100 - percent}% 0 0)`;
  } else if (relX >= cardWidth) {
    clipNormal = "inset(0 0 0 100%)";
    clipAscii = "inset(0 0% 0 0)";
  }

  return (
    <div className="scanner-card-wrapper">
      {/* ASCII Result */}
      <div className="scanner-card card-face-ascii" style={{ clipPath: clipAscii }}>
        <div className="ascii-code-content">
          {asciiContent}
        </div>
      </div>

      {/* Normal View */}
      <div className="scanner-card card-face-normal" style={{ clipPath: clipNormal }}>
        <div className="card-tag">{project.tag}</div>
        <h4 className="card-title-main">{project.title}</h4>
        <div className="card-status-pill">
           <span className="card-status-dot" />
           {project.status}
        </div>
        
        <div className="card-bottom-row">
          <div className="card-hash">{project.hash}</div>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 4L26 28L16 22L6 28L16 4Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
