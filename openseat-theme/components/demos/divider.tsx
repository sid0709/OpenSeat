"use client";

import { Divider } from "@astryxdesign/core/Divider";
import { Stack } from "@astryxdesign/core/Stack";
import { Text } from "@astryxdesign/core/Text";
import { Examples, Preview } from "./shared";

export default function DividerDemo() {
  return (
    <Examples>
      <Preview label="Horizontal">
        <Stack width={280} gap={3}>
          <Text display="block">Above</Text>
          <Divider />
          <Text display="block">Below</Text>
        </Stack>
      </Preview>
      <Preview label="With label">
        <Stack width={280} gap={3}>
          <Text display="block">Invite</Text>
          <Divider label="or" />
          <Text display="block">Share a link</Text>
        </Stack>
      </Preview>
    </Examples>
  );
}
