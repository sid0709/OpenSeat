"use client";

import { useMemo, useState } from "react";
import { Button } from "@astryxdesign/core/Button";
import { CommandPalette } from "@astryxdesign/core/CommandPalette";
import { HStack } from "@astryxdesign/core/Stack";
import { createStaticSource } from "@astryxdesign/core/Typeahead";
import { SEARCH_ITEMS, Examples, Preview } from "./shared";

export default function CommandPaletteDemo() {
  const [open, setOpen] = useState(false);
  const source = useMemo(() => createStaticSource(SEARCH_ITEMS), []);

  return (
    <Examples>
      <Preview label="Search actions">
        <HStack>
          <Button label="Open palette" variant="secondary" onClick={() => setOpen(true)} />
        </HStack>
        <CommandPalette isOpen={open} onOpenChange={setOpen} searchSource={source} />
      </Preview>
    </Examples>
  );
}
