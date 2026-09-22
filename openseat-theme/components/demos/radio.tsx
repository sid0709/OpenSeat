"use client";

import { useState } from "react";
import { RadioList, RadioListItem } from "@astryxdesign/core/RadioList";
import { Examples, Preview } from "./shared";

export default function RadioDemo() {
  const [value, setValue] = useState("fixed");

  return (
    <Examples>
      <Preview label="Rate">
        <RadioList label="Rate" value={value} onChange={setValue}>
          <RadioListItem label="Fixed" value="fixed" />
          <RadioListItem label="Hourly" value="hourly" />
          <RadioListItem label="Not sure" value="unknown" />
        </RadioList>
      </Preview>
    </Examples>
  );
}
