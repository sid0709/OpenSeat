"use client";

import { useState } from "react";
import { Calendar } from "@astryxdesign/core/Calendar";
import type { ISODateString } from "@astryxdesign/core/Calendar";
import { ClientOnly } from "@/components/ClientOnly";
import { Examples, Preview } from "./shared";

export default function CalendarDemo() {
  const [value, setValue] = useState<ISODateString>("2026-09-22");

  return (
    <Examples>
      <Preview label="Single date">
        <ClientOnly>
          <Calendar value={value} onChange={setValue} />
        </ClientOnly>
      </Preview>
    </Examples>
  );
}
