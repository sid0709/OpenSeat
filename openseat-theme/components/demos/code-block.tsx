"use client";

import { CodeBlock } from "@astryxdesign/core/CodeBlock";
import { Examples, Preview } from "./shared";

const SAMPLE = `import { Button } from "@astryxdesign/core/Button";

<Button label="Save" variant="primary" />`;

export default function CodeBlockDemo() {
  return (
    <Examples>
      <Preview label="TSX">
        <CodeBlock language="tsx" title="Button" width="100%" code={SAMPLE} />
      </Preview>
    </Examples>
  );
}
