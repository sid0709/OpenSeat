"use client";

import { useState } from "react";
import { DropdownMenu, DropdownMenuItem, DropdownMenuSubMenu } from "@astryxdesign/core/DropdownMenu";
import { Icon } from "@astryxdesign/core/Icon";
import { Stack } from "@astryxdesign/core/Stack";
import { Caption, Examples, Preview, Row } from "./shared";

export default function DropdownMenuDemo() {
  const [action, setAction] = useState<string | null>(null);
  const [file, setFile] = useState<string | null>(null);
  const [sub, setSub] = useState<string | null>(null);
  const [team, setTeam] = useState<string | null>(null);
  const [overflow, setOverflow] = useState<string | null>(null);

  return (
    <Examples>
      <Preview label="Showcase">
        <DropdownMenu
          button={{ label: "Actions" }}
          items={[
            { label: "Edit", onClick: () => {} },
            { label: "Duplicate", onClick: () => {} },
            { label: "Delete", onClick: () => {} },
          ]}
        />
      </Preview>
      <Preview label="Actions">
        <Stack gap={3}>
          <Caption>A trigger-anchored list of commands, with a divider before destructive work.</Caption>
          <DropdownMenu
            button={{ label: "Actions" }}
            items={[
              { label: "Edit", onClick: () => setAction("Edit") },
              { label: "Duplicate", onClick: () => setAction("Duplicate") },
              { label: "Move to folder", onClick: () => setAction("Move") },
              { type: "divider" },
              { label: "Archive", onClick: () => setAction("Archive") },
              { label: "Delete", onClick: () => setAction("Delete") },
            ]}
          />
          {action ? <Caption>Last action: {action}</Caption> : null}
        </Stack>
      </Preview>
      <Preview label="Sections">
        <Stack gap={3}>
          <Caption>Group related commands under titled sections.</Caption>
          <DropdownMenu
            button={{ label: "File", variant: "ghost" }}
            items={[
              {
                type: "section",
                title: "Create",
                items: [
                  { label: "New document", onClick: () => setFile("New document") },
                  { label: "New spreadsheet", onClick: () => setFile("New spreadsheet") },
                  { label: "New folder", onClick: () => setFile("New folder") },
                ],
              },
              {
                type: "section",
                title: "Manage",
                items: [
                  { label: "Share", onClick: () => setFile("Share") },
                  { label: "Move", onClick: () => setFile("Move") },
                  { label: "Archive", onClick: () => setFile("Archive") },
                ],
              },
            ]}
          />
          {file ? <Caption>Selected: {file}</Caption> : null}
        </Stack>
      </Preview>
      <Preview label="Submenu">
        <Stack gap={3}>
          <Caption>Nest a second level for related destinations.</Caption>
          <DropdownMenu button={{ label: "Actions" }}>
            <DropdownMenuItem className="" style={{}} icon="wrench" label="Rename" onClick={() => setSub("Rename")} />
            <DropdownMenuSubMenu className="" style={{}} icon="menu" label="Move to">
              <DropdownMenuItem className="" style={{}} label="Projects" onClick={() => setSub("Move to Projects")} />
              <DropdownMenuItem className="" style={{}} label="Archive" onClick={() => setSub("Move to Archive")} />
              <DropdownMenuItem className="" style={{}} label="Trash" onClick={() => setSub("Move to Trash")} />
            </DropdownMenuSubMenu>
            <DropdownMenuItem className="" style={{}} icon="error" label="Delete" onClick={() => setSub("Delete")} />
          </DropdownMenu>
          {sub ? <Caption>Last action: {sub}</Caption> : null}
        </Stack>
      </Preview>
      <Preview label="Disabled items">
        <Stack gap={3}>
          <Caption>Destructive actions stay visible but disabled for non-admin users.</Caption>
          <DropdownMenu
            button={{ label: "Manage team" }}
            items={[
              { label: "Invite member", onClick: () => setTeam("Invite") },
              { label: "Edit roles", onClick: () => setTeam("Edit roles") },
              { type: "divider" },
              { label: "Transfer ownership", isDisabled: true },
              { label: "Delete team", isDisabled: true },
            ]}
          />
          {team ? <Caption>Last action: {team}</Caption> : null}
        </Stack>
      </Preview>
      <Preview label="No chevron">
        <Stack gap={3}>
          <Caption>An icon-only trigger with hasChevron=false.</Caption>
          <Row>
            <DropdownMenu
              button={{
                label: "More actions",
                icon: <Icon icon="moreHorizontal" />,
                variant: "ghost",
                isIconOnly: true,
              }}
              hasChevron={false}
              items={[
                { label: "Copy link", onClick: () => setOverflow("Copy link") },
                { label: "Download", onClick: () => setOverflow("Download") },
                { label: "Print", onClick: () => setOverflow("Print") },
                { type: "divider" },
                { label: "Report", onClick: () => setOverflow("Report") },
              ]}
            />
          </Row>
          {overflow ? <Caption>Last action: {overflow}</Caption> : null}
        </Stack>
      </Preview>
      <Preview label="Ghost trigger">
        <DropdownMenu
          button={{ label: "More", variant: "ghost" }}
          items={[
            { label: "Edit", icon: "wrench" },
            { label: "Duplicate", icon: "copy" },
            { type: "divider" },
            { label: "Delete", variant: "destructive" },
          ]}
        />
      </Preview>
    </Examples>
  );
}
