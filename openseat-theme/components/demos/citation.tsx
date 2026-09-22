"use client";

import { Citation } from "@astryxdesign/core/Citation";
import { Text } from "@astryxdesign/core/Text";
import { Examples, Preview, Row } from "./shared";

export default function CitationDemo() {
  return (
    <Examples>
      <Preview label="In copy">
        <Text>
          OpenSeat is fully customizable
          <Citation number={1} source={{ title: "OpenSeat", url: "https://astryx.atmeta.com/" }} />.
        </Text>
      </Preview>
      <Preview label="Standalone">
        <Row>
          <Citation number={1} source={{ title: "OpenSeat", url: "https://astryx.atmeta.com/" }} />
          <Citation number={2} source={{ title: "React", url: "https://react.dev/" }} />
        </Row>
      </Preview>
    </Examples>
  );
}
