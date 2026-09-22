"use client";

import { AspectRatio } from "@astryxdesign/core/AspectRatio";
import { Card } from "@astryxdesign/core/Card";
import { Text } from "@astryxdesign/core/Text";
import { Stack } from "@astryxdesign/core/Stack";
import { Examples, Preview, Row } from "./shared";

export default function AspectRatioDemo() {
  return (
    <Examples>
      <Preview label="Ratios">
        <Row>
          <Stack width={96}>
            <AspectRatio ratio={1}>
              <Card variant="muted">
                <Text>1:1</Text>
              </Card>
            </AspectRatio>
          </Stack>
          <Stack width={160}>
            <AspectRatio ratio={16 / 9}>
              <Card variant="muted">
                <Text>16:9</Text>
              </Card>
            </AspectRatio>
          </Stack>
        </Row>
      </Preview>
    </Examples>
  );
}
