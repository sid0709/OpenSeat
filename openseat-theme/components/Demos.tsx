"use client";

import { useState, type ReactNode } from "react";
import {
  AspectRatio,
  Avatar,
  AvatarStack,
  Badge,
  Banner,
  Blockquote,
  BottomSheet,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Calendar,
  Card,
  Carousel,
  Chat,
  ChatComposer,
  ChatMessage,
  ChatSystemMessage,
  Checkbox,
  Citation,
  Code,
  CodeBlock,
  Collapsible,
  CommandPalette,
  ContextMenu,
  DateInput,
  Dialog,
  Divider,
  DropdownMenu,
  EmptyState,
  Field,
  FileInput,
  FormLayout,
  Grid,
  Heading,
  Icon,
  IconButton,
  Input,
  Kbd,
  Layout,
  Link,
  List,
  Markdown,
  Menu,
  MetadataList,
  MoreMenu,
  Nav,
  NumberInput,
  OverflowList,
  Pagination,
  Popover,
  Preview,
  ProgressBar,
  RadioList,
  ResizeHandle,
  ScrollableArea,
  Section,
  SegmentedControl,
  Select,
  SideNav,
  Skeleton,
  Slider,
  Spinner,
  Stack,
  StatusDot,
  Stepper,
  Switch,
  TabList,
  Table,
  Text,
  TextArea,
  TimeInput,
  Timestamp,
  Toast,
  ToggleButton,
  ToggleButtonGroup,
  Token,
  Tokenizer,
  Toolbar,
  ToolbarDivider,
  Tooltip,
  TreeList,
  Typeahead,
  VisuallyHidden,
} from "@openseat/design-system";

function Row({ children }: { children: ReactNode }) {
  return (
    <Layout gap={12} align="center" wrap>
      {children}
    </Layout>
  );
}

