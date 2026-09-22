"use client";

import { useState } from "react";
import { Selector } from "@astryxdesign/core/Selector";
import { Examples, Preview } from "./shared";

const OPTIONS = [
  { value: "design", label: "Design" },
  { value: "eng", label: "Engineering" },
  { value: "pm", label: "Product" },
  { value: "research", label: "Research" },
];

export default function SelectDemo() {
  const [value, setValue] = useState("design");

  return (
    <Examples>
      <Preview label="Role">
        <Selector width={220} label="Role" value={value} onChange={setValue} options={OPTIONS} />
      </Preview>
    </Examples>
  );
}
