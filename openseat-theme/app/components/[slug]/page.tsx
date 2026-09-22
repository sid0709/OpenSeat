"use client";

import { useState } from "react";
import { notFound, useParams } from "next/navigation";
import { Heading } from "@astryxdesign/core/Heading";
import { Text } from "@astryxdesign/core/Text";
import { Stack } from "@astryxdesign/core/Stack";
import { Tab, TabList } from "@astryxdesign/core/TabList";
import { CodeBlock } from "@astryxdesign/core/CodeBlock";
import { findItem } from "@/lib/catalog";
import { ClientOnly } from "@/components/ClientOnly";
import { DEMOS, Preview } from "@/components/Demos";

export default function ComponentPage() {
  const params = useParams<{ slug: string }>();
  const item = findItem(params.slug);
  const [tab, setTab] = useState("overview");

  if (!item || item.slug === "tokens") notFound();

  const Demo = DEMOS[item.slug];

  return (
    <Stack gap={5}>
      <Stack gap={2}>
        <Heading level={1}>{item.title}</Heading>
        <Text color="secondary" display="block">
          {item.description}
        </Text>
      </Stack>
      <TabList value={tab} onChange={setTab} hasDivider>
        <Tab value="overview" label="Overview" />
        <Tab value="usage" label="Usage" />
      </TabList>
      {tab === "overview" && (
        <ClientOnly>
          <Preview label={item.title}>{Demo ? Demo() : <Text color="secondary">No demo yet.</Text>}</Preview>
        </ClientOnly>
      )}
      {tab === "usage" && (
        <CodeBlock
          language="tsx"
          title="Import"
          width="100%"
          code={`import { ${item.importName} } from "@astryxdesign/core/${item.importName}";`}
        />
      )}
    </Stack>
  );
}
