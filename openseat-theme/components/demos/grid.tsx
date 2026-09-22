"use client";

import { Card } from "@astryxdesign/core/Card";
import { Grid } from "@astryxdesign/core/Grid";
import { Text } from "@astryxdesign/core/Text";
import { Examples, Preview } from "./shared";

export default function GridDemo() {
  return (
    <Examples>
      <Preview label="Three columns">
        <Grid columns={3} gap={3}>
          <Card>
            <Text>A</Text>
          </Card>
          <Card>
            <Text>B</Text>
          </Card>
          <Card>
            <Text>C</Text>
          </Card>
        </Grid>
      </Preview>
      <Preview label="Fluid">
        <Grid columns={{ minWidth: 120 }} gap={3}>
          <Card>
            <Text>One</Text>
          </Card>
          <Card>
            <Text>Two</Text>
          </Card>
          <Card>
            <Text>Three</Text>
          </Card>
          <Card>
            <Text>Four</Text>
          </Card>
        </Grid>
      </Preview>
    </Examples>
  );
}
