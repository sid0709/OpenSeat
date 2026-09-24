"use client";

import { Button, ButtonGroup, IconButton } from "@openseat/design-system";
import { Examples, Preview, Row } from "./shared";

export default function ButtonGroupDemo() {
  return (
    <Examples>
      <Preview label="Joined">
        <ButtonGroup>
          <Button variant="secondary">Day</Button>
          <Button variant="secondary">Week</Button>
          <Button variant="secondary">Month</Button>
        </ButtonGroup>
      </Preview>
      <Preview label="Pill group">
        <Row>
          <ButtonGroup shape="pill">
            <Button shape="pill" variant="secondary">Copy</Button>
            <Button shape="pill" variant="secondary">Cut</Button>
            <Button shape="pill" variant="primary">Paste</Button>
          </ButtonGroup>
          <ButtonGroup shape="pill">
            <Button shape="pill">Save</Button>
            <IconButton label="More save options" shape="pill" variant="primary">▾</IconButton>
          </ButtonGroup>
        </Row>
      </Preview>
      <Preview label="Sizes">
        <Row>
          {(["sm", "md", "lg"] as const).map((size) => (
            <ButtonGroup key={size} shape="pill">
              <Button size={size} shape="pill" variant="outline">{size}</Button>
              <Button size={size} shape="pill" variant="outline">Hold</Button>
            </ButtonGroup>
          ))}
        </Row>
      </Preview>
    </Examples>
  );
}
