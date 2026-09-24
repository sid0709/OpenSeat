"use client";

import { useState } from "react";
import { FileInput } from "@openseat/design-system";
import { Text } from "@astryxdesign/core/Text";
import { Examples, Preview } from "./shared";

export default function FileInputDemo() {
  const [name, setName] = useState<string | null>(null);

  return (
    <Examples>
      <Preview label="Drop zone">
        <div style={{ width: 360 }}>
          <FileInput
            label="Add an attachment"
            onChange={(files) => setName(files?.[0]?.name ?? null)}
          />
          {name && (
            <Text type="supporting" color="secondary" display="block">
              Ready to send · {name}
            </Text>
          )}
        </div>
      </Preview>
    </Examples>
  );
}