export const DEMOS: Record<string, () => ReactNode> = {
  button: () => (
    <Row>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="primary" disabled>
        Disabled
      </Button>
    </Row>
  ),
  "button-group": () => (
    <ButtonGroup>
      <Button variant="secondary">Copy</Button>
      <Button variant="secondary">Cut</Button>
      <Button variant="secondary">Paste</Button>
    </ButtonGroup>
  ),
  "icon-button": () => (
    <Row>
      <IconButton label="Search">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
      </IconButton>
      <IconButton label="Settings" size="lg">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      </IconButton>
    </Row>
  ),
  link: () => <Link href="#link">Documentation</Link>,
  "dropdown-menu": () => (
    <DropdownMenu
      trigger={<Button variant="secondary">Actions</Button>}
      items={[
        { label: "Edit" },
        { label: "Duplicate" },
        { divider: true, label: "" },
        { label: "Delete", danger: true },
      ]}
    />
  ),
  "more-menu": () => (
    <MoreMenu items={[{ label: "Rename" }, { label: "Archive" }, { label: "Delete", danger: true }]} />
  ),
  "segmented-control": () => {
    const Demo = () => {
      const [v, setV] = useState("grid");
      return (
        <SegmentedControl
          value={v}
          onChange={setV}
          options={[
            { label: "Grid", value: "grid" },
            { label: "List", value: "list" },
            { label: "Table", value: "table" },
          ]}
        />
      );
    };
    return <Demo />;
  },
  "toggle-button": () => {
    const Demo = () => {
      const [on, setOn] = useState(true);
      return (
        <ToggleButton pressed={on} onPressedChange={setOn}>
          Notifications
        </ToggleButton>
      );
    };
    return <Demo />;
  },
  "toggle-button-group": () => {
    const Demo = () => {
      const [v, setV] = useState(["active"]);
      return (
        <ToggleButtonGroup
          value={v}
          onChange={setV}
          options={[
            { label: "Active", value: "active" },
            { label: "Pending", value: "pending" },
            { label: "Closed", value: "closed" },
          ]}
        />
      );
    };
    return <Demo />;
  },
  toolbar: () => (
    <Toolbar>
      <Button variant="secondary" size="sm">
        Bold
      </Button>
      <Button variant="secondary" size="sm">
        Italic
      </Button>
      <ToolbarDivider />
      <IconButton label="Link" size="sm">
        ↗
      </IconButton>
    </Toolbar>
  ),
  "app-shell": () => (
    <div style={{ width: "100%", border: "1px solid var(--border-subtle)", borderRadius: 12, overflow: "hidden" }}>
      <Nav brand="OpenSeat" items={[{ label: "Rooms", active: true }, { label: "Bids" }]} />
      <Layout>
        <div style={{ width: 160, padding: 12, borderRight: "1px solid var(--border-subtle)" }}>
          <Text size="sm" muted>
            Sidebar
          </Text>
        </div>
        <div style={{ padding: 16, flex: 1 }}>
          <Text size="sm">Content</Text>
        </div>
      </Layout>
    </div>
  ),
  "aspect-ratio": () => (
    <div style={{ width: 240 }}>
      <Stack gap={12} direction="row">
        <div style={{ width: 80 }}>
          <AspectRatio ratio={1}>
            <div style={{ background: "var(--primary)", width: "100%", height: "100%" }} />
          </AspectRatio>
        </div>
        <div style={{ width: 120 }}>
          <AspectRatio ratio={4 / 3}>
            <div style={{ background: "var(--meta-blue-400)", width: "100%", height: "100%" }} />
          </AspectRatio>
        </div>
        <div style={{ width: 160 }}>
          <AspectRatio ratio={16 / 9}>
            <div style={{ background: "var(--meta-blue-700)", width: "100%", height: "100%" }} />
          </AspectRatio>
        </div>
      </Stack>
    </div>
  ),
  divider: () => (
    <div style={{ width: 240 }}>
      <Text size="sm">Above</Text>
      <Divider />
      <Text size="sm">Below</Text>
    </div>
  ),
  "form-layout": () => (
    <div style={{ width: 280 }}>
      <FormLayout>
        <Field label="Name" placeholder="Jordan" />
        <Field label="Role" placeholder="Designer" />
      </FormLayout>
    </div>
  ),
  grid: () => (
    <Grid columns={3} gap={8}>
      <Card title="A" />
      <Card title="B" />
      <Card title="C" />
    </Grid>
  ),
  layout: () => (
    <Layout gap={8} align="center">
      <Button size="sm">One</Button>
      <Button size="sm" variant="secondary">
        Two
      </Button>
    </Layout>
  ),
  section: () => (
    <Section title="Proof of fit" description="What this room is asking for.">
      <Text>Invited bidders can see this room.</Text>
    </Section>
  ),
  stack: () => (
    <Stack gap={8}>
      <Button variant="secondary" size="sm">
        First
      </Button>
      <Button variant="secondary" size="sm">
        Second
      </Button>
    </Stack>
  ),
  "resize-handle": () => {
    const Demo = () => {
      const [w, setW] = useState(120);
      return (
        <Layout>
          <div style={{ width: w, padding: 8, background: "var(--surface)" }}>Pane</div>
          <ResizeHandle onResize={(d) => setW((x) => Math.max(80, x + d))} />
          <div style={{ padding: 8 }}>Content</div>
        </Layout>
      );
    };
    return <Demo />;
  },
  "scrollable-area": () => (
    <ScrollableArea maxHeight={120}>
      <Stack gap={8}>
        {Array.from({ length: 8 }, (_, i) => (
          <Text key={i} size="sm">
            Row {i + 1}
          </Text>
        ))}
      </Stack>
    </ScrollableArea>
  ),
  avatar: () => (
    <Row>
      <Avatar initials="JM" size={20} />
      <Avatar initials="AR" size={24} />
      <Avatar initials="DK" size={32} status />
      <AvatarStack
        people={[
          { initials: "JM", size: 24 },
          { initials: "AR", size: 24 },
          { initials: "DK", size: 24 },
        ]}
        overflow={3}
      />
    </Row>
  ),
  blockquote: () => <Blockquote>Sealed rooms, invited bidders.</Blockquote>,
  citation: () => <Citation source="OpenSeat design system" />,
  code: () => (
    <Text>
      Import <Code>Button</Code> from the design system.
    </Text>
  ),
  "code-block": () => (
    <div style={{ width: "100%" }}>
      <CodeBlock language="ts" code={`import { Button } from "@openseat/design-system";\n\n<Button>Post a sealed job</Button>`} />
    </div>
  ),
  "empty-state": () => (
    <EmptyState title="No bids yet" description="Invited bidders will show up here." actionLabel="Invite a bidder" />
  ),
  heading: () => (
    <Stack gap={8}>
      <Heading level={1}>Brand refresh brief</Heading>
      <Heading level={2}>Proof of fit</Heading>
      <Heading level={3}>Landing page copy</Heading>
    </Stack>
  ),
  icon: () => (
    <Icon size={20} label="Search">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
    </Icon>
  ),
  kbd: () => (
    <Row>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </Row>
  ),
  markdown: () => <Markdown>{"Invite **two** bidders. Use `sealed` rooms."}</Markdown>,
  text: () => (
    <Stack gap={4}>
      <Text size="lg">Scope: a full identity refresh.</Text>
      <Text>Invited bidders can see this room.</Text>
      <Text size="sm" muted>
        Posted 2 days ago
      </Text>
    </Stack>
  ),
  thumbnail: () => (
    <Row>
      <Thumbnail alt="Placeholder" size={48} />
      <Thumbnail alt="Placeholder" size={64} />
    </Row>
  ),
  timestamp: () => <Timestamp date={new Date(Date.now() - 1000 * 60 * 90)} />,
  token: () => {
    const Demo = () => {
      const [show, setShow] = useState(true);
      if (!show) return <Button size="sm" variant="secondary" onClick={() => setShow(true)}>Reset</Button>;
      return <Token label="Sealed" onRemove={() => setShow(false)} />;
    };
    return <Demo />;
  },
  card: () => (
    <Row>
      <Card title="Brand refresh brief" meta="Fixed · $2,400" footer="Posted 2 days ago" />
      <Card title="Landing page copy" meta="Hourly · $65/hr" interactive />
      <Card title="Selected bid" meta="Chosen for this room" selected />
    </Row>
  ),
  carousel: () => (
    <div style={{ width: 280 }}>
      <Carousel
        slides={[
          <Card key="a" title="1:1" />,
          <Card key="b" title="4:3" />,
          <Card key="c" title="16:9" />,
        ]}
      />
    </div>
  ),
  collapsible: () => (
    <div style={{ width: 320 }}>
      <Collapsible title="What is a sealed room?" defaultOpen>
        Invited bidders can see this room and will show up here once they respond.
      </Collapsible>
    </div>
  ),
  calendar: () => {
    const Demo = () => {
      const [d, setD] = useState(new Date());
      return <Calendar value={d} onChange={setD} />;
    };
    return <Demo />;
  },
  checkbox: () => <Checkbox label="Notify me" defaultChecked />,
  "date-input": () => (
    <div style={{ width: 220 }}>
      <DateInput label="Start date" />
    </div>
  ),
  field: () => (
    <div style={{ width: 240 }}>
      <Field label="When can you start" placeholder="e.g. Next Monday" />
    </div>
  ),
  "file-input": () => (
    <div style={{ width: 280 }}>
      <FileInput />
    </div>
  ),
  "number-input": () => (
    <div style={{ width: 160 }}>
      <NumberInput label="Rate" defaultValue={65} />
    </div>
  ),
  radio: () => {
    const Demo = () => {
      const [v, setV] = useState("fixed");
      return (
        <RadioList
          name="rate"
          value={v}
          onChange={setV}
          options={[
            { label: "Fixed", value: "fixed" },
            { label: "Hourly", value: "hourly" },
          ]}
        />
      );
    };
    return <Demo />;
  },
  select: () => (
    <div style={{ width: 200 }}>
      <Select label="Role" defaultValue="design">
        <option value="design">Design</option>
        <option value="eng">Engineering</option>
        <option value="pm">Product</option>
      </Select>
    </div>
  ),
  slider: () => (
    <div style={{ width: 220 }}>
      <Slider label="Opacity" defaultValue={60} />
    </div>
  ),
  switch: () => <Switch label="Show completed" defaultChecked />,
  "text-area": () => (
    <div style={{ width: 280 }}>
      <TextArea label="Brief" placeholder="What do you need?" />
    </div>
  ),
  "text-input": () => (
    <div style={{ width: 240 }}>
      <Input label="Your rate" placeholder="0" />
    </div>
  ),
  "time-input": () => (
    <div style={{ width: 180 }}>
      <TimeInput label="Start time" />
    </div>
  ),
  tokenizer: () => {
    const Demo = () => {
      const [tokens, setTokens] = useState(["Design", "Sealed"]);
      const [v, setV] = useState("");
      return (
        <div style={{ width: 280 }}>
          <Tokenizer
            tokens={tokens}
            onRemove={(t) => setTokens(tokens.filter((x) => x !== t))}
            value={v}
            onChange={setV}
            onSubmit={(t) => {
              setTokens([...tokens, t]);
              setV("");
            }}
          />
        </div>
      );
    };
    return <Demo />;
  },
  typeahead: () => {
    const Demo = () => {
      const [v, setV] = useState("");
      return (
        <div style={{ width: 240 }}>
          <Typeahead
            value={v}
            onChange={setV}
            placeholder="Find a room"
            options={["Brand refresh", "Landing page", "Product hunt", "Onboarding"]}
          />
        </div>
      );
    };
    return <Demo />;
  },
  badge: () => (
    <Row>
      <Badge label="Invited" />
      <Badge label="Selected" tone="primary" />
      <Badge label="Bid submitted" tone="success" />
      <Badge label="Pending" tone="warning" />
      <Badge label="Revoked" tone="danger" />
      <Badge label="Viewed" tone="outline" />
    </Row>
  ),
  banner: () => (
    <div style={{ width: "100%" }}>
      <Banner tone="primary" title="2 items are running low" description="Invite another bidder before the room closes." />
    </div>
  ),
  "progress-bar": () => (
    <div style={{ width: 240 }}>
      <ProgressBar value={64} label="Uploading brief" />
    </div>
  ),
  skeleton: () => (
    <div style={{ width: 200 }}>
      <Stack gap={8}>
        <Skeleton height={16} />
        <Skeleton height={16} width="70%" />
        <Skeleton circle width={32} height={32} />
      </Stack>
    </div>
  ),
  spinner: () => <Spinner />,
  "status-dot": () => (
    <Row>
      <StatusDot />
      <StatusDot tone="primary" />
      <StatusDot tone="success" />
      <StatusDot tone="warning" />
      <StatusDot tone="danger" />
    </Row>
  ),
  toast: () => (
    <Stack gap={8}>
      <Toast message="Invite sent to 2 bidders" tone="success" />
      <Toast message="This invite expires in 24 hours" tone="warning" />
    </Stack>
  ),
  breadcrumbs: () => (
    <Breadcrumbs items={[{ label: "Rooms", href: "#" }, { label: "Brand refresh" }, { label: "Bids" }]} />
  ),
  pagination: () => {
    const Demo = () => {
      const [p, setP] = useState(2);
      return <Pagination page={p} pageCount={5} onChange={setP} />;
    };
    return <Demo />;
  },
  "side-nav": () => (
    <div style={{ width: 220, height: 240, border: "1px solid var(--border-subtle)", borderRadius: 8, overflow: "hidden" }}>
      <SideNav
        searchable={false}
        items={[
          { label: "Overview", href: "#", active: true },
          { label: "Button", href: "#" },
          { label: "Dialog", href: "#" },
        ]}
      />
    </div>
  ),
  stepper: () => <Stepper current={1} steps={[{ label: "Invite" }, { label: "Review" }, { label: "Award" }]} />,
  "tab-list": () => {
    const Demo = () => {
      const [v, setV] = useState("overview");
      return (
        <TabList
          value={v}
          onChange={setV}
          tabs={[
            { label: "Overview", value: "overview" },
            { label: "Properties", value: "properties" },
          ]}
        />
      );
    };
    return <Demo />;
  },
  "top-nav": () => (
    <div style={{ width: "100%" }}>
      <Nav brand="OpenSeat" items={[{ label: "Dashboard", active: true }, { label: "Job rooms" }]} cta="Post a sealed job" showAvatar />
    </div>
  ),
  "bottom-sheet": () => {
    const Demo = () => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button variant="secondary" onClick={() => setOpen(true)}>
            Open sheet
          </Button>
          <BottomSheet open={open} onClose={() => setOpen(false)} title="Invite a bidder">
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
      return (
        <>
          <Button variant="secondary" onClick={() => setOpen(true)}>
            Open palette
          </Button>
          <CommandPalette
            open={open}
            onClose={() => setOpen(false)}
            items={[
              { label: "Post a sealed job", hint: "N" },
              { label: "Invite a bidder", hint: "I" },
              { label: "Switch theme", hint: "T" },
            ]}
          />
        </>
      );
    };
    return <Demo />;
  },
  "context-menu": () => (
    <ContextMenu items={[{ label: "Open" }, { label: "Duplicate" }, { label: "Delete", danger: true }]}>
      <Card title="Right-click me" meta="Context menu" />
    </ContextMenu>
  ),
  dialog: () => {
    const Demo = () => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button onClick={() => setOpen(true)}>Open dialog</Button>
          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            title="Close this room?"
            footer={
              <>
                <Button variant="ghost" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button variant="danger" onClick={() => setOpen(false)}>
                  Close room
                </Button>
              </>
            }
          >
            <Text>Bidders will no longer be able to submit.</Text>
          </Dialog>
        </>
      );
    };
    return <Demo />;
  },
  "hover-card": () => (
    <Popover trigger={<Button variant="secondary">Preview</Button>}>
      <Text size="sm">Jordan · invited 2 days ago</Text>
    </Popover>
  ),
  popover: () => (
    <Popover trigger={<Button variant="secondary">Open</Button>}>
      <Stack gap={8}>
        <Text size="sm" strong>
          Shipping method
        </Text>
        <Text size="sm" muted>
          Delivered in 5–7 business days
        </Text>
      </Stack>
    </Popover>
  ),
  tooltip: () => (
    <Tooltip label="Post a sealed job">
      <IconButton label="New">
        +
      </IconButton>
    </Tooltip>
  ),
  list: () => (
    <div style={{ width: 320 }}>
      <List
        items={[
          { title: "Brand refresh", description: "Fixed · $2,400", leading: <Avatar initials="BR" /> },
          { title: "Landing page", description: "Hourly · $65/hr", leading: <Avatar initials="LP" /> },
        ]}
      />
    </div>
  ),
  "metadata-list": () => (
    <MetadataList
      items={[
        { label: "Status", value: "Sealed" },
        { label: "Budget", value: "$2,400" },
        { label: "Posted", value: "2 days ago" },
      ]}
    />
  ),
  "overflow-list": () => <OverflowList items={["Design", "Copy", "Motion", "Research", "Brand"]} max={3} />,
  table: () => (
    <div style={{ width: "100%" }}>
      <Table
        columns={[
          { key: "item", header: "Item" },
          { key: "available", header: "Available" },
          { key: "tags", header: "Tags" },
        ]}
        rows={[
          { item: "Butter Croissant", available: 64, tags: "Fresh" },
          { item: "Pancakes", available: 38, tags: "Popular" },
          { item: "Belgian Waffle", available: 51, tags: "New" },
        ]}
      />
    </div>
  ),
  "tree-list": () => (
    <TreeList
      items={[
        { label: "Rooms", children: [{ label: "Brand refresh" }, { label: "Landing page" }] },
        { label: "People", children: [{ label: "Jordan" }, { label: "Alex" }] },
      ]}
    />
  ),
  chat: () => {
    const Demo = () => {
      const [v, setV] = useState("");
      return (
        <Chat>
          <ChatSystemMessage>Order #1043 · Placed</ChatSystemMessage>
          <ChatMessage author="Astryx" initials="AX" body="Can you show me the full details?" time="1:59 pm" />
          <ChatMessage own body="Here’s everything I have on order #1043." />
          <ChatComposer value={v} onChange={setV} onSend={() => setV("")} />
        </Chat>
      );
    };
    return <Demo />;
  },
  "visually-hidden": () => (
    <Row>
      <Button>
        Save
        <VisuallyHidden> draft to this room</VisuallyHidden>
      </Button>
      <Text size="sm" muted>
        Extra text is announced, not shown.
      </Text>
    </Row>
  ),
  tokens: () => (
    <Text size="sm" muted>
      Open the Tokens page in the top nav for the live ramp.
    </Text>
  ),
};

export function OverviewDemos() {
  return (
    <>
      <Preview label="Button">
        {DEMOS.button()}
      </Preview>
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
    </>
  );
}
