"use client";

import { Card } from "@astryxdesign/core/Card";
import { ContextMenu } from "@astryxdesign/core/ContextMenu";
import { Text } from "@astryxdesign/core/Text";
import { Examples, Preview } from "./shared";

export default function ContextMenuDemo() {
  return (
    <Examples>
      <Preview label="Right-click">
        <ContextMenu
          items={[
            { label: "Open" },
            { label: "Duplicate" },
            { type: "divider" },
            { label: "Delete", variant: "destructive" },
          ]}
        >
          <Card>
            <Text>Right-click me</Text>
          </Card>
        </ContextMenu>
      </Preview>
    </Examples>
  );
}
