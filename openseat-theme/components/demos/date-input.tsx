"use client";

import { useState } from "react";
import { DateInput } from "@astryxdesign/core/DateInput";
import type { ISODateString } from "@astryxdesign/core/Calendar";
import { ClientOnly } from "@/components/ClientOnly";
import { Examples, Preview } from "./shared";

export default function DateInputDemo() {
  const [value, setValue] = useState<ISODateString | undefined>("2026-09-22");

  return (
    <Examples>
      <Preview label="Start date">
        <ClientOnly>
          <DateInput width={220} label="Start date" value={value} onChange={setValue} />
        </ClientOnly>
      </Preview>
      <Preview label="Disabled">
        <DateInput width={220} label="Locked" value={"2026-09-22" as ISODateString} isDisabled />
      </Preview>
    </Examples>
  );
}
