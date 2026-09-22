"use client";

import { MetadataList, MetadataListItem } from "@astryxdesign/core/MetadataList";
import { Examples, Preview } from "./shared";

export default function MetadataListDemo() {
  return (
    <Examples>
      <Preview label="Room">
        <MetadataList>
          <MetadataListItem label="Status">Sealed</MetadataListItem>
          <MetadataListItem label="Budget">$2,400</MetadataListItem>
          <MetadataListItem label="Posted">2 days ago</MetadataListItem>
          <MetadataListItem label="People">3 invited</MetadataListItem>
        </MetadataList>
      </Preview>
    </Examples>
  );
}
