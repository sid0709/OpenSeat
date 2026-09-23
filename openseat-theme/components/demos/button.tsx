"use client";

import { Badge } from "@astryxdesign/core/Badge";
import { Button } from "@astryxdesign/core/Button";
import { Icon } from "@astryxdesign/core/Icon";
import { Stack } from "@astryxdesign/core/Stack";
import { Caption, Examples, Preview, Row } from "./shared";

const VARIANTS = [
  { variant: "primary" as const, label: "Primary" },
  { variant: "secondary" as const, label: "Secondary" },
  { variant: "ghost" as const, label: "Ghost" },
  { variant: "destructive" as const, label: "Destructive" },
];

const SIZES = [
  { size: "sm" as const, label: "Small" },
  { size: "md" as const, label: "Medium" },
  { size: "lg" as const, label: "Large" },
];

export default function ButtonDemo() {
  return (
    <Examples>
      <Preview label="Showcase">
        <Row>
          {VARIANTS.map(({ variant, label }) => (
            <Button key={variant} label={label} variant={variant} />
          ))}
        </Row>
      </Preview>
      <Preview label="Variants">
        <Stack gap={4}>
          <Caption>All 4 variants in default, disabled, and loading states.</Caption>
          <Stack gap={1}>
            <Caption>Default</Caption>
            <Row>
              {VARIANTS.map(({ variant, label }) => (
                <Button key={variant} label={label} variant={variant} />
              ))}
            </Row>
          </Stack>
          <Stack gap={1}>
            <Caption>Disabled</Caption>
            <Row>
              {VARIANTS.map(({ variant, label }) => (
                <Button key={variant} label={label} variant={variant} isDisabled />
              ))}
            </Row>
          </Stack>
          <Stack gap={1}>
            <Caption>Loading</Caption>
            <Row>
              {VARIANTS.map(({ variant, label }) => (
                <Button key={variant} label={label} variant={variant} isLoading />
              ))}
            </Row>
          </Stack>
        </Stack>
      </Preview>
      <Preview label="Sizes">
        <Stack gap={4}>
          <Caption>Small in dense UIs, medium for most cases, large for prominent CTAs.</Caption>
          <Stack gap={1}>
            <Caption>Primary</Caption>
            <Row>
              {SIZES.map(({ size, label }) => (
                <Button key={size} label={label} variant="primary" size={size} />
              ))}
            </Row>
          </Stack>
          <Stack gap={1}>
            <Caption>Secondary</Caption>
            <Row>
              {SIZES.map(({ size, label }) => (
                <Button key={size} label={label} variant="secondary" size={size} />
              ))}
            </Row>
          </Stack>
        </Stack>
      </Preview>
      <Preview label="With icon">
        <Stack gap={3}>
          <Caption>A leading icon that reinforces the label.</Caption>
          <Row>
            <Button label="New item" variant="primary" icon={<Icon icon="check" />} />
            <Button label="Edit" variant="secondary" icon={<Icon icon="wrench" />} />
            <Button label="Download" variant="ghost" icon={<Icon icon="arrowDown" />} />
            <Button label="Delete" variant="destructive" icon={<Icon icon="error" />} />
          </Row>
        </Stack>
      </Preview>
      <Preview label="End content">
        <Stack gap={3}>
          <Caption>Trailing badges for counts or status.</Caption>
          <Row>
            <Button label="Messages" variant="primary" endContent={<Badge variant="info" label={3} />} />
            <Button label="Notifications" variant="secondary" endContent={<Badge variant="warning" label={12} />} />
            <Button label="Updates" variant="ghost" endContent={<Badge variant="neutral" label="New" />} />
          </Row>
        </Stack>
      </Preview>
      <Preview label="Floating">
        <Stack gap={3}>
          <Caption>Raised with elevation=&quot;med&quot; for buttons that hover above content.</Caption>
          <Row>
            {VARIANTS.map(({ variant, label }) => (
              <Button
                key={variant}
                label={label}
                variant={variant}
                icon={<Icon icon="check" />}
                elevation="med"
              />
            ))}
          </Row>
        </Stack>
      </Preview>
      <Preview label="Full width">
        <Button label="Continue" variant="primary" width="100%" />
      </Preview>
    </Examples>
  );
}
