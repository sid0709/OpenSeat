"use client";

import { Avatar } from "@astryxdesign/core/Avatar";
import { List, ListItem } from "@astryxdesign/core/List";
import { Stack } from "@astryxdesign/core/Stack";
import { Examples, Preview } from "./shared";

export default function ListDemo() {
  return (
    <Examples>
      <Preview label="Rooms">
        <Stack width={320}>
          <List>
            <ListItem
              label="Brand refresh"
              description="Fixed · $2,400"
              startContent={<Avatar name="Brand refresh" size="sm" />}
              href="#brand"
            />
            <ListItem
              label="Landing page"
              description="Hourly · $65/hr"
              startContent={<Avatar name="Landing page" size="sm" />}
              href="#landing"
            />
            <ListItem
              label="Motion system"
              description="Fixed · $1,800"
              startContent={<Avatar name="Motion system" size="sm" />}
              href="#motion"
            />
          </List>
        </Stack>
      </Preview>
    </Examples>
  );
}
