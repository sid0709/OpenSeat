"use client";

import { Spinner } from "@astryxdesign/core/Spinner";
import { Examples, Preview, Row } from "./shared";

export default function SpinnerDemo() {
  return (
    <Examples>
      <Preview label="Sizes">
        <Row>
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </Row>
      </Preview>
      <Preview label="With label">
        <Spinner label="Loading" />
      </Preview>
    </Examples>
  );
}
