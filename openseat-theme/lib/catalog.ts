import type { IconName } from "@astryxdesign/core/Icon";

export type CatalogItem = {
  slug: string;
  title: string;
  description: string;
  importName: string;
};

export type CatalogGroup = {
  category: string;
  icon: IconName;
  items: CatalogItem[];
};

export const CATALOG: CatalogGroup[] = [
  {
    category: "Foundations",
    icon: "wrench",
    items: [
      {
        slug: "tokens",
        title: "Tokens",
        description: "OpenSeat theme primitives — Meta blue accent, system fonts, space, radius.",
        importName: "tokens",
      },
    ],
  },
  {
    category: "Action",
    icon: "check",
    items: [
      { slug: "button", title: "Button", description: "Primary, outline, and pill. Sizes are sm, md, and lg.", importName: "Button" },
      { slug: "button-group", title: "Button Group", description: "Joined actions, including a fully round pill group.", importName: "ButtonGroup" },
      { slug: "icon-button", title: "Icon Button", description: "Icon-only actions, including a circular pill.", importName: "IconButton" },
      { slug: "link", title: "Link", description: "Navigation, never an action.", importName: "Link" },
      { slug: "dropdown-menu", title: "Dropdown Menu", description: "A trigger-anchored list of actions.", importName: "DropdownMenu" },
      { slug: "more-menu", title: "More Menu", description: "The overflow trigger variant of Menu.", importName: "MoreMenu" },
      { slug: "segmented-control", title: "Segmented Control", description: "A closed set of mutually exclusive views.", importName: "SegmentedControl" },
      { slug: "toggle-button", title: "Toggle Button", description: "A binary on/off control shaped like a Button.", importName: "ToggleButton" },
      { slug: "toggle-button-group", title: "Toggle Button Group", description: "Independent toggles that share one group.", importName: "ToggleButtonGroup" },
      { slug: "toolbar", title: "Toolbar", description: "A row of related controls.", importName: "Toolbar" },
    ],
  },
  {
    category: "Layout",
    icon: "viewColumns",
    items: [
      { slug: "app-shell", title: "App Shell", description: "The product frame — top nav, side nav, and a content area that turns into a mobile drawer by breakpoint.", importName: "AppShell" },
      { slug: "aspect-ratio", title: "Aspect Ratio", description: "Keeps media at a fixed shape at any width — covers, heroes, avatars.", importName: "AspectRatio" },
      { slug: "divider", title: "Divider", description: "Subtle or strong rules, with labels, vertical, and full-bleed.", importName: "Divider" },
      { slug: "form-layout", title: "Form Layout", description: "Field spacing and rows, plus responsive one- to two-column forms.", importName: "FormLayout" },
      { slug: "grid", title: "Grid", description: "A responsive 12-track grid — spans, order, and visibility per tier — plus Astryx’s intrinsic Grid.", importName: "GridSystem" },
      { slug: "layout", title: "Layout", description: "Header, footer, start and end panels around scrolling content.", importName: "Layout" },
      { slug: "section", title: "Section", description: "Surfaces, padding, and dividers for grouping content.", importName: "Section" },
      { slug: "stack", title: "Stack", description: "Gapped rows and columns, plus ResponsiveStack that turns a column into a row by tier.", importName: "Stack" },
      { slug: "resize-handle", title: "Resize Handle", description: "Drag to size panes — pixels or percent, collapsible, with snap points.", importName: "ResizeHandle" },
      { slug: "scrollable-area", title: "Scrollable Area", description: "Contained scrolling on one or both axes, for lists, rails, and wide tables.", importName: "ScrollableArea" },
    ],
  },
  {
    category: "Content",
    icon: "copy",
    items: [
      { slug: "avatar", title: "Avatar", description: "A face or initials for a person.", importName: "Avatar" },
      { slug: "blockquote", title: "Blockquote", description: "A quoted passage set off from surrounding copy.", importName: "Blockquote" },
      { slug: "citation", title: "Citation", description: "An attribution chip for a referenced source.", importName: "Citation" },
      { slug: "code", title: "Code", description: "Inline monospace fragment.", importName: "Text" },
      { slug: "code-block", title: "Code Block", description: "A multi-line, copyable code sample.", importName: "CodeBlock" },
      { slug: "empty-state", title: "Empty State", description: "Calm and specific — says what will fill this space.", importName: "EmptyState" },
      { slug: "heading", title: "Heading", description: "Semantic heading, sized by the type scale.", importName: "Heading" },
      { slug: "icon", title: "Icon", description: "A sizing wrapper around a semantic glyph.", importName: "Icon" },
      { slug: "kbd", title: "Kbd", description: "A keyboard key, for shortcuts.", importName: "Kbd" },
      { slug: "markdown", title: "Markdown", description: "Paragraphs, bold, italic, and inline code.", importName: "Markdown" },
      { slug: "text", title: "Text", description: "Body copy from the type scale.", importName: "Text" },
      { slug: "thumbnail", title: "Thumbnail", description: "A small image preview with a placeholder.", importName: "Thumbnail" },
      { slug: "timestamp", title: "Timestamp", description: "A point in time, relative or absolute.", importName: "Timestamp" },
      { slug: "token", title: "Token", description: "A removable unit of input — a filter, a tag.", importName: "Token" },
    ],
  },
  {
    category: "Container",
    icon: "menu",
    items: [
      { slug: "card", title: "Card", description: "A contained block of related content.", importName: "Card" },
      { slug: "carousel", title: "Carousel", description: "Paged slides with dots, at sm, md, and lg.", importName: "Carousel" },
      { slug: "collapsible", title: "Collapsible", description: "A disclosure that shows and hides a region.", importName: "Collapsible" },
    ],
  },
  {
    category: "Data input",
    icon: "search",
    items: [
      { slug: "calendar", title: "Calendar", description: "A month grid or a weekly schedule, at sm, md, and lg.", importName: "Calendar" },
      { slug: "checkbox", title: "Checkbox", description: "A binary choice in a form.", importName: "CheckboxInput" },
      { slug: "date-input", title: "Date Input", description: "A date field. Sizes are sm, md, and lg. Default is md.", importName: "DateInput" },
      { slug: "field", title: "Field", description: "Label above, never floating inside the box.", importName: "Field" },
      { slug: "file-input", title: "File Input", description: "A drop well for a file.", importName: "FileInput" },
      { slug: "number-input", title: "Number Input", description: "A numeric field.", importName: "NumberInput" },
      { slug: "radio", title: "Radio", description: "One choice from a short closed set.", importName: "RadioList" },
      { slug: "select", title: "Selector", description: "A searchable selector.", importName: "Selector" },
      { slug: "rating", title: "Rating", description: "A star score, from read-only to a ten-mark scale.", importName: "Rating" },
      { slug: "slider", title: "Slider", description: "A continuous numeric range.", importName: "Slider" },
      { slug: "switch", title: "Switch", description: "An immediate on/off setting.", importName: "Switch" },
      { slug: "text-area", title: "Text Area", description: "A bordered multi-line field. Sizes are sm, md, and lg.", importName: "TextArea" },
      { slug: "text-input", title: "Text Input", description: "A bordered field. Sizes are sm, md, and lg. Default is md.", importName: "TextInput" },
      { slug: "time-input", title: "Time Input", description: "A clock face — 12-hour, 24-hour, steps, and sm to lg.", importName: "TimeInput" },
      { slug: "tokenizer", title: "Tokenizer", description: "Tokens plus a field for adding more.", importName: "Tokenizer" },
      { slug: "typeahead", title: "Typeahead", description: "Filter a list as you type.", importName: "Typeahead" },
    ],
  },
  {
    category: "Feedback & status",
    icon: "info",
    items: [
      { slug: "badge", title: "Badge", description: "A status label. Always pairs a color with a word.", importName: "Badge" },
      { slug: "banner", title: "Banner", description: "A page- or section-level message.", importName: "Banner" },
      { slug: "progress-bar", title: "Progress Bar", description: "Determinate progress for a known-length task.", importName: "ProgressBar" },
      { slug: "skeleton", title: "Skeleton", description: "A loading placeholder shaped like the content.", importName: "Skeleton" },
      { slug: "spinner", title: "Spinner", description: "An indeterminate loading indicator.", importName: "Spinner" },
      { slug: "status-dot", title: "Status Dot", description: "A standalone colored dot for a status legend.", importName: "StatusDot" },
      { slug: "toast", title: "Toast", description: "A confirmation with a tone, a title, and an optional action.", importName: "Toast" },
    ],
  },
  {
    category: "Navigation",
    icon: "chevronRight",
    items: [
      { slug: "breadcrumbs", title: "Breadcrumbs", description: "The path from the product root to here.", importName: "Breadcrumbs" },
      { slug: "pagination", title: "Pagination", description: "Move between pages of a collection.", importName: "Pagination" },
      { slug: "side-nav", title: "Side Nav", description: "The durable left rail of a product.", importName: "SideNav" },
      { slug: "stepper", title: "Stepper", description: "A linear sequence of steps.", importName: "Stepper" },
      { slug: "tab-list", title: "Tab List", description: "Peer views of the same object.", importName: "TabList" },
      { slug: "top-nav", title: "Top Nav", description: "The product bar.", importName: "TopNav" },
    ],
  },
  {
    category: "Overlay",
    icon: "moreHorizontal",
    items: [
      { slug: "bottom-sheet", title: "Bottom Sheet", description: "A focused overlay that rises from the bottom.", importName: "BottomSheet" },
      { slug: "command-palette", title: "Command Palette", description: "Search and run an action from the keyboard.", importName: "CommandPalette" },
      { slug: "context-menu", title: "Context Menu", description: "A menu anchored to a right-click.", importName: "ContextMenu" },
      { slug: "dialog", title: "Dialog", description: "A focused, blocking overlay for a single decision.", importName: "Dialog" },
      { slug: "hover-card", title: "Hover Card", description: "A rich preview on hover.", importName: "HoverCard" },
      { slug: "popover", title: "Popover", description: "A non-blocking floating panel.", importName: "Popover" },
      { slug: "tooltip", title: "Tooltip", description: "A short label for an unlabeled control.", importName: "Tooltip" },
    ],
  },
  {
    category: "Table & list",
    icon: "viewColumns",
    items: [
      { slug: "list", title: "List", description: "A vertical stack of rows.", importName: "List" },
      { slug: "metadata-list", title: "Metadata List", description: "Label / value pairs.", importName: "MetadataList" },
      { slug: "overflow-list", title: "Overflow List", description: "Shows a few items, then a remainder count.", importName: "OverflowList" },
      { slug: "table", title: "Table", description: "Rows you can stripe, tighten, select, or leave empty.", importName: "Table" },
      { slug: "timeline", title: "Timeline", description: "Events on a rail, in cards, alternating, or across.", importName: "Timeline" },
      { slug: "tree-list", title: "Tree", description: "A hierarchy you can filter, select, and restyle.", importName: "Tree" },
    ],
  },
  {
    category: "Chat",
    icon: "microphone",
    items: [
      { slug: "chat", title: "Chat", description: "Messages, a system line, and a composer.", importName: "ChatLayout" },
    ],
  },
  {
    category: "Utility",
    icon: "eyeSlash",
    items: [
      { slug: "visually-hidden", title: "Visually Hidden", description: "Content for assistive tech only.", importName: "VisuallyHidden" },
    ],
  },
];

export const ALL_ITEMS = CATALOG.flatMap((g) => g.items);

export const COMPONENT_ITEMS = ALL_ITEMS.filter((item) => item.slug !== "tokens");

export function findItem(slug: string) {
  return ALL_ITEMS.find((i) => i.slug === slug);
}

export function itemHref(slug: string) {
  return slug === "tokens" ? "/tokens" : `/components/${slug}`;
}
