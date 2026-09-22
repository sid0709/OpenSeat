"use client";

import { useState } from "react";
import { NumberInput } from "@astryxdesign/core/NumberInput";
import { Examples, Preview, Row } from "./shared";

export default function NumberInputDemo() {
  const [rate, setRate] = useState<number | null>(65);
  const [count, setCount] = useState<number | null>(2);

  return (
    <Examples>
      <Preview label="Rate">
        <NumberInput width={160} label="Rate" value={rate} onChange={setRate} hasClear />
      </Preview>
      <Preview label="Steppers">
        <Row>
          <NumberInput width={160} label="People" value={count} onChange={setCount} />
        </Row>
      </Preview>
    </Examples>
  );
}
