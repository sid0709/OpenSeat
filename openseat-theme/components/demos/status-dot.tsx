"use client";

import { StatusDot } from "@astryxdesign/core/StatusDot";
import { Examples, Preview, Row } from "./shared";

export default function StatusDotDemo() {
  return (
    <Examples>
      <Preview label="Variants">
        <Row>
          <StatusDot variant="neutral" label="Neutral" />
          <StatusDot variant="accent" label="Accent" />
          <StatusDot variant="success" label="Success" />
          <StatusDot variant="warning" label="Warning" />
          <StatusDot variant="error" label="Error" />
        </Row>
      </Preview>
    </Examples>
  );
}
