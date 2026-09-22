"use client";

import { useMemo, useState, type ReactNode } from "react";
import { ClientOnly } from "@/components/ClientOnly";
import { AppShell } from "@astryxdesign/core/AppShell";
import { AspectRatio } from "@astryxdesign/core/AspectRatio";
import { Avatar } from "@astryxdesign/core/Avatar";
import { AvatarGroup } from "@astryxdesign/core/AvatarGroup";
import { Badge } from "@astryxdesign/core/Badge";
import { Banner } from "@astryxdesign/core/Banner";
import { Blockquote } from "@astryxdesign/core/Blockquote";
import { BottomSheet } from "@astryxdesign/core/BottomSheet";
import { Breadcrumbs, BreadcrumbItem } from "@astryxdesign/core/Breadcrumbs";
import { Button } from "@astryxdesign/core/Button";
import { ButtonGroup } from "@astryxdesign/core/ButtonGroup";
import { Calendar } from "@astryxdesign/core/Calendar";
import type { ISODateString } from "@astryxdesign/core/Calendar";
import { Card } from "@astryxdesign/core/Card";
import { Carousel } from "@astryxdesign/core/Carousel";
import {
  ChatComposer,
  ChatLayout,
  ChatMessage,
  ChatMessageBubble,
  ChatMessageList,
  ChatSystemMessage,
} from "@astryxdesign/core/Chat";
import { CheckboxInput } from "@astryxdesign/core/CheckboxInput";
import { Citation } from "@astryxdesign/core/Citation";
import { CodeBlock } from "@astryxdesign/core/CodeBlock";
import { Collapsible } from "@astryxdesign/core/Collapsible";
import { CommandPalette } from "@astryxdesign/core/CommandPalette";
import { ContextMenu } from "@astryxdesign/core/ContextMenu";
import { DateInput } from "@astryxdesign/core/DateInput";
import { Dialog, DialogHeader } from "@astryxdesign/core/Dialog";
import { Divider } from "@astryxdesign/core/Divider";
import { DropdownMenu } from "@astryxdesign/core/DropdownMenu";
import { EmptyState } from "@astryxdesign/core/EmptyState";
import { Field } from "@astryxdesign/core/Field";
import { FileInput } from "@astryxdesign/core/FileInput";
import { FormLayout } from "@astryxdesign/core/FormLayout";
import { Grid } from "@astryxdesign/core/Grid";
import { HoverCard } from "@astryxdesign/core/HoverCard";
import { Icon } from "@astryxdesign/core/Icon";
import { IconButton } from "@astryxdesign/core/IconButton";
import { Kbd } from "@astryxdesign/core/Kbd";
import {
  Layout,
  LayoutContent,
  LayoutFooter,
  LayoutHeader,
  LayoutPanel,
} from "@astryxdesign/core/Layout";
import { Link } from "@astryxdesign/core/Link";
import { List, ListItem } from "@astryxdesign/core/List";
import { Markdown } from "@astryxdesign/core/Markdown";
import { MetadataList, MetadataListItem } from "@astryxdesign/core/MetadataList";
import { MoreMenu } from "@astryxdesign/core/MoreMenu";
import { NumberInput } from "@astryxdesign/core/NumberInput";
import { OverflowList } from "@astryxdesign/core/OverflowList";
import { Pagination } from "@astryxdesign/core/Pagination";
import { Popover } from "@astryxdesign/core/Popover";
import { ProgressBar } from "@astryxdesign/core/ProgressBar";
import { RadioList, RadioListItem } from "@astryxdesign/core/RadioList";
import { ResizeHandle, useResizable } from "@astryxdesign/core/Resizable";
import { ScrollableArea } from "@astryxdesign/core/ScrollableArea";
import { Section } from "@astryxdesign/core/Section";
import { SegmentedControl, SegmentedControlItem } from "@astryxdesign/core/SegmentedControl";
import { Selector } from "@astryxdesign/core/Selector";
import { SideNav, SideNavItem } from "@astryxdesign/core/SideNav";
import { Skeleton } from "@astryxdesign/core/Skeleton";
import { Slider } from "@astryxdesign/core/Slider";
import { Spinner } from "@astryxdesign/core/Spinner";
import { Stack, HStack } from "@astryxdesign/core/Stack";
import { StatusDot } from "@astryxdesign/core/StatusDot";
import { Step, Stepper } from "@astryxdesign/core/Stepper";
import { Switch } from "@astryxdesign/core/Switch";
import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "@astryxdesign/core/Table";
import { Tab, TabList } from "@astryxdesign/core/TabList";
import { Heading, Text } from "@astryxdesign/core/Text";
import { TextArea } from "@astryxdesign/core/TextArea";
import { TextInput } from "@astryxdesign/core/TextInput";
import { Thumbnail } from "@astryxdesign/core/Thumbnail";
import { TimeInput } from "@astryxdesign/core/TimeInput";
import { Timestamp } from "@astryxdesign/core/Timestamp";
import { ToggleButton, ToggleButtonGroup } from "@astryxdesign/core/ToggleButton";
import { Token } from "@astryxdesign/core/Token";
import { Tokenizer } from "@astryxdesign/core/Tokenizer";
import { Toolbar } from "@astryxdesign/core/Toolbar";
import { Tooltip } from "@astryxdesign/core/Tooltip";
import { TopNav, TopNavHeading, TopNavItem } from "@astryxdesign/core/TopNav";
import { TreeList } from "@astryxdesign/core/TreeList";
import { Typeahead, createStaticSource } from "@astryxdesign/core/Typeahead";
import { VisuallyHidden } from "@astryxdesign/core/VisuallyHidden";
import { useToast } from "@astryxdesign/core/Toast";

