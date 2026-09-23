"use client";

import { Badge } from "@astryxdesign/core/Badge";
import { Icon } from "@astryxdesign/core/Icon";
import { Examples, Preview, Row } from "./shared";

export default function BadgeDemo() {
  return (
    <Examples>
      <Preview label="Status">
        <Row>
          <Badge label="Neutral" />
          <Badge label="Info" variant="info" />
          <Badge label="Success" variant="success" />
          <Badge label="Warning" variant="warning" />
          <Badge label="Error" variant="error" />
        </Row>
      </Preview>
      <Preview label="Category">
        <Row>
          <Badge label="Design" variant="blue" />
          <Badge label="Copy" variant="purple" />
          <Badge label="Motion" variant="teal" />
          <Badge label="Research" variant="orange" />
        </Row>
      </Preview>
      <Preview label="With icon">
        <Row>
          <Badge label="Ready" variant="success" icon={<Icon icon="check" size="sm" />} />
          <Badge label="Blocked" variant="error" icon={<Icon icon="error" size="sm" />} />
        </Row>
      </Preview>
    </Examples>
  );
}
