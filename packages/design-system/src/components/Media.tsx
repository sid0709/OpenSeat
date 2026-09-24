"use client";

import { useState, type ReactNode } from "react";
import { IconButton } from "./Action";
import type { ControlSize } from "./Input";

export interface CarouselProps {
  slides: ReactNode[];
  size?: ControlSize;
  label?: string;
}

export function Carousel({ slides, size = "md", label = "Slides" }: CarouselProps) {
  const [i, setI] = useState(0);
  return (
    <div className={`os-carousel os-carousel-${size}`} aria-roledescription="carousel" aria-label={label}>
      <div className="os-carousel-track" style={{ transform: `translateX(-${i * 100}%)` }}>
        {slides.map((slide, idx) => (
          <div key={idx} className="os-carousel-slide" aria-hidden={idx !== i}>
            {slide}
          </div>
        ))}
      </div>
      <IconButton label="Previous slide" className="os-carousel-nav" shape="pill" variant="secondary" onClick={() => setI((n) => Math.max(0, n - 1))} style={{ left: 8 }} disabled={i === 0}>
        ‹
      </IconButton>
      <IconButton
        label="Next slide"
        className="os-carousel-nav"
        shape="pill"
        variant="secondary"
        onClick={() => setI((n) => Math.min(slides.length - 1, n + 1))}
        style={{ right: 8 }}
        disabled={i === slides.length - 1}
      >
        ›
      </IconButton>
      <div className="os-carousel-dots">
        {slides.map((_, idx) => (
          <button key={idx} type="button" className={idx === i ? "os-carousel-dot os-carousel-dot-on" : "os-carousel-dot"} aria-label={`Slide ${idx + 1}`} onClick={() => setI(idx)} />
        ))}
      </div>
    </div>
  );
}
