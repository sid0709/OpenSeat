"use client";

import { Card } from "@astryxdesign/core/Card";
import { Carousel } from "@astryxdesign/core/Carousel";
import { Text } from "@astryxdesign/core/Text";
import { Stack } from "@astryxdesign/core/Stack";
import { Examples, Preview } from "./shared";

export default function CarouselDemo() {
  return (
    <Examples>
      <Preview label="Slides">
        <Stack width={280}>
          <Carousel aria-label="Slides">
            <Card>
              <Text>1:1</Text>
            </Card>
            <Card>
              <Text>4:3</Text>
            </Card>
            <Card>
              <Text>16:9</Text>
            </Card>
          </Carousel>
        </Stack>
      </Preview>
    </Examples>
  );
}
