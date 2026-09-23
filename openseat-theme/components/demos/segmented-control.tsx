"use client";

import { useState } from "react";
import { Icon } from "@astryxdesign/core/Icon";
import { SegmentedControl, SegmentedControlItem } from "@astryxdesign/core/SegmentedControl";
import { Stack } from "@astryxdesign/core/Stack";
import { Caption, Examples, Preview } from "./shared";

export default function SegmentedControlDemo() {
  const [view, setView] = useState("grid");
  const [icons, setIcons] = useState("grid");
  const [iconOnly, setIconOnly] = useState("grid");
  const [range, setRange] = useState("weekly");
  const [grain, setGrain] = useState("hourly");
  const [size, setSize] = useState("md");

  return (
    <Examples>
      <Preview label="Showcase">
        <SegmentedControl value={view} onChange={setView} label="View mode">
          <SegmentedControlItem value="grid" label="Grid" />
          <SegmentedControlItem value="list" label="List" />
          <SegmentedControlItem value="table" label="Table" />
        </SegmentedControl>
      </Preview>
      <Preview label="With icons">
        <Stack gap={2}>
          <Caption>A leading icon that matches each view.</Caption>
          <SegmentedControl value={icons} onChange={setIcons} label="View mode">
            <SegmentedControlItem value="grid" label="Grid" icon={<Icon icon="viewColumns" />} />
            <SegmentedControlItem value="list" label="List" icon={<Icon icon="menu" />} />
            <SegmentedControlItem value="table" label="Table" icon={<Icon icon="copy" />} />
          </SegmentedControl>
        </Stack>
      </Preview>
      <Preview label="Icon only">
        <Stack gap={2}>
          <Caption>Hide labels when the icons are unambiguous. Keep the label for accessibility.</Caption>
          <SegmentedControl value={iconOnly} onChange={setIconOnly} label="View mode" size="sm">
            <SegmentedControlItem value="grid" label="Grid" isLabelHidden icon={<Icon icon="viewColumns" />} />
            <SegmentedControlItem value="list" label="List" isLabelHidden icon={<Icon icon="menu" />} />
          </SegmentedControl>
        </Stack>
      </Preview>
      <Preview label="Fill layout">
        <Stack gap={2}>
          <Caption>layout=&quot;fill&quot; stretches segments across the available width.</Caption>
          <SegmentedControl value={range} onChange={setRange} label="Time range" layout="fill">
            <SegmentedControlItem value="daily" label="Daily" />
            <SegmentedControlItem value="weekly" label="Weekly" />
            <SegmentedControlItem value="monthly" label="Monthly" />
          </SegmentedControl>
        </Stack>
      </Preview>
      <Preview label="Disabled item">
        <Stack gap={2}>
          <Caption>Keep unavailable options visible so the closed set stays complete.</Caption>
          <SegmentedControl value={grain} onChange={setGrain} label="Data granularity">
            <SegmentedControlItem value="hourly" label="Hourly" />
            <SegmentedControlItem value="daily" label="Daily" />
            <SegmentedControlItem value="weekly" label="Weekly" isDisabled />
          </SegmentedControl>
        </Stack>
      </Preview>
      <Preview label="Sizes">
        <SegmentedControl label="Size" size="sm" value={size} onChange={setSize}>
          <SegmentedControlItem value="sm" label="SM" />
          <SegmentedControlItem value="md" label="MD" />
          <SegmentedControlItem value="lg" label="LG" />
        </SegmentedControl>
      </Preview>
    </Examples>
  );
}
