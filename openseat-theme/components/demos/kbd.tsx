"use client";

import { Kbd } from "@astryxdesign/core/Kbd";
import { Text } from "@astryxdesign/core/Text";
import { Examples, Preview, Row } from "./shared";

export default function KbdDemo() {
  return (
    <Examples>
      <Preview label="Shortcuts">
        <Row>
          <Kbd keys="mod+k" />
          <Kbd keys="mod+enter" />
          <Kbd keys="esc" />
        </Row>
      </Preview>
      <Preview label="In copy">
        <Text>
          Press <Kbd keys="mod+k" /> to open the command palette.
        </Text>
      </Preview>
    </Examples>
  );
}
