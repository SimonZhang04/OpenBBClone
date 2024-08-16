import React from "react";

interface GlowBorderProps {
  children: React.ReactNode;
}

const GlowBorder: React.FC<GlowBorderProps> = ({ children }) => {
  return (
    <div
      className="relative rounded-lg m-24"
      style={{ boxShadow: `0 0 40px 20px rgba(72, 61, 139, 0.6)` }}
    >
      {children}
    </div>
  );
};

export default GlowBorder;
