"use client";

import { useState } from "react";
import { DateInput, type FieldSize } from "@openseat/design-system";
import { Stack } from "@astryxdesign/core/Stack";
import { Examples, Preview } from "./shared";

const SIZES: FieldSize[] = ["sm", "md", "lg"];

export default function DateInputDemo() {
  const [values, setValues] = useState<Record<FieldSize, string>>({
    sm: "2026-09-24",
    md: "2026-09-24",
    lg: "2026-09-24",
  });

  return (
    <Examples>
      <Preview label="Sizes — md is the default">
        <Stack gap={3} width={280}>
          {SIZES.map((size) => (
            <DateInput
              key={size}
              size={size}
              label={size}
              value={values[size]}
              onChange={(event) => setValues((current) => ({ ...current, [size]: event.target.value }))}
            />
          ))}
        </Stack>
      </Preview>
      <Preview label="Disabled">
        <div style={{ width: 280 }}>
          <DateInput label="Locked" value="2026-09-24" onChange={() => undefined} disabled />
        </div>
      </Preview>
    </Examples>
  );
}
