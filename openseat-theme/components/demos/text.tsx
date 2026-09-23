"use client";

import { Stack } from "@astryxdesign/core/Stack";
import { Text } from "@astryxdesign/core/Text";
import { Examples, Preview } from "./shared";

export default function TextDemo() {
  return (
    <Examples>
      <Preview label="Types">
        <Stack gap={2}>
          <Text type="display-1" display="block">
            Display 1
          </Text>
          <Text type="large" display="block">
            Scope: a full identity refresh.
          </Text>
          <Text display="block">Invited people can see this room.</Text>
          <Text type="label" display="block">
            Label
          </Text>
          <Text type="supporting" display="block">
            Posted 2 days ago
          </Text>
          <Text type="code" display="block">
            @astryxdesign/core
          </Text>
        </Stack>
      </Preview>
      <Preview label="Color">
        <Stack gap={1}>
          <Text color="primary" display="block">
            Primary
          </Text>
          <Text color="secondary" display="block">
            Secondary
          </Text>
          <Text color="disabled" display="block">
            Disabled
          </Text>
          <Text color="accent" display="block">
            Accent
          </Text>
        </Stack>
      </Preview>
    </Examples>
  );
}
