"use client";

import { useState } from "react";
import { BottomSheet } from "@astryxdesign/core/BottomSheet";
import { Button } from "@astryxdesign/core/Button";
import { Text } from "@astryxdesign/core/Text";
import { HStack } from "@astryxdesign/core/Stack";
import { Examples, Preview } from "./shared";

export default function BottomSheetDemo() {
  const [open, setOpen] = useState(false);

  return (
    <Examples>
      <Preview label="Invite">
        <HStack>
          <Button label="Open sheet" variant="secondary" onClick={() => setOpen(true)} />
        </HStack>
        <BottomSheet isOpen={open} onOpenChange={setOpen} label="Invite">
          <Text>Send this room to someone on your allowlist.</Text>
        </BottomSheet>
      </Preview>
    </Examples>
  );
}
