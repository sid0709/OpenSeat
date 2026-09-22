"use client";

import { Markdown } from "@astryxdesign/core/Markdown";
import { Examples, Preview } from "./shared";

export default function MarkdownDemo() {
  return (
    <Examples>
      <Preview label="Inline marks">
        <Markdown>{"Invite **two** people. Use `sealed` rooms. _Do not_ share the link."}</Markdown>
      </Preview>
    </Examples>
  );
}
