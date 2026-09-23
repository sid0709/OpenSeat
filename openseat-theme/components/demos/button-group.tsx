"use client";

import { Button } from "@astryxdesign/core/Button";
import { ButtonGroup } from "@astryxdesign/core/ButtonGroup";
import { Icon } from "@astryxdesign/core/Icon";
import { IconButton } from "@astryxdesign/core/IconButton";
import { Stack } from "@astryxdesign/core/Stack";
import { Caption, Examples, Preview, Row } from "./shared";

export default function ButtonGroupDemo() {
  return (
    <Examples>
      <Preview label="Showcase">
        <Row>
          <ButtonGroup label="Clipboard actions">
            <Button label="Copy" icon={<Icon icon="copy" />} />
            <Button label="Cut" icon={<Icon icon="close" />} />
            <Button label="Paste" icon={<Icon icon="check" />} />
          </ButtonGroup>
          <ButtonGroup label="Save options">
            <Button label="Save" variant="primary" />
            <IconButton label="Save options" variant="primary" icon={<Icon icon="chevronDown" />} />
          </ButtonGroup>
        </Row>
      </Preview>
      <Preview label="Basic">
        <ButtonGroup label="Text editing actions">
          <Button label="Copy" />
          <Button label="Cut" />
          <Button label="Paste" />
        </ButtonGroup>
      </Preview>
      <Preview label="Mixed emphasis">
        <ButtonGroup label="Confirm">
          <Button label="Cancel" variant="ghost" />
          <Button label="Save" variant="primary" />
        </ButtonGroup>
      </Preview>
      <Preview label="Floating">
        <Stack gap={3}>
          <Caption>The whole group shares one raised surface — a floating action bar.</Caption>
          <ButtonGroup label="Zoom controls" elevation="med">
            <Button label="Zoom out" />
            <Button label="Reset" />
            <Button label="Zoom in" />
          </ButtonGroup>
        </Stack>
      </Preview>
    </Examples>
  );
}
