"use client";

import { Button } from "@astryxdesign/core/Button";
import { EmptyState } from "@astryxdesign/core/EmptyState";
import { Examples, Preview } from "./shared";

export default function EmptyStateDemo() {
  return (
    <Examples>
      <Preview label="No results">
        <EmptyState
          title="No results"
          description="Try a different search."
          actions={<Button label="Clear search" variant="secondary" />}
        />
      </Preview>
      <Preview label="No action">
        <EmptyState title="Nothing here yet" description="Invited people will show up once they respond." />
      </Preview>
    </Examples>
  );
}
