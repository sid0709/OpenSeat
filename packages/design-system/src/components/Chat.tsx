"use client";

import { ReactNode } from "react";
import { Avatar } from "./Content";
import { IconButton } from "./Action";
import { icons } from "./Glyph";
import { Icon } from "./Primitives";
import { Input } from "./Input";

export interface ChatMessageProps {
  /** Shown above the bubble; the avatar derives initials from it (a person glyph when absent). */
  author?: string;
  body: ReactNode;
  own?: boolean;
  time?: string;
}

export function ChatMessage({ author, body, own, time }: ChatMessageProps) {
  return (
    <div className={"os-chat-msg" + (own ? " os-chat-msg-own" : "")}>
      {!own && <Avatar name={author} size="sm" tooltip={false} />}
      <div>
        {!own && author && <p className="caption text-ink-muted" style={{ margin: "0 0 4px" }}>{author}</p>}
        <div className="body os-chat-bubble">{body}</div>
        {time && <p className="caption text-ink-faint" style={{ margin: "4px 0 0" }}>{time}</p>}
      </div>
    </div>
  );
}

export function ChatComposer({
  value,
  onChange,
  onSend,
  placeholder = "Message",
}: {
  value: string;
  onChange: (value: string) => void;
  onSend?: () => void;
  placeholder?: string;
}) {
  return (
    <div className="os-chat-composer">
      <div style={{ flex: 1 }}>
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onSend?.();
            }
          }}
        />
      </div>
      <IconButton label="Send" variant="primary" icon={<Icon icon={icons.send} />} onClick={onSend} />
    </div>
  );
}

export function Chat({ children }: { children: ReactNode }) {
  return <div className="os-chat">{children}</div>;
}

export function ChatSystemMessage({ children }: { children: ReactNode }) {
  return (
    <p className="caption text-ink-muted" style={{ textAlign: "center", margin: 0 }}>
      {children}
    </p>
  );
}
