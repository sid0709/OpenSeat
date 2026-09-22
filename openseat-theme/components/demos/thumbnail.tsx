"use client";

import { Thumbnail } from "@astryxdesign/core/Thumbnail";
import { Examples, Preview, Row } from "./shared";

export default function ThumbnailDemo() {
  return (
    <Examples>
      <Preview label="Placeholder">
        <Row>
          <Thumbnail label="Preview" />
          <Thumbnail label="Cover" />
        </Row>
      </Preview>
    </Examples>
  );
}
