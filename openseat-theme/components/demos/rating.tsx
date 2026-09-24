"use client";

import { useState } from "react";
import { Rating } from "@openseat/design-system";
import { Stack } from "@astryxdesign/core/Stack";
import { Examples, Preview } from "./shared";

const CAPTIONS = ["", "Poor", "Fair", "Good", "Great", "Excellent"];

export default function RatingDemo() {
  const [score, setScore] = useState(4);
  const [ten, setTen] = useState(7);

  return (
    <Examples>
      <Preview label="Interactive">
        <Rating value={score} onChange={setScore} caption={CAPTIONS[score]} />
      </Preview>
      <Preview label="Read only">
        <Stack gap={3}>
          <Rating value={5} readOnly label="Client rating" caption="Excellent" />
          <Rating value={3} readOnly size="sm" showValue={false} label="Fit" />
        </Stack>
      </Preview>
      <Preview label="Sizes">
        <Stack gap={3}>
          <Rating value={4} readOnly size="sm" />
          <Rating value={4} readOnly size="md" />
          <Rating value={4} readOnly size="lg" />
        </Stack>
      </Preview>
      <Preview label="Ten marks">
        <Rating value={ten} max={10} onChange={setTen} label="Confidence" />
      </Preview>
    </Examples>
  );
}
