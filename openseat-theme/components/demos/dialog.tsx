"use client";

import { useState } from "react";
import { Button } from "@astryxdesign/core/Button";
import { Dialog, DialogHeader } from "@astryxdesign/core/Dialog";
import { Layout, LayoutContent, LayoutFooter } from "@astryxdesign/core/Layout";
import { HStack } from "@astryxdesign/core/Stack";
import { Text } from "@astryxdesign/core/Text";
import { Examples, Preview } from "./shared";

export default function DialogDemo() {
  const [open, setOpen] = useState(false);

  return (
    <Examples>
      <Preview label="Confirm">
        <HStack>
          <Button label="Open dialog" variant="secondary" onClick={() => setOpen(true)} />
        </HStack>
        <Dialog isOpen={open} onOpenChange={setOpen}>
          <Layout
            height="auto"
            header={<DialogHeader title="Close this room?" onOpenChange={setOpen} />}
            content={
              <LayoutContent>
                <Text>People will no longer be able to submit.</Text>
              </LayoutContent>
            }
            footer={
              <LayoutFooter hasDivider>
                <HStack gap={2} hAlign="end">
                  <Button label="Cancel" variant="ghost" onClick={() => setOpen(false)} />
                  <Button label="Close room" variant="destructive" onClick={() => setOpen(false)} />
                </HStack>
              </LayoutFooter>
            }
          />
        </Dialog>
      </Preview>
    </Examples>
  );
}
