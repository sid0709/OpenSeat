"use client";

import { useMemo, useState } from "react";
import { Badge, Glyph, TextInput, Tree, type TreeNode } from "@openseat/design-system";
import { HStack, Stack } from "@astryxdesign/core/Stack";
import { Text } from "@astryxdesign/core/Text";
import { Caption, Examples, Preview } from "./shared";

const ROOMS: TreeNode[] = [
  {
    id: "rooms",
    label: "Rooms",
    leading: <span className="os-tree-leading">R</span>,
    meta: "3",
    children: [
      { id: "brand", label: "Brand refresh", description: "Fixed · $2,400", meta: <Badge label="Open" tone="success" size="sm" /> },
      { id: "landing", label: "Landing page", description: "Hourly · $65/hr", meta: <Badge label="Review" tone="warning" size="sm" /> },
      { id: "archive", label: "Old pitch", description: "Closed", disabled: true },
    ],
  },
  {
    id: "people",
    label: "People",
    leading: <span className="os-tree-leading">P</span>,
    meta: "2",
    children: [
      { id: "jordan", label: "Jordan Mills", description: "Designer" },
      { id: "alex", label: "Alex Kim", description: "Editor" },
    ],
  },
];

const FILES: TreeNode[] = [
  {
    id: "app",
    label: "app",
    children: [
      {
        id: "components",
        label: "components",
        children: [
          { id: "calendar", label: "Calendar.tsx", meta: "12 KB" },
          { id: "timeline", label: "Timeline.tsx", meta: "4 KB" },
          { id: "tree", label: "Tree.tsx", meta: "8 KB" },
        ],
      },
      { id: "layout", label: "layout.tsx", meta: "1 KB" },
      { id: "page", label: "page.tsx", meta: "2 KB" },
    ],
  },
  { id: "styles", label: "styles", children: [{ id: "tokens", label: "tokens.css", meta: "9 KB" }] },
  { id: "readme", label: "README.md", meta: "3 KB" },
];

const PERMISSIONS: TreeNode[] = [
  {
    id: "rooms-perm",
    label: "Rooms",
    children: [
      { id: "rooms-view", label: "View rooms" },
      { id: "rooms-create", label: "Create rooms" },
      { id: "rooms-delete", label: "Delete rooms", description: "Owners only" },
    ],
  },
  {
    id: "bids-perm",
    label: "Bids",
    children: [
      { id: "bids-view", label: "View bids" },
      { id: "bids-award", label: "Award a seat" },
    ],
  },
];

const OPEN = ["rooms", "people"];

function filterNodes(nodes: TreeNode[], query: string): TreeNode[] {
  const q = query.trim().toLowerCase();
  if (!q) return nodes;
  return nodes.flatMap((node) => {
    const children = node.children ? filterNodes(node.children, q) : undefined;
    const hit = node.label.toLowerCase().includes(q);
    if (hit) return [node];
    if (children && children.length > 0) return [{ ...node, children }];
    return [];
  });
}

function branchIds(nodes: TreeNode[]): string[] {
  return nodes.flatMap((node) => (node.children?.length ? [node.id, ...branchIds(node.children)] : []));
}

export default function TreeListDemo() {
  const [selected, setSelected] = useState("brand");
  const [query, setQuery] = useState("");
  const [checked, setChecked] = useState<string[]>(["rooms-view", "bids-view"]);
  const filtered = useMemo(() => filterNodes(FILES, query), [query]);

  return (
    <Examples>
      <Preview label="Explorer — hover to reveal guides, click folders to open">
        <Tree nodes={FILES} variant="explorer" defaultExpanded={["app", "components"]} label="Files" />
      </Preview>
      <Preview label="Selection — arrow keys move, Right opens, Left closes">
        <Stack gap={3}>
          <Tree nodes={ROOMS} variant="selection" defaultExpanded={OPEN} selectedId={selected} onSelect={setSelected} label="Rooms and people" />
          <Caption>Selected: {selected}</Caption>
        </Stack>
      </Preview>
      <Preview label="Checkbox — parents roll up to mixed">
        <Stack gap={3}>
          <Tree
            nodes={PERMISSIONS}
            variant="checkbox"
            defaultExpanded={["rooms-perm", "bids-perm"]}
            checked={checked}
            onCheckedChange={setChecked}
            label="Permissions"
          />
          <Caption>{checked.length} of 5 permissions granted</Caption>
        </Stack>
      </Preview>
      <Preview label="Filter — matches stay open and highlighted">
        <Stack gap={3} width={320}>
          <TextInput
            label="Find a file"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="tsx"
            start={<Glyph name="search" />}
            hasClear
          />
          {filtered.length > 0 ? (
            <Tree
              key={query}
              nodes={filtered}
              variant="explorer"
              density="compact"
              defaultExpanded={query ? branchIds(filtered) : ["app"]}
              highlight={query}
            />
          ) : (
            <Text color="secondary">No files match “{query}”.</Text>
          )}
        </Stack>
      </Preview>
      <Preview label="Guides and cards — same data, different surface">
        <HStack gap={6} wrap="wrap" vAlign="start">
          <Tree nodes={ROOMS} variant="guides" defaultExpanded={OPEN} />
          <Tree nodes={ROOMS} variant="cards" density="spacious" defaultExpanded={OPEN} />
        </HStack>
      </Preview>
    </Examples>
  );
}
