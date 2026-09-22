"use client";

import { useState } from "react";
import { Badge } from "@astryxdesign/core/Badge";
import { Button } from "@astryxdesign/core/Button";
import { Card } from "@astryxdesign/core/Card";
import { Heading } from "@astryxdesign/core/Text";
import { Icon } from "@astryxdesign/core/Icon";
import { IconButton } from "@astryxdesign/core/IconButton";
import { MoreMenu } from "@astryxdesign/core/MoreMenu";
import { Section } from "@astryxdesign/core/Section";
import { Selector } from "@astryxdesign/core/Selector";
import { Stack } from "@astryxdesign/core/Stack";
import { Tab, TabList } from "@astryxdesign/core/TabList";
import { Table } from "@astryxdesign/core/Table";
import { TextInput } from "@astryxdesign/core/TextInput";
import { Toolbar } from "@astryxdesign/core/Toolbar";
import { Caption, Examples, Preview, Row } from "./shared";

const SIZES = [
  { size: "sm" as const, label: "Small" },
  { size: "md" as const, label: "Medium" },
  { size: "lg" as const, label: "Large" },
];

const TASKS = [
  { id: "1", task: "Fix login bug", status: "Open", priority: "High" },
  { id: "2", task: "Update docs", status: "In progress", priority: "Medium" },
  { id: "3", task: "Add unit tests", status: "Open", priority: "Low" },
];

const PEOPLE = [
  { id: "1", name: "Alex Johnson", status: "Active", role: "Admin" },
  { id: "2", name: "Sam Rivera", status: "Active", role: "Editor" },
  { id: "3", name: "Jordan Lee", status: "Invited", role: "Viewer" },
  { id: "4", name: "Taylor Kim", status: "Active", role: "Editor" },
];

export default function ToolbarDemo() {
  const [tab, setTab] = useState("overview");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [priority, setPriority] = useState<string | null>(null);
  const [selectedCount, setSelectedCount] = useState(3);

  return (
    <Examples>
      <Preview label="Formatting">
        <Toolbar
          label="Formatting"
          startContent={
            <Row>
              <Button label="Bold" variant="secondary" size="sm" />
              <Button label="Italic" variant="secondary" size="sm" />
              <IconButton label="Search" size="sm" icon={<Icon icon="search" />} />
            </Row>
          }
        />
      </Preview>
      <Preview label="Three slots">
        <Card>
          <Toolbar
            label="Document toolbar"
            dividers={["bottom"]}
            startContent={<IconButton label="Back" variant="ghost" icon={<Icon icon="chevronLeft" />} />}
            centerContent={<Heading level={4}>Title</Heading>}
            endContent={
              <Row>
                <Button label="Discard" variant="secondary" />
                <Button label="Save" variant="primary" />
              </Row>
            }
          />
          <Section />
        </Card>
      </Preview>
      <Preview label="Card header">
        <Card>
          <Toolbar
            label="User list actions"
            size="sm"
            dividers={["bottom"]}
            startContent={<Heading level={4}>Card title</Heading>}
            endContent={
              <Row>
                <IconButton label="Filter" variant="ghost" icon={<Icon icon="funnel" />} />
                <IconButton label="Add user" icon={<Icon icon="check" />} />
              </Row>
            }
          />
          <Section />
        </Card>
      </Preview>
      <Preview label="Sizes">
        <Stack gap={4}>
          {SIZES.map(({ size, label }) => (
            <Card key={size}>
              <Toolbar
                label={`${label} toolbar`}
                size={size}
                startContent={<Heading level={4}>{label}</Heading>}
                endContent={
                  <Row>
                    <IconButton label="Filter" variant="ghost" icon={<Icon icon="funnel" />} />
                    <Button label="Add" icon={<Icon icon="check" />} />
                  </Row>
                }
              />
            </Card>
          ))}
        </Stack>
      </Preview>
      <Preview label="With tabs">
        <Card>
          <Toolbar
            label="Section navigation"
            dividers={["bottom"]}
            startContent={
              <TabList value={tab} onChange={setTab}>
                <Tab value="overview" label="Overview" />
                <Tab value="analytics" label="Analytics" />
                <Tab value="settings" label="Settings" />
              </TabList>
            }
            endContent={<IconButton label="New item" icon={<Icon icon="check" />} />}
          />
          <Section />
        </Card>
      </Preview>
      <Preview label="Table filter">
        <Stack gap={0}>
          <Toolbar
            label="Table filters"
            size="sm"
            dividers={["bottom"]}
            startContent={
              <Row>
                <TextInput
                  label="Search"
                  isLabelHidden
                  placeholder="Search..."
                  value={search}
                  onChange={setSearch}
                  startIcon="search"
                />
                <Selector
                  label="Status"
                  isLabelHidden
                  placeholder="Status"
                  hasClear
                  value={status}
                  onChange={setStatus}
                  options={["Open", "In progress", "Done"]}
                />
                <Selector
                  label="Priority"
                  isLabelHidden
                  placeholder="Priority"
                  hasClear
                  value={priority}
                  onChange={setPriority}
                  options={["High", "Medium", "Low"]}
                />
              </Row>
            }
            endContent={
              <MoreMenu
                className=""
                style={{}}
                items={[{ label: "Compact view" }, { label: "Comfortable view" }, { label: "Export CSV" }]}
              />
            }
          />
          <Table
            idKey="id"
            columns={[
              { key: "task", header: "Task" },
              { key: "status", header: "Status" },
              { key: "priority", header: "Priority" },
            ]}
            data={TASKS}
          />
        </Stack>
      </Preview>
      <Preview label="Bulk actions">
        <Stack gap={0}>
          {selectedCount > 0 ? (
            <Toolbar
              label="Bulk actions"
              size="sm"
              variant="muted"
              dividers={["bottom"]}
              startContent={
                <Row>
                  <Badge label={`${selectedCount} selected`} />
                  <IconButton label="Delete" variant="ghost" icon={<Icon icon="error" />} />
                  <IconButton label="Archive" variant="ghost" icon={<Icon icon="copy" />} />
                </Row>
              }
              endContent={
                <Button label="Deselect all" variant="ghost" onClick={() => setSelectedCount(0)} />
              }
            />
          ) : (
            <Caption>Select rows to show bulk actions.</Caption>
          )}
          <Table
            idKey="id"
            columns={[
              { key: "name", header: "Name" },
              { key: "status", header: "Status" },
              { key: "role", header: "Role" },
            ]}
            data={PEOPLE}
          />
        </Stack>
      </Preview>
    </Examples>
  );
}
