import React from "react";

interface AnimatedLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: "h-12 w-auto",
  md: "h-16 w-auto",
  lg: "h-24 w-auto",
};

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ size = "md", className = "" }) => {
  return (
    <img
      src="/lovable-uploads/FINAL_invictus-removebg-preview.png"
      alt="Invictus Logo"
      className={`${sizeMap[size]} ${className}`}
      style={{ objectFit: "contain" }}
    />
  );
};

export default AnimatedLogo;
