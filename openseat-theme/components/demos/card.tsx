"use client";

import { Card } from "@astryxdesign/core/Card";
import { Heading } from "@astryxdesign/core/Heading";
import { Stack } from "@astryxdesign/core/Stack";
import { Text } from "@astryxdesign/core/Text";
import { Examples, Preview, Row } from "./shared";

export default function CardDemo() {
  return (
    <Examples>
      <Preview label="Variants">
        <Row>
          <Card width={220}>
            <Stack gap={1}>
              <Heading level={4}>Brand refresh brief</Heading>
              <Text color="secondary">Fixed · $2,400</Text>
            </Stack>
          </Card>
          <Card width={220} variant="muted">
            <Stack gap={1}>
              <Heading level={4}>Landing page copy</Heading>
              <Text color="secondary">Hourly · $65/hr</Text>
            </Stack>
          </Card>
        </Row>
      </Preview>
      <Preview label="Color">
        <Row>
          <Card width={140} variant="blue">
            <Text>Blue</Text>
          </Card>
          <Card width={140} variant="teal">
            <Text>Teal</Text>
          </Card>
          <Card width={140} variant="yellow">
            <Text>Yellow</Text>
          </Card>
        </Row>
      </Preview>
    </Examples>
  );
}
