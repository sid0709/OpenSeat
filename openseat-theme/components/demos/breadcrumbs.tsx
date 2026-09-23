"use client";

import { Breadcrumbs, BreadcrumbItem } from "@astryxdesign/core/Breadcrumbs";
import { Examples, Preview } from "./shared";

export default function BreadcrumbsDemo() {
  return (
    <Examples>
      <Preview label="Path">
        <Breadcrumbs>
          <BreadcrumbItem href="#rooms">Rooms</BreadcrumbItem>
          <BreadcrumbItem href="#brief">Brand refresh</BreadcrumbItem>
          <BreadcrumbItem isCurrent>Bids</BreadcrumbItem>
        </Breadcrumbs>
      </Preview>
    </Examples>
  );
}
