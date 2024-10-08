import { cn } from "@/lib/utils";
import Card from "../GradientCard";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl bg-[#151518] transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] border border-transparent justify-between flex flex-col",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold  text-white mb-2 mt-2">{title}</div>
        <div className="font-sans font-normal text-white text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
