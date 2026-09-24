"use client";

import { useState } from "react";
import { TextArea, type FieldSize } from "@openseat/design-system";
import { Stack } from "@astryxdesign/core/Stack";
import { Examples, Preview } from "./shared";

const SIZES: FieldSize[] = ["sm", "md", "lg"];

export default function TextAreaDemo() {
  const [values, setValues] = useState<Record<FieldSize, string>>({
    sm: "",
    md: "",
    lg: "",
  });

  return (
    <Examples>
      <Preview label="Sizes — md is the default">
        <Stack gap={4} width={360}>
          {SIZES.map((size) => (
            <TextArea
              key={size}
              size={size}
              label={size}
              value={values[size]}
              onChange={(event) => setValues((current) => ({ ...current, [size]: event.target.value }))}
              placeholder="What do you need?"
            />
          ))}
        </Stack>
      </Preview>
      <Preview label="Error">
        <div style={{ width: 360 }}>
          <TextArea label="Brief" value="Too short" onChange={() => undefined} error helper="Add more detail." />
        </div>
      </Preview>
    </Examples>
  );
}
