
import React from 'react';
import { useQuantumCursor } from '@/hooks/useQuantumCursor';

const QuantumCursor = () => {
  const { canvasRef } = useQuantumCursor();

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default QuantumCursor;
