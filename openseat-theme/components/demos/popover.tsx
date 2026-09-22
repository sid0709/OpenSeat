"use client";

import { Button } from "@astryxdesign/core/Button";
import { Popover } from "@astryxdesign/core/Popover";
import { Stack } from "@astryxdesign/core/Stack";
import { Text } from "@astryxdesign/core/Text";
import { Examples, Preview } from "./shared";

export default function PopoverDemo() {
  return (
    <Examples>
      <Preview label="Details">
        <Popover
          className=""
          style={{}}
          content={
            <Stack gap={2}>
              <Text weight="medium">Shipping method</Text>
              <Text color="secondary">Delivered in 5–7 business days</Text>
            </Stack>
          }
        >
          <Button label="Open" variant="secondary" />
        </Popover>
      </Preview>
    </Examples>
  );
}
