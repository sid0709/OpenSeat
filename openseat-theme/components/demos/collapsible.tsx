"use client";

import { Collapsible } from "@astryxdesign/core/Collapsible";
import { Stack } from "@astryxdesign/core/Stack";
import { Examples, Preview } from "./shared";

export default function CollapsibleDemo() {
  return (
    <Examples>
      <Preview label="Open">
        <Stack width={320}>
          <Collapsible trigger="What is a sealed room?" defaultIsOpen>
            Invited people can see this room and will show up here once they respond.
          </Collapsible>
        </Stack>
      </Preview>
      <Preview label="Closed">
        <Stack width={320}>
          <Collapsible trigger="How are bids scored?">
            Fit, rate, and timeline — you pick the weights.
          </Collapsible>
        </Stack>
      </Preview>
    </Examples>
  );
}
