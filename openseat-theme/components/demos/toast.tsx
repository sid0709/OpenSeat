"use client";

import { useState } from "react";
import { Button, Toast, type ToastTone } from "@openseat/design-system";
import { Examples, Preview, Row } from "./shared";

type Item = { id: number; tone: ToastTone; title: string; message: string; action?: string };

let nextId = 1;

export default function ToastDemo() {
  const [items, setItems] = useState<Item[]>([
    { id: 0, tone: "success", title: "Seat awarded", message: "Jordan is confirmed." },
  ]);

  function push(item: Omit<Item, "id">) {
    setItems((current) => [...current, { ...item, id: nextId++ }]);
  }

  return (
    <Examples>
      <Preview label="Tones, title, and action">
        <Row>
          <Button variant="secondary" onClick={() => push({ tone: "neutral", title: "Invite sent", message: "Alex has the link." })}>
            Info
          </Button>
          <Button variant="secondary" onClick={() => push({ tone: "success", title: "Saved", message: "The brief is updated." })}>
            Success
          </Button>
          <Button variant="secondary" onClick={() => push({ tone: "warning", title: "Low bids", message: "Only one person has responded." })}>
            Warning
          </Button>
          <Button
            variant="secondary"
            onClick={() =>
              push({ tone: "danger", title: "Couldn’t send", message: "Check the address and try again.", action: "Retry" })
            }
          >
            Error
          </Button>
        </Row>
        <div className="os-toast-stack" style={{ marginTop: 16 }}>
          {items.map((item) => (
            <Toast
              key={item.id}
              tone={item.tone}
              title={item.title}
              message={item.message}
              action={item.action ? { label: item.action, onClick: () => undefined } : undefined}
              onClose={() => setItems((current) => current.filter((entry) => entry.id !== item.id))}
            />
          ))}
        </div>
      </Preview>
    </Examples>
  );
}
