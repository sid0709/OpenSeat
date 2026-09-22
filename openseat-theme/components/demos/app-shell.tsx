"use client";

import { AppShell } from "@astryxdesign/core/AppShell";
import { Card } from "@astryxdesign/core/Card";
import { SideNav, SideNavItem } from "@astryxdesign/core/SideNav";
import { Text } from "@astryxdesign/core/Text";
import { TopNav, TopNavHeading, TopNavItem } from "@astryxdesign/core/TopNav";
import { Examples, Preview } from "./shared";

export default function AppShellDemo() {
  return (
    <Examples>
      <Preview label="Elevated">
        <Card height={240} padding={0}>
          <AppShell
            variant="elevated"
            contentPadding={4}
            topNav={
              <TopNav
                label="Preview navigation"
                heading={<TopNavHeading heading="OpenSeat" />}
                startContent={<TopNavItem label="Home" href="#home" isSelected />}
              />
            }
            sideNav={
              <SideNav>
                <SideNavItem label="Overview" href="#overview" isSelected />
                <SideNavItem label="Button" href="#button" />
                <SideNavItem label="Dialog" href="#dialog" />
              </SideNav>
            }
          >
            <Text>Content</Text>
          </AppShell>
        </Card>
      </Preview>
    </Examples>
  );
}
