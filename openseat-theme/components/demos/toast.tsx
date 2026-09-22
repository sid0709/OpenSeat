"use client";

import { Button } from "@astryxdesign/core/Button";
import { useToast } from "@astryxdesign/core/Toast";
import { Examples, Preview, Row } from "./shared";

export default function ToastDemo() {
  const toast = useToast();

  return (
    <Examples>
      <Preview label="Types">
        <Row>
          <Button
            label="Info"
            variant="secondary"
            onClick={() => toast({ body: "Invite sent", type: "info" })}
          />
          <Button
            label="Error"
            variant="secondary"
            onClick={() => toast({ body: "Couldn’t send invite", type: "error" })}
          />
        </Row>
      </Preview>
    </Examples>
  );
}
