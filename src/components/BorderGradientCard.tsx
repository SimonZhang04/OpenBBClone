import React from "react";

interface GlowBorderProps {
  children: React.ReactNode;
}

const GlowBorder: React.FC<GlowBorderProps> = ({ children }) => {
  return (
    <div
      className={`relative rounded-lg`}
      style={{ boxShadow: `0 0 90px 13px rgba(0,0,0,0.1)` }}
    >
      {children}
    </div>
  );
};

export default GlowBorder;
