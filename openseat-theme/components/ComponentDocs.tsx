"use client";

import { useEffect, useState, type ComponentType } from "react";

import { CodeBlock, Spinner, Stack, Tab, TabList, Text } from "@openseat/design-system";

import { DEMO_LOADERS } from "@/components/demos/load";

type DemoLoader = (typeof DEMO_LOADERS)[string];

/** Load one demo module in the browser and show its loading or error state. */
function DemoView({ loader }: { loader: DemoLoader | undefined }) {
  const [Demo, setDemo] = useState<ComponentType | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!loader) return;
    let active = true;
    void loader()
      .then(({ default: Component }) => {
        if (active) setDemo(() => Component);
      })
      .catch(() => {
        if (active) setFailed(true);
      });
    return () => {
      active = false;
    };
  }, [loader]);

  if (!loader) return <Text color="secondary">No demo yet.</Text>;
  if (failed) return <Text color="secondary">This example could not be loaded.</Text>;
  if (!Demo) return <Spinner label="Loading example" />;

  return <Demo />;
}

/** Show a component demo and its import example. */
export function ComponentDocs({ slug, importName }: { slug: string; importName: string }) {
  const [tab, setTab] = useState("overview");
  const loader = DEMO_LOADERS[slug];

  return (
    <Stack gap={5}>
      <TabList value={tab} onChange={setTab} hasDivider>
        <Tab value="overview" label="Overview" />
        <Tab value="usage" label="Usage" />
      </TabList>
      {tab === "overview" && <DemoView loader={loader} />}
      {tab === "usage" && (
        <CodeBlock
          language="tsx"
          title="Import"
          width="100%"
          code={`import { ${importName} } from "@openseat/design-system";`}
        />
      )}
    </Stack>
  );
}
