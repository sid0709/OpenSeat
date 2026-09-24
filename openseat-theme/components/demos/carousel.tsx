"use client";

import { Carousel, type ControlSize } from "@openseat/design-system";
import { Examples, Preview } from "./shared";

const SIZES: ControlSize[] = ["sm", "md", "lg"];
const SLIDES = [
  { title: "Morning rooms", color: "var(--color-accent)" },
  { title: "Afternoon holds", color: "var(--color-success)" },
  { title: "Evening release", color: "var(--color-warning)" },
];

export default function CarouselDemo() {
  return (
    <Examples>
      {SIZES.map((size) => (
        <Preview key={size} label={size}>
          <Carousel
            size={size}
            label={`${size} slides`}
            slides={SLIDES.map((slide) => (
              <div key={slide.title} className="os-carousel-card" style={{ background: slide.color }}>
                {slide.title}
              </div>
            ))}
          />
        </Preview>
      ))}
    </Examples>
  );
}
