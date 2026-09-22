"use client";

import { Blockquote } from "@astryxdesign/core/Blockquote";
import { Examples, Preview } from "./shared";

export default function BlockquoteDemo() {
  return (
    <Examples>
      <Preview label="Cited">
        <Blockquote cite="Astryx">Accessible, themeable React components.</Blockquote>
      </Preview>
      <Preview label="Uncited">
        <Blockquote>Start anywhere. Change anything. Ship faster.</Blockquote>
      </Preview>
    </Examples>
  );
}