const SEARCH_ITEMS = [
  { id: "button", label: "Button" },
  { id: "dialog", label: "Dialog" },
  { id: "input", label: "Text Input" },
  { id: "table", label: "Table" },
];

function Row({ children }: { children: ReactNode }) {
  return (
    <HStack gap={2} vAlign="center" wrap="wrap">
      {children}
    </HStack>
  );
}

export function Preview({ label, children }: { label: string; children: ReactNode }) {
  return (
    <Card>
      <Stack gap={3}>
        <Text type="label" color="secondary">
          {label}
        </Text>
        {children}
      </Stack>
    </Card>
  );
}

export const DEMOS: Record<string, () => ReactNode> = {
  button: () => (
    <Row>
      <Button label="Primary" variant="primary" />
      <Button label="Secondary" variant="secondary" />
      <Button label="Ghost" variant="ghost" />
      <Button label="Destructive" variant="destructive" />
      <Button label="Disabled" variant="primary" isDisabled />
    </Row>
  ),
  "button-group": () => (
    <ButtonGroup label="Edit actions">
      <Button label="Copy" variant="secondary" />
      <Button label="Cut" variant="secondary" />
      <Button label="Paste" variant="secondary" />
    </ButtonGroup>
  ),
  "icon-button": () => (
    <Row>
      <IconButton label="Search" icon={<Icon icon="search" />} />
      <IconButton label="Settings" icon={<Icon icon="wrench" />} variant="ghost" />
    </Row>
  ),
  link: () => <Link href="#link">Documentation</Link>,
  "dropdown-menu": () => (
    <HStack>
      <DropdownMenu
        button={{ label: "Actions" }}
        items={[
          { label: "Edit" },
          { label: "Duplicate" },
          { type: "divider" },
          { label: "Delete", variant: "destructive" },
        ]}
      />
    </HStack>
  ),
  "more-menu": () => (
    <HStack>
      <MoreMenu
        className=""
        style={{}}
        items={[
          { label: "Rename" },
          { label: "Archive" },
          { type: "divider" },
          { label: "Delete", variant: "destructive" },
        ]}
      />
    </HStack>
  ),
  "segmented-control": () => {
    const Demo = () => {
      const [value, setValue] = useState("grid");
      return (
        <SegmentedControl label="View" value={value} onChange={setValue}>
          <SegmentedControlItem value="grid" label="Grid" />
          <SegmentedControlItem value="list" label="List" />
          <SegmentedControlItem value="table" label="Table" />
        </SegmentedControl>
      );
    };
    return <Demo />;
  },
  "toggle-button": () => {
    const Demo = () => {
      const [pressed, setPressed] = useState(true);
      return <ToggleButton label="Notifications" isPressed={pressed} onPressedChange={setPressed} />;
    };
    return <Demo />;
  },
  "toggle-button-group": () => {
    const Demo = () => {
      const [value, setValue] = useState<string | null>("active");
      return (
        <ToggleButtonGroup label="Status" value={value} onChange={setValue}>
          <ToggleButton label="Active" value="active" />
          <ToggleButton label="Pending" value="pending" />
          <ToggleButton label="Closed" value="closed" />
        </ToggleButtonGroup>
      );
    };
    return <Demo />;
  },
  toolbar: () => (
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
  ),
  "app-shell": () => (
    <div style={{ height: 220, borderRadius: 16, overflow: "hidden" }}>
      <AppShell
        variant="elevated"
        contentPadding={4}
        topNav={
          <TopNav
            label="Preview navigation"
            heading={<TopNavHeading heading="Astryx" />}
            startContent={<TopNavItem label="Home" href="#home" isSelected />}
          />
        }
        sideNav={
          <SideNav>
            <SideNavItem label="Overview" href="#overview" isSelected />
            <SideNavItem label="Button" href="#button" />
          </SideNav>
        }
      >
        <Text>Content</Text>
      </AppShell>
    </div>
  ),
  "aspect-ratio": () => (
    <HStack gap={3}>
      <div style={{ width: 80 }}>
        <AspectRatio ratio={1}>
          <div style={{ width: "100%", height: "100%", background: "var(--color-accent)" }} />
        </AspectRatio>
      </div>
      <div style={{ width: 120 }}>
        <AspectRatio ratio={16 / 9}>
          <div style={{ width: "100%", height: "100%", background: "var(--color-background-muted)" }} />
        </AspectRatio>
      </div>
    </HStack>
  ),
  divider: () => (
    <div style={{ width: 240 }}>
      <Text display="block">Above</Text>
      <Divider />
      <Text display="block">Below</Text>
    </div>
  ),
  "form-layout": () => {
    const Demo = () => {
      const [name, setName] = useState("");
      const [role, setRole] = useState("");
      return (
        <div style={{ width: 280 }}>
          <FormLayout>
            <TextInput label="Name" value={name} onChange={setName} placeholder="Jordan" />
            <TextInput label="Role" value={role} onChange={setRole} placeholder="Designer" />
          </FormLayout>
        </div>
      );
    };
    return <Demo />;
  },
  grid: () => (
    <Grid columns={3} gap={3}>
      <Card>
        <Text>A</Text>
      </Card>
      <Card>
        <Text>B</Text>
      </Card>
      <Card>
        <Text>C</Text>
      </Card>
    </Grid>
  ),
  layout: () => (
    <div style={{ height: 160 }}>
      <Layout
        height="fill"
        header={<LayoutHeader hasDivider>Header</LayoutHeader>}
        start={<LayoutPanel width={120}>Start</LayoutPanel>}
        content={<LayoutContent>Content</LayoutContent>}
        footer={<LayoutFooter hasDivider>Footer</LayoutFooter>}
      />
    </div>
  ),
  section: () => (
    <Section>
      <Stack gap={2}>
        <Heading level={3}>Proof of fit</Heading>
        <Text color="secondary">What this surface is asking for.</Text>
      </Stack>
    </Section>
  ),
  stack: () => (
    <Stack gap={2}>
      <Button label="First" variant="secondary" size="sm" />
      <Button label="Second" variant="secondary" size="sm" />
    </Stack>
  ),
  "resize-handle": () => {
    const Demo = () => {
      const pane = useResizable({ defaultSize: 160, minSize: 80, maxSize: 280 });
      return (
        <div style={{ display: "flex", height: 140 }}>
          <div style={{ width: pane.size, overflow: "hidden", padding: 12 }}>
            <Text>Pane</Text>
          </div>
          <ResizeHandle resizable={pane.props} hasDivider />
          <div style={{ flex: 1, padding: 12 }}>
            <Text>Content</Text>
          </div>
        </div>
      );
    };
    return <Demo />;
  },
  "scrollable-area": () => (
    <ScrollableArea label="Rows" height={120}>
      <Stack gap={2}>
        {Array.from({ length: 8 }, (_, i) => (
          <Text key={i} display="block">
            Row {i + 1}
          </Text>
        ))}
      </Stack>
    </ScrollableArea>
  ),
  avatar: () => (
    <Row>
      <Avatar name="Jordan Miles" size="sm" />
      <Avatar name="Alex Rivera" size="md" />
      <Avatar name="Dana Kim" size="lg" />
      <AvatarGroup>
        <Avatar name="Jordan Miles" />
        <Avatar name="Alex Rivera" />
        <Avatar name="Dana Kim" />
      </AvatarGroup>
    </Row>
  ),
  blockquote: () => <Blockquote cite="Astryx">Accessible, themeable React components.</Blockquote>,
  citation: () => <Citation number={1} source={{ title: "Astryx", url: "https://astryx.atmeta.com/" }} />,
  code: () => (
    <Text>
      Import <Text type="code">Button</Text> from the core package.
    </Text>
  ),
  "code-block": () => (
    <CodeBlock
      language="tsx"
      code={`import { Button } from "@astryxdesign/core/Button";\n\n<Button label="Save" variant="primary" />`}
      width="100%"
    />
  ),
  "empty-state": () => (
    <EmptyState
      title="No results"
      description="Try a different search."
      actions={<Button label="Clear search" variant="secondary" />}
    />
  ),
  heading: () => (
    <Stack gap={2}>
      <Heading level={1}>Brand refresh brief</Heading>
      <Heading level={2}>Proof of fit</Heading>
      <Heading level={3}>Landing page copy</Heading>
    </Stack>
  ),
  icon: () => (
    <Row>
      <Icon icon="search" />
      <Icon icon="calendar" />
      <Icon icon="check" color="success" />
    </Row>
  ),
  kbd: () => <Kbd keys="mod+k" />,
  markdown: () => <Markdown>{"Invite **two** people. Use `sealed` rooms."}</Markdown>,
  text: () => (
    <Stack gap={1}>
      <Text type="large" display="block">
        Scope: a full identity refresh.
      </Text>
      <Text display="block">Invited people can see this room.</Text>
      <Text type="supporting" display="block">
        Posted 2 days ago
      </Text>
    </Stack>
  ),
  thumbnail: () => <Thumbnail label="Preview" />,
  timestamp: () => (
    <ClientOnly>
      <Timestamp value={1758564000} />
    </ClientOnly>
  ),
  token: () => {
    const Demo = () => {
      const [show, setShow] = useState(true);
      if (!show) return <Button label="Reset" size="sm" variant="secondary" onClick={() => setShow(true)} />;
      return <Token label="Sealed" onRemove={() => setShow(false)} />;
    };
    return <Demo />;
  },
  card: () => (
    <Row>
      <Card width={220}>
        <Stack gap={1}>
          <Heading level={4}>Brand refresh brief</Heading>
          <Text color="secondary">Fixed · $2,400</Text>
        </Stack>
      </Card>
      <Card width={220} variant="muted">
        <Stack gap={1}>
          <Heading level={4}>Landing page copy</Heading>
          <Text color="secondary">Hourly · $65/hr</Text>
        </Stack>
      </Card>
    </Row>
  ),
  carousel: () => (
    <div style={{ width: 280 }}>
      <Carousel aria-label="Slides">
        <Card>
          <Text>1:1</Text>
        </Card>
        <Card>
          <Text>4:3</Text>
        </Card>
        <Card>
          <Text>16:9</Text>
        </Card>
      </Carousel>
    </div>
  ),
  collapsible: () => (
    <div style={{ width: 320 }}>
      <Collapsible trigger="What is a sealed room?" defaultIsOpen>
        Invited people can see this room and will show up here once they respond.
      </Collapsible>
    </div>
  ),
  calendar: () => {
    const Demo = () => {
      const [value, setValue] = useState<ISODateString>("2026-09-22");
      return (
        <ClientOnly>
          <Calendar value={value} onChange={setValue} />
        </ClientOnly>
      );
    };
    return <Demo />;
  },
  checkbox: () => {
    const Demo = () => {
      const [value, setValue] = useState(true);
      return <CheckboxInput label="Notify me" value={value} onChange={setValue} />;
    };
    return <Demo />;
  },
  "date-input": () => {
    const Demo = () => {
      const [value, setValue] = useState<ISODateString | undefined>("2026-09-22");
      return (
        <ClientOnly>
          <div style={{ width: 220 }}>
            <DateInput label="Start date" value={value} onChange={setValue} />
          </div>
        </ClientOnly>
      );
    };
    return <Demo />;
  },
  field: () => {
    const Demo = () => {
      const [value, setValue] = useState("");
      return (
        <div style={{ width: 240 }}>
          <Field label="When can you start" inputID="start-field">
            <TextInput
              label="When can you start"
              isLabelHidden
              value={value}
              onChange={setValue}
              placeholder="e.g. Next Monday"
            />
          </Field>
        </div>
      );
    };
    return <Demo />;
  },
  "file-input": () => {
    const Demo = () => {
      const [file, setFile] = useState<File | File[] | null>(null);
      return (
        <div style={{ width: 280 }}>
          <FileInput label="Attachment" value={file} onChange={setFile} />
        </div>
      );
    };
    return <Demo />;
  },
  "number-input": () => {
    const Demo = () => {
      const [value, setValue] = useState<number | null>(65);
      return (
        <div style={{ width: 160 }}>
          <NumberInput label="Rate" value={value} onChange={setValue} hasClear />
        </div>
      );
    };
    return <Demo />;
  },
  radio: () => {
    const Demo = () => {
      const [value, setValue] = useState("fixed");
      return (
        <RadioList label="Rate" value={value} onChange={setValue}>
          <RadioListItem label="Fixed" value="fixed" />
          <RadioListItem label="Hourly" value="hourly" />
        </RadioList>
      );
    };
    return <Demo />;
  },
  select: () => {
    const Demo = () => {
      const [value, setValue] = useState("design");
      return (
        <div style={{ width: 200 }}>
          <Selector
            label="Role"
            value={value}
            onChange={setValue}
            options={[
              { value: "design", label: "Design" },
              { value: "eng", label: "Engineering" },
              { value: "pm", label: "Product" },
            ]}
          />
        </div>
      );
    };
    return <Demo />;
  },
  slider: () => {
    const Demo = () => {
      const [value, setValue] = useState(60);
      return (
        <div style={{ width: 220 }}>
          <Slider label="Opacity" value={value} onChange={setValue} />
        </div>
      );
    };
    return <Demo />;
  },
  switch: () => {
    const Demo = () => {
      const [value, setValue] = useState(true);
      return <Switch label="Show completed" value={value} onChange={setValue} />;
    };
    return <Demo />;
  },
  "text-area": () => {
    const Demo = () => {
      const [value, setValue] = useState("");
      return (
        <div style={{ width: 280 }}>
          <TextArea label="Brief" value={value} onChange={setValue} placeholder="What do you need?" />
        </div>
      );
    };
    return <Demo />;
  },
  "text-input": () => {
    const Demo = () => {
      const [value, setValue] = useState("");
      return (
        <div style={{ width: 240 }}>
          <TextInput label="Your rate" value={value} onChange={setValue} placeholder="0" />
        </div>
      );
    };
    return <Demo />;
  },
  "time-input": () => {
    const Demo = () => {
      const [value, setValue] = useState("09:00" as `${number}${number}:${number}${number}`);
      return (
        <div style={{ width: 180 }}>
          <TimeInput label="Start time" value={value as never} onChange={setValue as never} />
        </div>
      );
    };
    return <Demo />;
  },
  tokenizer: () => {
    const Demo = () => {
      const items = SEARCH_ITEMS;
      const source = useMemo(() => createStaticSource(items), []);
      const [value, setValue] = useState(items.slice(0, 2));
      return (
        <div style={{ width: 280 }}>
          <Tokenizer
            label="Tags"
            searchSource={source}
            value={value}
            onChange={setValue}
            hasEntriesOnFocus
          />
        </div>
      );
    };
    return <Demo />;
  },
  typeahead: () => {
    const Demo = () => {
      const source = useMemo(() => createStaticSource(SEARCH_ITEMS), []);
      const [value, setValue] = useState<(typeof SEARCH_ITEMS)[number] | null>(null);
      return (
        <div style={{ width: 240 }}>
          <Typeahead
            label="Find a component"
            searchSource={source}
            value={value}
            onChange={setValue}
            hasEntriesOnFocus
          />
        </div>
      );
    };
    return <Demo />;
  },
  badge: () => (
    <Row>
      <Badge label="Neutral" />
      <Badge label="Info" variant="info" />
      <Badge label="Success" variant="success" />
      <Badge label="Warning" variant="warning" />
      <Badge label="Error" variant="error" />
    </Row>
  ),
  banner: () => (
    <Banner status="info" title="2 items are running low" description="Invite another person before the room closes." />
  ),
  "progress-bar": () => (
    <div style={{ width: 240 }}>
      <ProgressBar value={64} label="Uploading" hasValueLabel />
    </div>
  ),
  skeleton: () => (
    <div style={{ width: 200 }}>
      <Stack gap={2}>
        <Skeleton height={16} />
        <Skeleton height={16} width="70%" />
        <Skeleton height={32} width={32} radius="rounded" />
      </Stack>
    </div>
  ),
  spinner: () => <Spinner />,
  "status-dot": () => (
    <Row>
      <StatusDot variant="neutral" label="Neutral" />
      <StatusDot variant="accent" label="Accent" />
      <StatusDot variant="success" label="Success" />
      <StatusDot variant="warning" label="Warning" />
      <StatusDot variant="error" label="Error" />
    </Row>
  ),
  toast: () => {
    const Demo = () => {
      const toast = useToast();
      return (
        <Button
          label="Show toast"
          variant="secondary"
          onClick={() => toast({ body: "Invite sent", type: "info" })}
        />
      );
    };
    return <Demo />;
  },
  breadcrumbs: () => (
    <Breadcrumbs>
      <BreadcrumbItem href="#rooms">Rooms</BreadcrumbItem>
      <BreadcrumbItem href="#brief">Brand refresh</BreadcrumbItem>
      <BreadcrumbItem isCurrent>Bids</BreadcrumbItem>
    </Breadcrumbs>
  ),
  pagination: () => {
    const Demo = () => {
      const [page, setPage] = useState(2);
      return <Pagination page={page} onChange={setPage} totalPages={5} />;
    };
    return <Demo />;
  },
  "side-nav": () => (
    <div style={{ width: 220, height: 240, overflow: "hidden", borderRadius: 16 }}>
      <SideNav>
        <SideNavItem label="Overview" href="#overview" isSelected />
        <SideNavItem label="Button" href="#button" />
        <SideNavItem label="Dialog" href="#dialog" />
      </SideNav>
    </div>
  ),
  stepper: () => (
    <Stepper activeStep={1} label="Onboarding">
      <Step step={0} label="Invite" />
      <Step step={1} label="Review" />
      <Step step={2} label="Award" />
    </Stepper>
  ),
  "tab-list": () => {
    const Demo = () => {
      const [value, setValue] = useState("overview");
      return (
        <TabList value={value} onChange={setValue}>
          <Tab value="overview" label="Overview" />
          <Tab value="properties" label="Properties" />
        </TabList>
      );
    };
    return <Demo />;
  },
  "top-nav": () => (
    <TopNav
      label="Product"
      heading={<TopNavHeading heading="Astryx" />}
      startContent={
        <>
          <TopNavItem label="Dashboard" href="#dashboard" isSelected />
          <TopNavItem label="Library" href="#library" />
        </>
      }
    />
  ),
  "bottom-sheet": () => {
    const Demo = () => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button label="Open sheet" variant="secondary" onClick={() => setOpen(true)} />
          <BottomSheet isOpen={open} onOpenChange={setOpen} label="Invite">
            <Text>Send this room to someone on your allowlist.</Text>
          </BottomSheet>
        </>
      );
    };
    return <Demo />;
  },
  "command-palette": () => {
    const Demo = () => {
      const [open, setOpen] = useState(false);
      const source = useMemo(() => createStaticSource(SEARCH_ITEMS), []);
      return (
        <>
          <Button label="Open palette" variant="secondary" onClick={() => setOpen(true)} />
          <CommandPalette isOpen={open} onOpenChange={setOpen} searchSource={source} />
        </>
      );
    };
    return <Demo />;
  },
  "context-menu": () => (
    <ContextMenu items={[{ label: "Open" }, { label: "Duplicate" }, { type: "divider" }, { label: "Delete", variant: "destructive" }]}>
      <Card>
        <Text>Right-click me</Text>
      </Card>
    </ContextMenu>
  ),
  dialog: () => {
    const Demo = () => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <HStack>
            <Button label="Open dialog" variant="secondary" onClick={() => setOpen(true)} />
          </HStack>
          <Dialog isOpen={open} onOpenChange={setOpen}>
            <Layout
              height="auto"
              header={<DialogHeader title="Close this room?" onOpenChange={setOpen} />}
              content={
                <LayoutContent>
                  <Text>People will no longer be able to submit.</Text>
                </LayoutContent>
              }
              footer={
                <LayoutFooter hasDivider>
                  <HStack gap={2} hAlign="end">
                    <Button label="Cancel" variant="ghost" onClick={() => setOpen(false)} />
                    <Button label="Close room" variant="destructive" onClick={() => setOpen(false)} />
                  </HStack>
                </LayoutFooter>
              }
            />
          </Dialog>
        </>
      );
    };
    return <Demo />;
  },
  "hover-card": () => (
    <HoverCard className="" style={{}} content={<Text>Jordan · invited 2 days ago</Text>}>
      <Button label="Preview" variant="secondary" />
    </HoverCard>
  ),
  popover: () => (
    <Popover
      className=""
      style={{}}
      content={
        <Stack gap={2}>
          <Text weight="medium">Shipping method</Text>
          <Text color="secondary">Delivered in 5–7 business days</Text>
        </Stack>
      }
    >
      <Button label="Open" variant="secondary" />
    </Popover>
  ),
  tooltip: () => (
    <Tooltip content="Post a sealed job">
      <IconButton label="New" icon={<Icon icon="search" />} />
    </Tooltip>
  ),
  list: () => (
    <div style={{ width: 320 }}>
      <List>
        <ListItem label="Brand refresh" description="Fixed · $2,400" startContent={<Avatar name="Brand refresh" size="sm" />} />
        <ListItem label="Landing page" description="Hourly · $65/hr" startContent={<Avatar name="Landing page" size="sm" />} />
      </List>
    </div>
  ),
  "metadata-list": () => (
    <MetadataList>
      <MetadataListItem label="Status">Sealed</MetadataListItem>
      <MetadataListItem label="Budget">$2,400</MetadataListItem>
      <MetadataListItem label="Posted">2 days ago</MetadataListItem>
    </MetadataList>
  ),
  "overflow-list": () => (
    <div style={{ width: 220 }}>
      <OverflowList maxVisibleItems={3}>
        <Badge label="Design" />
        <Badge label="Copy" />
        <Badge label="Motion" />
        <Badge label="Research" />
        <Badge label="Brand" />
      </OverflowList>
    </div>
  ),
  table: () => (
    <Table>
      <TableHeader>
        <TableRow isHeaderRow>
          <TableHeaderCell>Item</TableHeaderCell>
          <TableHeaderCell>Available</TableHeaderCell>
          <TableHeaderCell>Tags</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Butter Croissant</TableCell>
          <TableCell>64</TableCell>
          <TableCell>Fresh</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Pancakes</TableCell>
          <TableCell>38</TableCell>
          <TableCell>Popular</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  "tree-list": () => (
    <TreeList
      items={[
        {
          id: "rooms",
          label: "Rooms",
          children: [
            { id: "brand", label: "Brand refresh" },
            { id: "landing", label: "Landing page" },
          ],
        },
        {
          id: "people",
          label: "People",
          children: [
            { id: "jordan", label: "Jordan" },
            { id: "alex", label: "Alex" },
          ],
        },
      ]}
    />
  ),
  chat: () => (
    <ClientOnly fallback={<Text color="secondary">Chat</Text>}>
      <div style={{ height: 320 }}>
        <ChatLayout composer={<ChatComposer onSubmit={() => undefined} placeholder="Write a message" />}>
          <ChatMessageList>
            <ChatSystemMessage>Order #1043 · Placed</ChatSystemMessage>
            <ChatMessage sender="assistant" name="Astryx">
              <ChatMessageBubble>Can you show me the full details?</ChatMessageBubble>
            </ChatMessage>
            <ChatMessage sender="user">
              <ChatMessageBubble>Here’s everything I have on order #1043.</ChatMessageBubble>
            </ChatMessage>
          </ChatMessageList>
        </ChatLayout>
      </div>
    </ClientOnly>
  ),
  "visually-hidden": () => (
    <Row>
      <Button label="Save">
        Save
        <VisuallyHidden> draft to this room</VisuallyHidden>
      </Button>
      <Text color="secondary">Extra text is announced, not shown.</Text>
    </Row>
  ),
  tokens: () => (
    <Text color="secondary">Open Tokens in the top nav for the live ramp.</Text>
  ),
};

