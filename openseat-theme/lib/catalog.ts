export type CatalogItem = {
  slug: string;
  title: string;
  description: string;
};

export type CatalogGroup = {
  category: string;
  items: CatalogItem[];
};

export const CATALOG: CatalogGroup[] = [
  {
    category: "Foundations",
    items: [
      {
        slug: "tokens",
        title: "Tokens",
        description: "Meta blue primitives and the semantic tokens every component reads.",
      },
    ],
  },
  {
    category: "Action",
    items: [
      { slug: "button", title: "Button", description: "The single-action control. One primary Button per screen." },
      { slug: "button-group", title: "Button Group", description: "Related Buttons joined into one cluster." },
      { slug: "icon-button", title: "Icon Button", description: "A button whose only content is an icon. Always pass a label." },
      { slug: "link", title: "Link", description: "Navigation, never an action — use Button for actions." },
      { slug: "dropdown-menu", title: "Dropdown Menu", description: "A trigger-anchored list of actions." },
      { slug: "more-menu", title: "More Menu", description: "The overflow ··· trigger variant of Menu." },
      { slug: "segmented-control", title: "Segmented Control", description: "A closed set of mutually exclusive views." },
      { slug: "toggle-button", title: "Toggle Button", description: "A binary on/off control shaped like a Button." },
      { slug: "toggle-button-group", title: "Toggle Button Group", description: "Independent toggles that share one value array." },
      { slug: "toolbar", title: "Toolbar", description: "A row of related controls." },
    ],
  },
  {
    category: "Layout",
    items: [
      { slug: "app-shell", title: "App Shell", description: "Top-level page frame — nav, optional rail, content." },
      { slug: "aspect-ratio", title: "Aspect Ratio", description: "Keeps children at a fixed width-to-height ratio." },
      { slug: "divider", title: "Divider", description: "A hairline rule between regions." },
      { slug: "form-layout", title: "Form Layout", description: "Vertical stack of Fields with shared spacing." },
      { slug: "grid", title: "Grid", description: "A fixed-column grid for card walls and swatch tables." },
      { slug: "layout", title: "Layout", description: "The general flex primitive." },
      { slug: "section", title: "Section", description: "A titled block of content." },
      { slug: "stack", title: "Stack", description: "A Layout defaulting to a vertical, gapped column." },
      { slug: "resize-handle", title: "Resize Handle", description: "A draggable divider between two panes." },
      { slug: "scrollable-area", title: "Scrollable Area", description: "A region that scrolls when content overflows." },
    ],
  },
  {
    category: "Content",
    items: [
      { slug: "avatar", title: "Avatar", description: "A fixed palette rotation by initials — never a random hue." },
      { slug: "blockquote", title: "Blockquote", description: "A quoted passage set off from surrounding copy." },
      { slug: "citation", title: "Citation", description: "An attribution line for a Blockquote or referenced fact." },
      { slug: "code", title: "Code", description: "Inline monospace fragment." },
      { slug: "code-block", title: "Code Block", description: "A multi-line, copyable code sample." },
      { slug: "empty-state", title: "Empty State", description: "Calm and specific — always says what will fill this space." },
      { slug: "heading", title: "Heading", description: "Semantic heading tag, sized by the type scale." },
      { slug: "icon", title: "Icon", description: "A sizing wrapper around an inline SVG glyph." },
      { slug: "kbd", title: "Kbd", description: "A keyboard key, for shortcuts." },
      { slug: "markdown", title: "Markdown", description: "Paragraphs, bold, italic, and inline code." },
      { slug: "text", title: "Text", description: "Body copy at one of the three reading sizes." },
      { slug: "thumbnail", title: "Thumbnail", description: "A small image preview with a placeholder." },
      { slug: "timestamp", title: "Timestamp", description: "A point in time, relative or absolute." },
      { slug: "token", title: "Token", description: "A removable unit of input — a filter, a tag." },
    ],
  },
  {
    category: "Container",
    items: [
      { slug: "card", title: "Card", description: "A contained block of related content." },
      { slug: "carousel", title: "Carousel", description: "A horizontally paged set of slides." },
      { slug: "collapsible", title: "Collapsible", description: "A disclosure that shows and hides a region." },
    ],
  },
  {
    category: "Data input",
    items: [
      { slug: "calendar", title: "Calendar", description: "A month grid for choosing a date." },
      { slug: "checkbox", title: "Checkbox", description: "A binary choice in a form." },
      { slug: "date-input", title: "Date Input", description: "A native date field on the type scale." },
      { slug: "field", title: "Field", description: "Label above, never floating inside the box." },
      { slug: "file-input", title: "File Input", description: "A drop zone for a single file." },
      { slug: "number-input", title: "Number Input", description: "A numeric field." },
      { slug: "radio", title: "Radio", description: "One choice from a short closed set." },
      { slug: "select", title: "Select", description: "A native selector styled to the system." },
      { slug: "slider", title: "Slider", description: "A continuous numeric range." },
      { slug: "switch", title: "Switch", description: "An immediate on/off setting." },
      { slug: "text-area", title: "Text Area", description: "Multi-line text input." },
      { slug: "text-input", title: "Text Input", description: "The default single-line field." },
      { slug: "time-input", title: "Time Input", description: "A native time field." },
      { slug: "tokenizer", title: "Tokenizer", description: "Tokens plus a field for adding more." },
      { slug: "typeahead", title: "Typeahead", description: "Filter a list as you type." },
    ],
  },
  {
    category: "Feedback & status",
    items: [
      { slug: "badge", title: "Badge", description: "A status label. Always pairs a color with a word." },
      { slug: "banner", title: "Banner", description: "A page- or section-level message." },
      { slug: "progress-bar", title: "Progress Bar", description: "Determinate progress for a known-length task." },
      { slug: "skeleton", title: "Skeleton", description: "A loading placeholder shaped like the content." },
      { slug: "spinner", title: "Spinner", description: "An indeterminate loading indicator." },
      { slug: "status-dot", title: "Status Dot", description: "A standalone colored dot for a status legend." },
      { slug: "toast", title: "Toast", description: "A brief confirmation of an action just taken." },
    ],
  },
  {
    category: "Navigation",
    items: [
      { slug: "breadcrumbs", title: "Breadcrumbs", description: "The path from the product root to here." },
      { slug: "pagination", title: "Pagination", description: "Move between pages of a collection." },
      { slug: "side-nav", title: "Side Nav", description: "The durable left rail of a product." },
      { slug: "stepper", title: "Stepper", description: "A linear sequence of steps." },
      { slug: "tab-list", title: "Tab List", description: "Peer views of the same object." },
      { slug: "top-nav", title: "Top Nav", description: "The 48px product bar." },
    ],
  },
  {
    category: "Overlay",
    items: [
      { slug: "bottom-sheet", title: "Bottom Sheet", description: "A focused overlay that rises from the bottom." },
      { slug: "command-palette", title: "Command Palette", description: "Search and run an action from the keyboard." },
      { slug: "context-menu", title: "Context Menu", description: "A menu anchored to a right-click." },
      { slug: "dialog", title: "Dialog", description: "A focused, blocking overlay for a single decision." },
      { slug: "hover-card", title: "Hover Card", description: "A rich preview on hover or click." },
      { slug: "popover", title: "Popover", description: "A non-blocking floating panel." },
      { slug: "tooltip", title: "Tooltip", description: "A short label for an unlabeled control." },
    ],
  },
  {
    category: "Table & list",
    items: [
      { slug: "list", title: "List", description: "A vertical stack of rows." },
      { slug: "metadata-list", title: "Metadata List", description: "Label / value pairs." },
      { slug: "overflow-list", title: "Overflow List", description: "Shows a few items, then a remainder count." },
      { slug: "table", title: "Table", description: "Tabular data with a header row." },
      { slug: "tree-list", title: "Tree List", description: "A nested hierarchy." },
    ],
  },
  {
    category: "Chat",
    items: [
      { slug: "chat", title: "Chat", description: "Messages, a system line, and a composer." },
    ],
  },
  {
    category: "Utility",
    items: [
      { slug: "visually-hidden", title: "Visually Hidden", description: "Content for assistive tech only." },
    ],
  },
];

export const ALL_ITEMS = CATALOG.flatMap((g) => g.items);

export function findItem(slug: string) {
  return ALL_ITEMS.find((i) => i.slug === slug);
}
