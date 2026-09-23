"use client";

import { useState } from "react";
import { Button } from "@astryxdesign/core/Button";
import { Token } from "@astryxdesign/core/Token";
import { Examples, Preview, Row } from "./shared";

export default function TokenDemo() {
  const [show, setShow] = useState(true);

  return (
    <Examples>
      <Preview label="Removable">
        {show ? (
          <Token label="Sealed" onRemove={() => setShow(false)} />
        ) : (
          <Button label="Reset" size="sm" variant="secondary" onClick={() => setShow(true)} />
        )}
      </Preview>
      <Preview label="Static">
        <Row>
          <Token label="Design" />
          <Token label="Copy" />
          <Token label="Motion" />
        </Row>
      </Preview>
    </Examples>
  );
}
