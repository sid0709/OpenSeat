"use client";

import { useMemo, useState, type ReactNode } from "react";
import { IconButton } from "./Action";

const DOW = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function daysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

export function Calendar({
  value,
  onChange,
}: {
  value?: Date;
  onChange?: (date: Date) => void;
}) {
  const selected = value ?? new Date();
  const [cursor, setCursor] = useState(new Date(selected.getFullYear(), selected.getMonth(), 1));

  const cells = useMemo(() => {
    const year = cursor.getFullYear();
    const month = cursor.getMonth();
    const first = new Date(year, month, 1).getDay();
    const count = daysInMonth(year, month);
    const prevCount = daysInMonth(year, month - 1);
    const out: { day: number; date: Date; muted: boolean }[] = [];
    for (let i = first - 1; i >= 0; i--) {
      const day = prevCount - i;
      out.push({ day, date: new Date(year, month - 1, day), muted: true });
    }
    for (let d = 1; d <= count; d++) {
      out.push({ day: d, date: new Date(year, month, d), muted: false });
    }
    while (out.length % 7 !== 0) {
      const day = out.length - (first + count) + 1;
      out.push({ day, date: new Date(year, month + 1, day), muted: true });
    }
    return out;
  }, [cursor]);

  const isSelected = (d: Date) =>
    value &&
    d.getFullYear() === value.getFullYear() &&
    d.getMonth() === value.getMonth() &&
    d.getDate() === value.getDate();

  return (
    <div className="os-cal">
      <div className="os-cal-head">
        <IconButton
          label="Previous month"
          size="sm"
          onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))}
        >
          ‹
        </IconButton>
        <span className="body-strong">
          {cursor.toLocaleString("en", { month: "long", year: "numeric" })}
        </span>
        <IconButton
          label="Next month"
          size="sm"
          onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))}
        >
          ›
        </IconButton>
      </div>
      <div className="os-cal-grid">
        {DOW.map((d) => (
          <span key={d} className="caption os-cal-dow">
            {d}
          </span>
        ))}
        {cells.map((c, i) => (
          <button
            key={i}
            type="button"
            className={
              "body-sm os-cal-day" +
              (c.muted ? " os-cal-day-muted" : "") +
              (isSelected(c.date) ? " os-cal-day-selected" : "")
            }
            onClick={() => onChange?.(c.date)}
          >
            {c.day}
          </button>
        ))}
      </div>
    </div>
  );
}

export function Carousel({ slides }: { slides: ReactNode[] }) {
  const [i, setI] = useState(0);
  return (
    <div className="os-carousel" style={{ width: "100%" }}>
      <div className="os-carousel-track" style={{ transform: `translateX(-${i * 100}%)` }}>
        {slides.map((slide, idx) => (
          <div key={idx} className="os-carousel-slide">
            {slide}
          </div>
        ))}
      </div>
      <IconButton
        label="Previous slide"
        className="os-carousel-nav"
        onClick={() => setI((n) => Math.max(0, n - 1))}
        style={{ left: 8 }}
      >
        ‹
      </IconButton>
      <IconButton
        label="Next slide"
        className="os-carousel-nav"
        onClick={() => setI((n) => Math.min(slides.length - 1, n + 1))}
        style={{ right: 8 }}
      >
        ›
      </IconButton>
    </div>
  );
}
