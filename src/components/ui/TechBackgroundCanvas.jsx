import React, { useEffect, useRef } from 'react';

export const TechBackgroundCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle nodes configuration
    const particleCount = Math.min(Math.floor(window.innerWidth / 20), 60);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 1,
        color: Math.random() > 0.4 ? 'rgba(0, 240, 255, ' : 'rgba(59, 130, 246, ',
        alpha: Math.random() * 0.5 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulseAngle: Math.random() * Math.PI * 2
      });
    }

    // Abstract data flow packets along grid
    const packets = [];
    const packetCount = 8;
    for (let i = 0; i < packetCount; i++) {
      packets.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 1.5 + 0.8,
        direction: Math.random() > 0.5 ? 'horizontal' : 'vertical',
        length: Math.random() * 40 + 20,
        opacity: Math.random() * 0.4 + 0.1
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw subtle grid lines
      const gridSize = 50;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Update & Draw Data Flow Packets
      packets.forEach((pkt) => {
        ctx.beginPath();
        if (pkt.direction === 'horizontal') {
          pkt.x += pkt.speed;
          if (pkt.x > canvas.width + pkt.length) pkt.x = -pkt.length;
          
          const grad = ctx.createLinearGradient(pkt.x - pkt.length, pkt.y, pkt.x, pkt.y);
          grad.addColorStop(0, 'rgba(0, 240, 255, 0)');
          grad.addColorStop(1, `rgba(0, 240, 255, ${pkt.opacity})`);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.5;
          ctx.moveTo(pkt.x - pkt.length, pkt.y);
          ctx.lineTo(pkt.x, pkt.y);
        } else {
          pkt.y += pkt.speed;
          if (pkt.y > canvas.height + pkt.length) pkt.y = -pkt.length;

          const grad = ctx.createLinearGradient(pkt.x, pkt.y - pkt.length, pkt.x, pkt.y);
          grad.addColorStop(0, 'rgba(59, 130, 246, 0)');
          grad.addColorStop(1, `rgba(59, 130, 246, ${pkt.opacity})`);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.5;
          ctx.moveTo(pkt.x, pkt.y - pkt.length);
          ctx.lineTo(pkt.x, pkt.y);
        }
        ctx.stroke();
      });

      // Update and draw particles & connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        p.pulseAngle += p.pulseSpeed;
        const currentAlpha = p.alpha + Math.sin(p.pulseAngle) * 0.15;

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0.1, Math.min(currentAlpha, 0.8))})`;
        ctx.fill();

        // Draw subtle node glow ring
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0.02, Math.min(currentAlpha * 0.2, 0.2))})`;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineOpacity = (1 - dist / 140) * 0.18;
            ctx.strokeStyle = `rgba(0, 240, 255, ${lineOpacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#0B0F17]" />
      {/* Radial Gradient Glow Highlights */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px]" />
      
      {/* Dynamic Network Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />
    </div>
  );
};
