"use client";

import { useState } from "react";
import { Icon } from "@astryxdesign/core/Icon";
import { IconButton } from "@astryxdesign/core/IconButton";
import { Stack } from "@astryxdesign/core/Stack";
import { Caption, Examples, Preview, Row } from "./shared";

const VARIANTS = [
  { variant: "primary" as const, label: "Primary" },
  { variant: "secondary" as const, label: "Secondary" },
  { variant: "ghost" as const, label: "Ghost" },
  { variant: "destructive" as const, label: "Destructive" },
];

export default function IconButtonDemo() {
  const [loadingId, setLoadingId] = useState<string | null>(null);

  function handleClick(id: string) {
    setLoadingId(id);
    window.setTimeout(() => setLoadingId(null), 1500);
  }

  return (
    <Examples>
      <Preview label="Showcase">
        <IconButton label="Settings" icon={<Icon icon="wrench" color="inherit" />} />
      </Preview>
      <Preview label="Variants">
        <Row>
          <IconButton label="Search" icon={<Icon icon="search" />} />
          <IconButton label="Settings" icon={<Icon icon="wrench" />} variant="ghost" />
          <IconButton label="More" icon={<Icon icon="moreHorizontal" />} variant="secondary" />
          <IconButton label="Close" icon={<Icon icon="close" />} variant="destructive" />
        </Row>
      </Preview>
      <Preview label="Sizes">
        <Row>
          <IconButton label="Search" size="sm" icon={<Icon icon="search" />} />
          <IconButton label="Search" size="md" icon={<Icon icon="search" />} />
          <IconButton label="Search" size="lg" icon={<Icon icon="search" />} />
        </Row>
      </Preview>
      <Preview label="Action bar">
        <Row>
          <IconButton label="Search" icon={<Icon icon="search" color="inherit" />} variant="ghost" />
          <IconButton label="Copy" icon={<Icon icon="copy" color="inherit" />} variant="ghost" />
          <IconButton label="Info" icon={<Icon icon="info" color="inherit" />} variant="ghost" />
          <IconButton label="Menu" icon={<Icon icon="menu" color="inherit" />} variant="ghost" />
          <IconButton label="Close" icon={<Icon icon="close" color="inherit" />} variant="ghost" />
        </Row>
      </Preview>
      <Preview label="Tooltips">
        <Row>
          <IconButton
            label="Search"
            icon={<Icon icon="search" color="inherit" />}
            variant="ghost"
            tooltip="Search items"
          />
          <IconButton
            label="Copy link"
            icon={<Icon icon="copy" color="inherit" />}
            variant="ghost"
            tooltip="Copy to clipboard"
          />
          <IconButton
            label="More options"
            icon={<Icon icon="moreHorizontal" color="inherit" />}
            variant="ghost"
            tooltip="More options"
          />
        </Row>
      </Preview>
      <Preview label="Loading">
        <Row>
          <IconButton
            label="Copy"
            icon={<Icon icon="copy" color="inherit" />}
            variant="primary"
            isLoading={loadingId === "copy"}
            onClick={() => handleClick("copy")}
          />
          <IconButton
            label="Search"
            icon={<Icon icon="search" color="inherit" />}
            isLoading={loadingId === "search"}
            onClick={() => handleClick("search")}
          />
          <IconButton
            label="Close"
            icon={<Icon icon="close" color="inherit" />}
            variant="ghost"
            isLoading={loadingId === "close"}
            onClick={() => handleClick("close")}
          />
        </Row>
      </Preview>
      <Preview label="Floating">
        <Stack gap={3}>
          <Caption>FABs are usually icon-only — raise one with elevation=&quot;high&quot;.</Caption>
          <Row>
            {VARIANTS.map(({ variant, label }) => (
              <IconButton
                key={variant}
                label={label}
                variant={variant}
                icon={<Icon icon="check" />}
                elevation="high"
              />
            ))}
          </Row>
        </Stack>
      </Preview>
      <Preview label="Disabled">
        <IconButton label="Search" icon={<Icon icon="search" />} isDisabled />
      </Preview>
    </Examples>
  );
}
