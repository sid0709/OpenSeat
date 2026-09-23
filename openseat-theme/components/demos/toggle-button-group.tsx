"use client";

import { useState } from "react";
import { Icon } from "@astryxdesign/core/Icon";
import { ToggleButton, ToggleButtonGroup } from "@astryxdesign/core/ToggleButton";
import { Stack } from "@astryxdesign/core/Stack";
import { Caption, Examples, Preview } from "./shared";

export default function ToggleButtonGroupDemo() {
  const [view, setView] = useState<string | null>("grid");
  const [filters, setFilters] = useState<string[]>(["active"]);
  const [iconView, setIconView] = useState<string | null>("list");
  const [formats, setFormats] = useState<string[]>(["copy"]);
  const [vertView, setVertView] = useState<string | null>("grid");
  const [vertFilters, setVertFilters] = useState<string[]>(["active"]);

  return (
    <Examples>
      <Preview label="Showcase">
        <Stack gap={4}>
          <Stack gap={1}>
            <Caption>Single select</Caption>
            <ToggleButtonGroup value={view} onChange={setView} label="View mode">
              <ToggleButton value="list" label="List" />
              <ToggleButton value="grid" label="Grid" />
              <ToggleButton value="board" label="Board" />
            </ToggleButtonGroup>
          </Stack>
          <Stack gap={1}>
            <Caption>Multi select</Caption>
            <ToggleButtonGroup type="multiple" value={filters} onChange={setFilters} label="Status filters">
              <ToggleButton value="active" label="Active" />
              <ToggleButton value="pending" label="Pending" />
              <ToggleButton value="closed" label="Closed" />
            </ToggleButtonGroup>
          </Stack>
        </Stack>
      </Preview>
      <Preview label="With icons">
        <Stack gap={4}>
          <Stack gap={1}>
            <Caption>Single selection</Caption>
            <ToggleButtonGroup value={iconView} onChange={setIconView} label="View mode">
              <ToggleButton value="list" label="List view" icon={<Icon icon="menu" />} isIconOnly />
              <ToggleButton value="grid" label="Grid view" icon={<Icon icon="viewColumns" />} isIconOnly />
              <ToggleButton value="table" label="Table view" icon={<Icon icon="copy" />} isIconOnly />
            </ToggleButtonGroup>
          </Stack>
          <Stack gap={1}>
            <Caption>Multiple selections</Caption>
            <ToggleButtonGroup type="multiple" value={formats} onChange={setFormats} label="Actions">
              <ToggleButton value="copy" label="Copy" icon={<Icon icon="copy" />} isIconOnly />
              <ToggleButton value="search" label="Search" icon={<Icon icon="search" />} isIconOnly />
              <ToggleButton value="info" label="Info" icon={<Icon icon="info" />} isIconOnly />
              <ToggleButton value="funnel" label="Filter" icon={<Icon icon="funnel" />} isIconOnly />
            </ToggleButtonGroup>
          </Stack>
        </Stack>
      </Preview>
      <Preview label="Vertical">
        <Stack gap={4}>
          <Stack gap={1}>
            <Caption>Single select</Caption>
            <ToggleButtonGroup orientation="vertical" value={vertView} onChange={setVertView} label="View mode">
              <ToggleButton value="list" label="List" />
              <ToggleButton value="grid" label="Grid" />
              <ToggleButton value="board" label="Board" />
            </ToggleButtonGroup>
          </Stack>
          <Stack gap={1}>
            <Caption>Multi select</Caption>
            <ToggleButtonGroup
              orientation="vertical"
              type="multiple"
              value={vertFilters}
              onChange={setVertFilters}
              label="Status filters"
            >
              <ToggleButton value="active" label="Active" />
              <ToggleButton value="pending" label="Pending" />
              <ToggleButton value="closed" label="Closed" />
            </ToggleButtonGroup>
          </Stack>
        </Stack>
      </Preview>
    </Examples>
  );
}
