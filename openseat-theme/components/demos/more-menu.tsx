"use client";

import { MoreMenu } from "@astryxdesign/core/MoreMenu";
import { Heading, Text } from "@astryxdesign/core/Text";
import { HStack, Stack } from "@astryxdesign/core/Stack";
import { Caption, Examples, Preview } from "./shared";

const SHOWCASE_ITEMS = [
  { label: "Edit", onClick: () => {} },
  { label: "Duplicate", onClick: () => {} },
  { label: "Delete", onClick: () => {} },
];

export default function MoreMenuDemo() {
  return (
    <Examples>
      <Preview label="Showcase">
        <HStack>
          <MoreMenu className="" style={{}} items={SHOWCASE_ITEMS} />
        </HStack>
      </Preview>
      <Preview label="Default">
        <Stack gap={2}>
          <Caption>The overflow trigger — three dots, never a labeled button.</Caption>
          <HStack>
            <MoreMenu className="" style={{}} items={SHOWCASE_ITEMS} />
          </HStack>
        </Stack>
      </Preview>
      <Preview label="With dividers">
        <HStack>
          <MoreMenu
            className=""
            style={{}}
            variant="secondary"
            items={[
              { label: "Edit", icon: "wrench", onClick: () => {} },
              { label: "Duplicate", icon: "copy", onClick: () => {} },
              { type: "divider" },
              { label: "Delete", icon: "error", onClick: () => {} },
            ]}
          />
        </HStack>
      </Preview>
      <Preview label="Sections">
        <HStack>
          <MoreMenu
            className=""
            style={{}}
            variant="secondary"
            label="Document actions"
            items={[
              {
                type: "section",
                title: "Actions",
                items: [
                  { label: "Edit", icon: "wrench", onClick: () => {} },
                  { label: "Duplicate", icon: "copy", onClick: () => {} },
                ],
              },
              {
                type: "section",
                title: "Danger zone",
                items: [{ label: "Delete", icon: "error", onClick: () => {} }],
              },
            ]}
          />
        </HStack>
      </Preview>
      <Preview label="Bottom sheet">
        <Stack gap={3}>
          <Caption>On compact layouts, present the same actions as a bottom sheet.</Caption>
          <HStack hAlign="between" vAlign="center">
            <Stack gap={1}>
              <Heading level={4}>Quarterly plan</Heading>
              <Text type="supporting" color="secondary">
                Updated a few minutes ago
              </Text>
            </Stack>
            <MoreMenu
              className=""
              style={{}}
              presentation="bottom-sheet"
              label="Project actions"
              items={[
                {
                  label: "Rename project",
                  description: "Update the project title.",
                  icon: "wrench",
                  onClick: () => {},
                },
                {
                  label: "Duplicate project",
                  description: "Create a copy in this workspace.",
                  icon: "copy",
                  onClick: () => {},
                },
                {
                  label: "Share project",
                  description: "Invite people to collaborate.",
                  icon: "externalLink",
                  onClick: () => {},
                },
                {
                  label: "Delete project",
                  description: "Move this project to the trash.",
                  icon: "error",
                  variant: "destructive",
                  onClick: () => {},
                },
              ]}
            />
          </HStack>
        </Stack>
      </Preview>
      <Preview label="Disabled">
        <HStack>
          <MoreMenu className="" style={{}} items={SHOWCASE_ITEMS} isDisabled />
        </HStack>
      </Preview>
    </Examples>
  );
}
