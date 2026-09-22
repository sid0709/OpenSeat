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
      { slug: "button", title: "Button", description: "The single-action control.", importName: "Button" },
      { slug: "button-group", title: "Button Group", description: "Related Buttons joined into one cluster.", importName: "ButtonGroup" },
      { slug: "icon-button", title: "Icon Button", description: "A button whose only content is an icon.", importName: "IconButton" },
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
      { slug: "app-shell", title: "App Shell", description: "Top-level page frame — nav, optional rail, content.", importName: "AppShell" },
      { slug: "aspect-ratio", title: "Aspect Ratio", description: "Keeps children at a fixed width-to-height ratio.", importName: "AspectRatio" },
      { slug: "divider", title: "Divider", description: "A hairline rule between regions.", importName: "Divider" },
      { slug: "form-layout", title: "Form Layout", description: "Vertical stack of fields with shared spacing.", importName: "FormLayout" },
      { slug: "grid", title: "Grid", description: "A fixed-column grid.", importName: "Grid" },
      { slug: "layout", title: "Layout", description: "Header, content, footer, and panel slots.", importName: "Layout" },
      { slug: "section", title: "Section", description: "A titled block of content.", importName: "Section" },
      { slug: "stack", title: "Stack", description: "A vertical or horizontal gapped column.", importName: "Stack" },
      { slug: "resize-handle", title: "Resize Handle", description: "A draggable divider between two panes.", importName: "ResizeHandle" },
      { slug: "scrollable-area", title: "Scrollable Area", description: "A region that scrolls when content overflows.", importName: "ScrollableArea" },
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
      { slug: "carousel", title: "Carousel", description: "A horizontally paged set of slides.", importName: "Carousel" },
      { slug: "collapsible", title: "Collapsible", description: "A disclosure that shows and hides a region.", importName: "Collapsible" },
    ],
  },
  {
    category: "Data input",
    icon: "search",
    items: [
      { slug: "calendar", title: "Calendar", description: "A month grid for choosing a date.", importName: "Calendar" },
      { slug: "checkbox", title: "Checkbox", description: "A binary choice in a form.", importName: "CheckboxInput" },
      { slug: "date-input", title: "Date Input", description: "A date field on the type scale.", importName: "DateInput" },
      { slug: "field", title: "Field", description: "Label above, never floating inside the box.", importName: "Field" },
      { slug: "file-input", title: "File Input", description: "A drop zone for a file.", importName: "FileInput" },
      { slug: "number-input", title: "Number Input", description: "A numeric field.", importName: "NumberInput" },
      { slug: "radio", title: "Radio", description: "One choice from a short closed set.", importName: "RadioList" },
      { slug: "select", title: "Selector", description: "A searchable selector.", importName: "Selector" },
      { slug: "slider", title: "Slider", description: "A continuous numeric range.", importName: "Slider" },
      { slug: "switch", title: "Switch", description: "An immediate on/off setting.", importName: "Switch" },
      { slug: "text-area", title: "Text Area", description: "Multi-line text input.", importName: "TextArea" },
      { slug: "text-input", title: "Text Input", description: "The default single-line field.", importName: "TextInput" },
      { slug: "time-input", title: "Time Input", description: "A time field.", importName: "TimeInput" },
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
      { slug: "toast", title: "Toast", description: "A brief confirmation of an action just taken.", importName: "Toast" },
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
      { slug: "table", title: "Table", description: "Tabular data with a header row.", importName: "Table" },
      { slug: "tree-list", title: "Tree List", description: "A nested hierarchy.", importName: "TreeList" },
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
