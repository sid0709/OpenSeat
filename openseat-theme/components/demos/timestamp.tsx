"use client";

import { Timestamp } from "@astryxdesign/core/Timestamp";
import { ClientOnly } from "@/components/ClientOnly";
import { Examples, Preview, Row } from "./shared";

const VALUE = 1758564000;

export default function TimestampDemo() {
  return (
    <Examples>
      <Preview label="Formats">
        <ClientOnly>
          <Row>
            <Timestamp value={VALUE} format="relative" />
            <Timestamp value={VALUE} format="date" />
            <Timestamp value={VALUE} format="date_time" />
            <Timestamp value={VALUE} format="time" />
          </Row>
        </ClientOnly>
      </Preview>
    </Examples>
  );
}
