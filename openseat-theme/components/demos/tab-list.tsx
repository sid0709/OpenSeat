"use client";

import { useState } from "react";
import { Tab, TabList } from "@astryxdesign/core/TabList";
import { Text } from "@astryxdesign/core/Text";
import { Stack } from "@astryxdesign/core/Stack";
import { Examples, Preview } from "./shared";

export default function TabListDemo() {
  const [value, setValue] = useState("overview");

  return (
    <Examples>
      <Preview label="Peer views">
        <Stack gap={3}>
          <TabList value={value} onChange={setValue} hasDivider>
            <Tab value="overview" label="Overview" />
            <Tab value="properties" label="Properties" />
            <Tab value="usage" label="Usage" />
          </TabList>
          <Text color="secondary">{value}</Text>
        </Stack>
      </Preview>
    </Examples>
  );
}
