"use client";

import { Button } from "@astryxdesign/core/Button";
import { Text } from "@astryxdesign/core/Text";
import { VisuallyHidden } from "@astryxdesign/core/VisuallyHidden";
import { Examples, Preview, Row } from "./shared";

export default function VisuallyHiddenDemo() {
  return (
    <Examples>
      <Preview label="Announced, not shown">
        <Row>
          <Button label="Save">
            Save
            <VisuallyHidden> draft to this room</VisuallyHidden>
          </Button>
          <Text color="secondary">Extra text is announced, not shown.</Text>
        </Row>
      </Preview>
    </Examples>
  );
}
