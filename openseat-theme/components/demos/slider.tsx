"use client";

import { useState } from "react";
import { Slider } from "@astryxdesign/core/Slider";
import { Examples, Preview } from "./shared";

export default function SliderDemo() {
  const [opacity, setOpacity] = useState(60);
  const [volume, setVolume] = useState(25);

  return (
    <Examples>
      <Preview label="Opacity">
        <Slider width={240} label="Opacity" value={opacity} onChange={setOpacity} />
      </Preview>
      <Preview label="Volume">
        <Slider width={240} label="Volume" value={volume} onChange={setVolume} />
      </Preview>
    </Examples>
  );
}
