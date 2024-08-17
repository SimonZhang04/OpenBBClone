import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from "./CarouselCard";

export default function ReviewsCarousel() {
  return (
    <Carousel className="w-full max-w-3xl">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div>
              <TestimonialCard
                text="I am thrilled with the new solutions provided by OpenBB. Tasks that used to take us weeks can now be completed within a few hours saving approximately $30,000 in staffing costs. In addition, the data is easier to access, less error-prone, and more robust. This has significantly boosted the productivity of both myself and my assistant, allowing us to focus more on value-adding tasks including more one-on-one client time."
                image="/path-to-image/logo.png"
                name="Dr. Chase Armer"
                title="President, CFP, CFA, EA of Planned Solutions"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
