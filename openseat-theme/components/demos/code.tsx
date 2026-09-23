"use client";

import { Text } from "@astryxdesign/core/Text";
import { Examples, Preview } from "./shared";

export default function CodeDemo() {
  return (
    <Examples>
      <Preview label="Inline">
        <Text>
          Import <Text type="code">Button</Text> from <Text type="code">@astryxdesign/core/Button</Text>.
        </Text>
      </Preview>
    </Examples>
  );
}
