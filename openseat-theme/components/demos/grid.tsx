"use client";

import { GridColumn, GridSystem } from "@openseat/design-system";
import { Examples, Preview } from "./shared";

export default function GridDemo() {
  return (
    <Examples>
      <Preview label="Responsive — 12, then 6, then 4">
        <GridSystem gap={3}>
          <GridColumn span={12} md={6} lg={4}>
            Rooms
          </GridColumn>
          <GridColumn span={12} md={6} lg={4}>
            Holds
          </GridColumn>
          <GridColumn span={12} md={12} lg={4}>
            Release
          </GridColumn>
        </GridSystem>
      </Preview>
      <Preview label="Narrow container stays stacked">
        <div style={{ maxWidth: "18rem" }}>
          <GridSystem gap={2}>
            <GridColumn span={12} md={6}>
              A
            </GridColumn>
            <GridColumn span={12} md={6}>
              B
            </GridColumn>
          </GridSystem>
        </div>
      </Preview>
      <Preview label="Sidebar and content">
        <GridSystem gap={4}>
          <GridColumn span={12} md={4}>
            Nav · 4
          </GridColumn>
          <GridColumn span={12} md={8}>
            Content · 8
          </GridColumn>
        </GridSystem>
      </Preview>
      <Preview label="Offset">
        <GridSystem gap={3}>
          <GridColumn span={5} start={4}>
            Centered 5, starting at track 4
          </GridColumn>
          <GridColumn span={4} start={9}>
            4 from track 9
          </GridColumn>
        </GridSystem>
      </Preview>
    </Examples>
  );
}
