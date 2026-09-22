"use client";

import { notFound, useParams } from "next/navigation";
import {
  CodeBlock,
  Heading,
  PageBody,
  Preview,
  Section,
  Stack,
  TabList,
  Text,
} from "@openseat/design-system";
import { findItem } from "@/lib/catalog";
import { DEMOS } from "@/components/Demos";
import { useState } from "react";

export default function ComponentPage() {
  const params = useParams<{ slug: string }>();
  const item = findItem(params.slug);
  const [tab, setTab] = useState("overview");

  if (!item || item.slug === "tokens") notFound();

  const Demo = DEMOS[item.slug];

  return (
    <PageBody>
      <Stack gap={8}>
        <div>
          <Heading level={1}>{item.title}</Heading>
          <Text muted>{item.description}</Text>
        </div>
        <TabList
          value={tab}
          onChange={setTab}
          tabs={[
            { label: "Overview", value: "overview" },
            { label: "Usage", value: "usage" },
          ]}
        />
        {tab === "overview" && (
          <Preview label={item.title}>{Demo ? Demo() : <Text muted>No demo yet.</Text>}</Preview>
        )}
        {tab === "usage" && (
          <Section title="Usage" description="Import from the shared design system. Do not restyle in the app.">
            <CodeBlock
              language="ts"
              filename="tsx"
              code={`import { ${item.title.replace(/\s/g, "")} } from "@openseat/design-system";`}
            />
          </Section>
        )}
      </Stack>
    </PageBody>
  );
}
