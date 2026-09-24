"use client";

import { useState } from "react";
import { TextInput, type FieldSize } from "@openseat/design-system";
import { Stack } from "@astryxdesign/core/Stack";
import { Examples, Preview } from "./shared";

const SIZES: FieldSize[] = ["sm", "md", "lg"];

export default function TextInputDemo() {
  const [values, setValues] = useState<Record<FieldSize, string>>({
    sm: "",
    md: "",
    lg: "",
  });

  return (
    <Examples>
      <Preview label="Sizes — md is the default">
        <Stack gap={3} width={320}>
          {SIZES.map((size) => (
            <TextInput
              key={size}
              size={size}
              label={size}
              value={values[size]}
              onChange={(event) => setValues((current) => ({ ...current, [size]: event.target.value }))}
              placeholder="Your rate"
            />
          ))}
        </Stack>
      </Preview>
      <Preview label="States">
        <Stack gap={3} width={320}>
          <TextInput label="Disabled" value="Jordan" onChange={() => undefined} disabled />
          <TextInput label="Email" value="not-an-email" onChange={() => undefined} error helper="Enter a valid email." />
        </Stack>
      </Preview>
    </Examples>
  );
}
