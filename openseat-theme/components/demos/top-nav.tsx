"use client";

import { TopNav, TopNavHeading, TopNavItem } from "@astryxdesign/core/TopNav";
import { Button } from "@astryxdesign/core/Button";
import { Examples, Preview } from "./shared";

export default function TopNavDemo() {
  return (
    <Examples>
      <Preview label="Product bar">
        <TopNav
          label="Product"
          heading={<TopNavHeading heading="OpenSeat" />}
          startContent={
            <>
              <TopNavItem label="Dashboard" href="#dashboard" isSelected />
              <TopNavItem label="Library" href="#library" />
            </>
          }
          endContent={<Button label="Share" variant="primary" size="sm" />}
        />
      </Preview>
    </Examples>
  );
}
