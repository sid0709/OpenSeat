"use client";

import { Icon } from "@astryxdesign/core/Icon";
import { IconButton } from "@astryxdesign/core/IconButton";
import { Tooltip } from "@astryxdesign/core/Tooltip";
import { Examples, Preview, Row } from "./shared";

export default function TooltipDemo() {
  return (
    <Examples>
      <Preview label="Icon buttons">
        <Row>
          <Tooltip content="Search the library">
            <IconButton label="Search" icon={<Icon icon="search" />} />
          </Tooltip>
          <Tooltip content="Settings">
            <IconButton label="Settings" icon={<Icon icon="wrench" />} variant="ghost" />
          </Tooltip>
        </Row>
      </Preview>
    </Examples>
  );
}
