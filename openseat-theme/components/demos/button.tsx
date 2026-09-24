"use client";

import { Button } from "@openseat/design-system";
import { Examples, Preview, Row } from "./shared";

const SIZES = ["sm", "md", "lg"] as const;

export default function ButtonDemo() {
  return (
    <Examples>
      <Preview label="Styles">
        <Row>
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </Row>
      </Preview>
      <Preview label="Pill">
        <Row>
          <Button shape="pill">Save seat</Button>
          <Button shape="pill" variant="secondary">Hold</Button>
          <Button shape="pill" variant="outline">Outline</Button>
          <Button shape="pill" variant="danger">Release</Button>
        </Row>
      </Preview>
      <Preview label="Sizes">
        <Row>
          {SIZES.map((size) => (
            <Button key={size} size={size}>
              {size}
            </Button>
          ))}
          {SIZES.map((size) => (
            <Button key={`pill-${size}`} size={size} shape="pill" variant="secondary">
              {size}
            </Button>
          ))}
        </Row>
      </Preview>
      <Preview label="Disabled">
        <Row>
          <Button disabled>Primary</Button>
          <Button shape="pill" variant="outline" disabled>
            Pill
          </Button>
        </Row>
      </Preview>
    </Examples>
  );
}
