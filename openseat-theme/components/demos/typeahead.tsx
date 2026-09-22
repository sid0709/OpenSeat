"use client";

import { useMemo, useState } from "react";
import { Typeahead, createStaticSource } from "@astryxdesign/core/Typeahead";
import { SEARCH_ITEMS, Examples, Preview } from "./shared";

export default function TypeaheadDemo() {
  const source = useMemo(() => createStaticSource(SEARCH_ITEMS), []);
  const [value, setValue] = useState<(typeof SEARCH_ITEMS)[number] | null>(null);

  return (
    <Examples>
      <Preview label="Find a component">
        <Typeahead
          width={240}
          label="Find a component"
          searchSource={source}
          value={value}
          onChange={setValue}
          hasEntriesOnFocus
        />
      </Preview>
    </Examples>
  );
}
