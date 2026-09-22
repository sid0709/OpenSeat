"use client";

import { useMemo, useState } from "react";
import { Tokenizer } from "@astryxdesign/core/Tokenizer";
import { createStaticSource } from "@astryxdesign/core/Typeahead";
import { SEARCH_ITEMS, Examples, Preview } from "./shared";

export default function TokenizerDemo() {
  const source = useMemo(() => createStaticSource(SEARCH_ITEMS), []);
  const [value, setValue] = useState(SEARCH_ITEMS.slice(0, 2));

  return (
    <Examples>
      <Preview label="Tags">
        <Tokenizer
          width={280}
          label="Tags"
          searchSource={source}
          value={value}
          onChange={setValue}
          hasEntriesOnFocus
        />
      </Preview>
    </Examples>
  );
}
