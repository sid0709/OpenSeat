"use client";

import { Card } from "@astryxdesign/core/Card";
import { Icon } from "@astryxdesign/core/Icon";
import { SideNav, SideNavHeading, SideNavItem } from "@astryxdesign/core/SideNav";
import { Examples, Preview } from "./shared";

export default function SideNavDemo() {
  return (
    <Examples>
      <Preview label="Sections">
        <Card width={240} height={280} padding={0}>
          <SideNav header={<SideNavHeading heading="OpenSeat" />}>
            <SideNavItem label="Overview" href="#overview" isSelected icon={<Icon icon="viewColumns" />} />
            <SideNavItem label="Action" icon={<Icon icon="check" />} collapsible>
              <SideNavItem label="Button" href="#button" />
              <SideNavItem label="Link" href="#link" />
            </SideNavItem>
            <SideNavItem label="Layout" icon={<Icon icon="menu" />} collapsible>
              <SideNavItem label="Stack" href="#stack" />
              <SideNavItem label="Grid" href="#grid" />
            </SideNavItem>
          </SideNav>
        </Card>
      </Preview>
    </Examples>
  );
}
