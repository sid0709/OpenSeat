"use client";

import { Button } from "@astryxdesign/core/Button";
import { HoverCard } from "@astryxdesign/core/HoverCard";
import { Text } from "@astryxdesign/core/Text";
import { Examples, Preview } from "./shared";

export default function HoverCardDemo() {
  return (
    <Examples>
      <Preview label="Preview">
        <HoverCard className="" style={{}} content={<Text>Jordan · invited 2 days ago</Text>}>
          <Button label="Preview" variant="secondary" />
        </HoverCard>
      </Preview>
    </Examples>
  );
}
