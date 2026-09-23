"use client";

import { TreeList } from "@astryxdesign/core/TreeList";
import { Examples, Preview } from "./shared";

export default function TreeListDemo() {
  return (
    <Examples>
      <Preview label="Hierarchy">
        <TreeList
          items={[
            {
              id: "rooms",
              label: "Rooms",
              children: [
                { id: "brand", label: "Brand refresh" },
                { id: "landing", label: "Landing page" },
              ],
            },
            {
              id: "people",
              label: "People",
              children: [
                { id: "jordan", label: "Jordan" },
                { id: "alex", label: "Alex" },
              ],
            },
          ]}
        />
      </Preview>
    </Examples>
  );
}
