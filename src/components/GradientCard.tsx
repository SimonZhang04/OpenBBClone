import React from "react";

interface CardProps {
  color: string;
  title: string;
  description: string;
  buttonText: string;
  direction?:
    | "left"
    | "middle"
    | "top left"
    | "top right"
    | "bottom left"
    | "bottom right"
    | "top"
    | "bottom";
  gradientSize?: "small" | "medium" | "large";
}

const Card: React.FC<CardProps> = ({
  color,
  title,
  description,
  buttonText,
  direction = "middle",
  gradientSize = "medium",
}) => {
  const getGradientPosition = () => {
    switch (direction) {
      case "left":
        return "circle at 10% 50%";
      case "top left":
        return "circle at 25% 20%";
      case "top right":
        return "circle at 75% 20%";
      case "bottom left":
        return "circle at 25% 80%";
      case "bottom right":
        return "circle at 75% 80%";
      case "top":
        return "circle at 50% 20%";
      case "bottom":
        return "circle at 50% 80%";
      case "middle":
      default:
        return "circle at 50% 50%";
    }
  };

  const hexToRgb = (hex: string) => {
    const bigint = parseInt(hex.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  };

  const getGradientStops = () => {
    const transparentColor = `rgba(30, 30, 30, 0.1)`;

    switch (gradientSize) {
      case "small":
        return `rgba(${hexToRgb(color)}, 0.2) 5%, rgba(${hexToRgb(
          color
        )}, 0.2) 20%, ${transparentColor} 40%`;
      case "large":
        return `rgba(${hexToRgb(color)}, 0.2) 15%, rgba(${hexToRgb(
          color
        )}, 0.2) 50%, ${transparentColor} 80%`;
      case "medium":
      default:
        return `rgba(${hexToRgb(color)}, 0.2) 10%, rgba(${hexToRgb(
          color
        )}, 0.2) 40%, ${transparentColor} 70%`;
    }
  };

  return (
    <div
      className="max-w-sm p-6 rounded-lg shadow-lg bg-[#151518]"
      style={{
        background: `radial-gradient(${getGradientPosition()}, ${getGradientStops()})`,
      }}
    >
      <div className="flex items-center mb-4">
        <span
          className={`px-2 py-1 text-sm text-white rounded-full`}
          style={{ backgroundColor: `${color}` }}
        >
          Add-in for Excel
        </span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="mb-6">{description}</p>
      <button className="px-4 py-2 text-sm font-medium text-white bg-background rounded border-2 border-grey hover:border-white">
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
