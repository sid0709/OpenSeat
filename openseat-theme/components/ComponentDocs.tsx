"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { Stack } from "@astryxdesign/core/Stack";
import { Text } from "@astryxdesign/core/Text";
import { Tab, TabList } from "@astryxdesign/core/TabList";
import { CodeBlock } from "@astryxdesign/core/CodeBlock";
import { Spinner } from "@astryxdesign/core/Spinner";
import { DEMO_LOADERS } from "@/components/demos/load";

export function ComponentDocs({ slug, importName }: { slug: string; importName: string }) {
  const [tab, setTab] = useState("overview");
  const loader = DEMO_LOADERS[slug];

  const Demo = useMemo(() => {
    if (!loader) return null;
    return dynamic(loader, {
      ssr: false,
      loading: () => <Spinner label="Loading example" />,
    });
  }, [loader]);

  return (
    <Stack gap={5}>
      <TabList value={tab} onChange={setTab} hasDivider>
        <Tab value="overview" label="Overview" />
        <Tab value="usage" label="Usage" />
      </TabList>
      {tab === "overview" &&
        (Demo ? <Demo /> : <Text color="secondary">No demo yet.</Text>)}
      {tab === "usage" && (
        <CodeBlock
          language="tsx"
          title="Import"
          width="100%"
          code={`import { ${importName} } from "@astryxdesign/core/${importName}";`}
        />
      )}
    </Stack>
  );
}
