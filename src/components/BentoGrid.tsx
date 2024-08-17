import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";

export function BentoGridTwoRow() {
  return (
    <BentoGrid className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 md:grid-rows-[repeat(2,_1fr)] gap-4">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Bring Your Own Data",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <div></div>,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Create Charts",
    description: "Dive into the transformative power of technology.",
    header: (
      <Image
        src="/create-charts.png"
        alt="Create Charts"
        width={100}
        height={100}
        layout="responsive"
        sizes="80vw"
      />
    ),
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "OpenBB Copilot",
    description: "Discover the beauty of thoughtful and functional design.",
    header: (
      <Image
        src="/copilot.png"
        alt="OpenBB Copilot"
        width={100}
        height={100}
        layout="responsive"
        sizes="80vw"
      />
    ),
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Custom Dashboard",
    description: "Discover the beauty of thoughtful and functional design.",
    header: (
      <Image
        src="/dashboard.png"
        alt="Custom Dashboard"
        width={100}
        height={100}
        layout="responsive"
        sizes="80vw"
      />
    ),
    className: "md:col-span-1",
  },
  {
    title: "Download Reports",
    description:
      "Understand the impact of effective communication in our lives.",
    header: (
      <Image
        src="/reports.png"
        alt="Download Reports"
        width={100}
        height={100}
        layout="responsive"
        sizes="80vw"
      />
    ),
    className: "md:col-span-1",
  },
];
