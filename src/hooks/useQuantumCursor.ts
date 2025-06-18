
import { useEffect, useRef, useState } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  id: number;
}

interface Connection {
  from: Node;
  to: Node;
  strength: number;
  pulsePhase: number;
}

interface QuantumRipple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  life: number;
  maxLife: number;
  intensity: number;
}

export const useQuantumCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const ripplesRef = useRef<QuantumRipple[]>([]);
  const nodeIdCounter = useRef(0);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();

    const createNode = (x: number, y: number) => {
      const node: Node = {
        x,
        y,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        life: 0,
        maxLife: 120 + Math.random() * 60,
        id: nodeIdCounter.current++
      };
      nodesRef.current.push(node);
      
      // Create connections with nearby nodes
      nodesRef.current.forEach(otherNode => {
        if (otherNode.id !== node.id) {
          const distance = Math.sqrt(
            Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
          );
          if (distance < 150 && connectionsRef.current.length < 20) {
            connectionsRef.current.push({
              from: node,
              to: otherNode,
              strength: 1 - (distance / 150),
              pulsePhase: Math.random() * Math.PI * 2
            });
          }
        }
      });
    };

    const createQuantumRipple = (x: number, y: number) => {
      const ripple: QuantumRipple = {
        x,
        y,
        radius: 0,
        maxRadius: 200 + Math.random() * 100,
        life: 0,
        maxLife: 60,
        intensity: 0.8 + Math.random() * 0.4
      };
      ripplesRef.current.push(ripple);
    };

    const updateAndRender = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and render quantum ripples
      for (let i = ripplesRef.current.length - 1; i >= 0; i--) {
        const ripple = ripplesRef.current[i];
        ripple.life++;
        ripple.radius = (ripple.life / ripple.maxLife) * ripple.maxRadius;
        
        const alpha = (1 - ripple.life / ripple.maxLife) * ripple.intensity;
        
        // Create quantum interference pattern
        ctx.save();
        ctx.globalAlpha = alpha;
        
        // Main ripple
        const gradient = ctx.createRadialGradient(
          ripple.x, ripple.y, 0,
          ripple.x, ripple.y, ripple.radius
        );
        gradient.addColorStop(0, 'rgba(0, 255, 255, 0)');
        gradient.addColorStop(0.7, 'rgba(0, 255, 255, 0.4)');
        gradient.addColorStop(1, 'rgba(255, 0, 255, 0.2)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.stroke();
        
        // Quantum wave interference
        ctx.setLineDash([]);
        ctx.strokeStyle = `rgba(0, 255, 255, ${alpha * 0.3})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius * 0.6, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.restore();
        
        if (ripple.life >= ripple.maxLife) {
          ripplesRef.current.splice(i, 1);
        }
      }

      // Update and render nodes
      for (let i = nodesRef.current.length - 1; i >= 0; i--) {
        const node = nodesRef.current[i];
        node.life++;
        node.x += node.vx;
        node.y += node.vy;
        
        // Gravitational pull towards cursor
        const dx = mousePosition.x - node.x;
        const dy = mousePosition.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 200) {
          const force = (200 - distance) * 0.00005;
          node.vx += (dx / distance) * force;
          node.vy += (dy / distance) * force;
        }
        
        // Add some drift
        node.vx *= 0.99;
        node.vy *= 0.99;
        
        const alpha = 1 - (node.life / node.maxLife);
        const size = 2 + Math.sin(node.life * 0.1) * 1;
        
        // Render node with quantum glow
        ctx.save();
        ctx.globalAlpha = alpha;
        
        // Glow effect
        const glowGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, size * 3
        );
        glowGradient.addColorStop(0, 'rgba(0, 255, 255, 0.8)');
        glowGradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
        
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Core node
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
        
        if (node.life >= node.maxLife) {
          nodesRef.current.splice(i, 1);
        }
      }

      // Update and render connections
      for (let i = connectionsRef.current.length - 1; i >= 0; i--) {
        const connection = connectionsRef.current[i];
        
        // Remove connections if nodes are dead
        if (connection.from.life >= connection.from.maxLife || 
            connection.to.life >= connection.to.maxLife) {
          connectionsRef.current.splice(i, 1);
          continue;
        }
        
        connection.pulsePhase += 0.05;
        
        const alpha = Math.min(
          1 - (connection.from.life / connection.from.maxLife),
          1 - (connection.to.life / connection.to.maxLife)
        ) * connection.strength;
        
        const pulseIntensity = (Math.sin(connection.pulsePhase) + 1) * 0.5;
        
        ctx.save();
        ctx.globalAlpha = alpha * (0.3 + pulseIntensity * 0.7);
        
        // Create flowing gradient
        const gradient = ctx.createLinearGradient(
          connection.from.x, connection.from.y,
          connection.to.x, connection.to.y
        );
        gradient.addColorStop(0, 'rgba(0, 255, 255, 1)');
        gradient.addColorStop(0.5, 'rgba(255, 0, 255, 1)');
        gradient.addColorStop(1, 'rgba(0, 255, 255, 1)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1 + pulseIntensity;
        ctx.setLineDash([5, 5]);
        ctx.lineDashOffset = connection.pulsePhase * 10;
        
        ctx.beginPath();
        ctx.moveTo(connection.from.x, connection.from.y);
        ctx.lineTo(connection.to.x, connection.to.y);
        ctx.stroke();
        
        ctx.restore();
      }

      animationFrameRef.current = requestAnimationFrame(updateAndRender);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create nodes occasionally
      if (Math.random() < 0.3 && nodesRef.current.length < 15) {
        createNode(e.clientX, e.clientY);
      }
    };

    const handleClick = (e: MouseEvent) => {
      createQuantumRipple(e.clientX, e.clientY);
      
      // Create burst of nodes
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          createNode(
            e.clientX + (Math.random() - 0.5) * 50,
            e.clientY + (Math.random() - 0.5) * 50
          );
        }, i * 50);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('resize', updateCanvasSize);
    
    updateAndRender();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', updateCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition.x, mousePosition.y]);

  return { canvasRef, mousePosition };
};