export function OverviewDemos() {
  return (
    <ClientOnly>
      <Grid columns={{ minWidth: 280, max: 2 }} gap={4}>
        <Preview label="Button">{DEMOS.button()}</Preview>
        <Preview label="Button Group">{DEMOS["button-group"]()}</Preview>
        <Preview label="Dropdown Menu">{DEMOS["dropdown-menu"]()}</Preview>
        <Preview label="Icon Button">{DEMOS["icon-button"]()}</Preview>
        <Preview label="Link">{DEMOS.link()}</Preview>
        <Preview label="More Menu">{DEMOS["more-menu"]()}</Preview>
        <Preview label="Segmented Control">{DEMOS["segmented-control"]()}</Preview>
        <Preview label="Toggle Button">{DEMOS["toggle-button"]()}</Preview>
        <Preview label="Toggle Button Group">{DEMOS["toggle-button-group"]()}</Preview>
        <Preview label="Toolbar">{DEMOS.toolbar()}</Preview>
        <Preview label="Avatar">{DEMOS.avatar()}</Preview>
        <Preview label="Badge">{DEMOS.badge()}</Preview>
        <Preview label="Card">{DEMOS.card()}</Preview>
        <Preview label="Toast">{DEMOS.toast()}</Preview>
        <Preview label="Chat">{DEMOS.chat()}</Preview>
        <Preview label="Calendar">{DEMOS.calendar()}</Preview>
      </Grid>
    </ClientOnly>
  );
}
