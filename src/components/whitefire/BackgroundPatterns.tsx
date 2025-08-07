// 文件位置: src/components/whitefire/BackgroundPatterns.tsx
// NEW FILE: Step 2 - Neural Network and Cognitive Pattern Visualizations

import { useEffect, useRef } from 'react';

const BackgroundPatterns = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight > document.body.scrollHeight ? window.innerHeight : document.body.scrollHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Neural network nodes
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const nodeCount = 15;
    
    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 3 + 2
      });
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw connections to nearby nodes
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              
              // Gradient line based on distance
              const gradient = ctx.createLinearGradient(node.x, node.y, otherNode.x, otherNode.y);
              const opacity = (1 - distance / 150) * 0.15;
              gradient.addColorStop(0, `rgba(30, 64, 175, ${opacity})`);
              gradient.addColorStop(0.5, `rgba(79, 70, 229, ${opacity})`);
              gradient.addColorStop(1, `rgba(124, 58, 237, ${opacity})`);
              
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });

        // Draw node with gradient
        const nodeGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius);
        nodeGradient.addColorStop(0, 'rgba(124, 58, 237, 0.3)');
        nodeGradient.addColorStop(1, 'rgba(30, 64, 175, 0.1)');
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeGradient;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const cleanup = () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener('resize', resizeCanvas);
    };

    return cleanup;
  }, []);

  // 修正: 使用 dangerouslySetInnerHTML 来注入 CSS 字符串，这是在 React 组件中嵌入 <style> 块的标准方法。
  const particleStyles = `
    @keyframes float {
      0% {
        transform: translateY(100vh) translateX(0) scale(0);
        opacity: 0;
      }
      10% {
        transform: translateY(90vh) translateX(10px) scale(1);
        opacity: 0.3;
      }
      20% {
        transform: translateY(80vh) translateX(-10px) scale(1.1);
        opacity: 0.5;
      }
      30% {
        transform: translateY(70vh) translateX(15px) scale(1);
        opacity: 0.4;
      }
      40% {
        transform: translateY(60vh) translateX(-15px) scale(1.2);
        opacity: 0.6;
      }
      50% {
        transform: translateY(50vh) translateX(10px) scale(1);
        opacity: 0.5;
      }
      60% {
        transform: translateY(40vh) translateX(-10px) scale(1.1);
        opacity: 0.4;
      }
      70% {
        transform: translateY(30vh) translateX(15px) scale(1);
        opacity: 0.3;
      }
      80% {
        transform: translateY(20vh) translateX(-15px) scale(0.9);
        opacity: 0.2;
      }
      90% {
        transform: translateY(10vh) translateX(10px) scale(0.8);
        opacity: 0.1;
      }
      100% {
        transform: translateY(-10vh) translateX(0) scale(0);
        opacity: 0;
      }
    }
    
    .particle-1 { left: 10%; animation: float 20s linear infinite; }
    .particle-2 { left: 30%; animation: float 25s linear infinite; }
    .particle-3 { left: 50%; animation: float 18s linear infinite; }
    .particle-4 { left: 70%; animation: float 22s linear infinite; }
    .particle-5 { left: 90%; animation: float 28s linear infinite; }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: particleStyles }} />

      {/* Animated canvas background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{ mixBlendMode: 'multiply' }}
      />
      
      {/* Static gradient overlays for depth */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-left gradient */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl"></div>
        
        {/* Bottom-right gradient */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-purple-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl"></div>
        
        {/* Center floating orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-radial from-indigo-500/5 via-purple-500/3 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      {/* Animated thinking particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="particle-1 absolute w-2 h-2 bg-blue-400/30 rounded-full"></div>
        <div className="particle-2 absolute w-3 h-3 bg-purple-400/30 rounded-full"></div>
        <div className="particle-3 absolute w-2 h-2 bg-indigo-400/30 rounded-full"></div>
        <div className="particle-4 absolute w-4 h-4 bg-blue-500/20 rounded-full"></div>
        <div className="particle-5 absolute w-2 h-2 bg-purple-500/20 rounded-full"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30, 64, 175, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 64, 175, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Synaptic connections SVG pattern */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="neural-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="1" fill="url(#dot-gradient)" className="animate-pulse" />
            <circle cx="95" cy="5" r="1" fill="url(#dot-gradient)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <circle cx="50" cy="50" r="1.5" fill="url(#dot-gradient)" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <circle cx="5" cy="95" r="1" fill="url(#dot-gradient)" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
            <circle cx="95" cy="95" r="1" fill="url(#dot-gradient)" className="animate-pulse" style={{ animationDelay: '2s' }} />
            
            <line x1="5" y1="5" x2="50" y2="50" stroke="url(#line-gradient)" strokeWidth="0.5" opacity="0.3" />
            <line x1="95" y1="5" x2="50" y2="50" stroke="url(#line-gradient)" strokeWidth="0.5" opacity="0.3" />
            <line x1="5" y1="95" x2="50" y2="50" stroke="url(#line-gradient)" strokeWidth="0.5" opacity="0.3" />
            <line x1="95" y1="95" x2="50" y2="50" stroke="url(#line-gradient)" strokeWidth="0.5" opacity="0.3" />
          </pattern>
          
          <radialGradient id="dot-gradient">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="50%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#1e40af" />
          </radialGradient>
          
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e40af" stopOpacity="0" />
            <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#1e40af" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#neural-pattern)" />
      </svg>
    </>
  );
};

export default BackgroundPatterns;