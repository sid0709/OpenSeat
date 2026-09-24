"use client";

import { IconButton } from "@openseat/design-system";
import { Examples, Preview, Row } from "./shared";

function Mark({ children }: { children: string }) {
  return <span aria-hidden>{children}</span>;
}

export default function IconButtonDemo() {
  return (
    <Examples>
      <Preview label="Styles">
        <Row>
          <IconButton label="Add" variant="primary"><Mark>+</Mark></IconButton>
          <IconButton label="More" variant="secondary"><Mark>⋯</Mark></IconButton>
          <IconButton label="Filter" variant="outline"><Mark>▾</Mark></IconButton>
          <IconButton label="Close" variant="ghost"><Mark>×</Mark></IconButton>
          <IconButton label="Remove" variant="danger"><Mark>−</Mark></IconButton>
        </Row>
      </Preview>
      <Preview label="Pill — fully round">
        <Row>
          <IconButton label="Add" shape="pill" variant="primary"><Mark>+</Mark></IconButton>
          <IconButton label="More" shape="pill" variant="secondary"><Mark>⋯</Mark></IconButton>
          <IconButton label="Filter" shape="pill" variant="outline"><Mark>▾</Mark></IconButton>
          <IconButton label="Close" shape="pill" variant="ghost"><Mark>×</Mark></IconButton>
        </Row>
      </Preview>
      <Preview label="Sizes">
        <Row>
          <IconButton label="Search" size="sm" shape="pill" variant="primary"><Mark>⌕</Mark></IconButton>
          <IconButton label="Search" size="md" shape="pill" variant="primary"><Mark>⌕</Mark></IconButton>
          <IconButton label="Search" size="lg" shape="pill" variant="primary"><Mark>⌕</Mark></IconButton>
        </Row>
      </Preview>
    </Examples>
  );
}
