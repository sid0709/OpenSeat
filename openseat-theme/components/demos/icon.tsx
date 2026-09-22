"use client";

import { Icon } from "@astryxdesign/core/Icon";
import { Examples, Preview, Row } from "./shared";

export default function IconDemo() {
  return (
    <Examples>
      <Preview label="Registry">
        <Row>
          <Icon icon="search" />
          <Icon icon="calendar" />
          <Icon icon="check" />
          <Icon icon="info" />
          <Icon icon="warning" />
          <Icon icon="error" />
        </Row>
      </Preview>
      <Preview label="Color">
        <Row>
          <Icon icon="check" color="success" />
          <Icon icon="warning" color="warning" />
          <Icon icon="error" color="error" />
          <Icon icon="search" color="secondary" />
        </Row>
      </Preview>
      <Preview label="Sizes">
        <Row>
          <Icon icon="search" size="sm" />
          <Icon icon="search" size="md" />
          <Icon icon="search" size="lg" />
        </Row>
      </Preview>
    </Examples>
  );
}
