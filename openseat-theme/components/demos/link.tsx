"use client";

import { Link } from "@astryxdesign/core/Link";
import { Stack } from "@astryxdesign/core/Stack";
import { Text } from "@astryxdesign/core/Text";
import { Caption, Examples, Preview, Row } from "./shared";

export default function LinkDemo() {
  return (
    <Examples>
      <Preview label="Showcase">
        <Link href="#docs" isStandalone>
          Documentation
        </Link>
      </Preview>
      <Preview label="Inline">
        <Text>
          Read the <Link href="#docs">documentation</Link> for more information about using OpenSeat
          components.
        </Text>
      </Preview>
      <Preview label="External">
        <Stack gap={2}>
          <Link href="https://astryx.atmeta.com/" isExternalLink isStandalone>
            OpenSeat docs
          </Link>
          <Link href="https://react.dev/" isExternalLink isStandalone>
            React documentation
          </Link>
          <Link href="https://github.com/" isExternalLink hasUnderline isStandalone>
            GitHub
          </Link>
        </Stack>
      </Preview>
      <Preview label="With tooltip">
        <Row>
          <Link href="#settings" tooltip="Configure your account settings" isStandalone>
            Settings
          </Link>
          <Link href="#profile" tooltip="View and edit your profile" isStandalone>
            Profile
          </Link>
          <Link href="#help" tooltip="Get help and support" color="secondary" isStandalone>
            Help
          </Link>
        </Row>
      </Preview>
      <Preview label="Colors">
        <Row>
          <Link href="#primary" isStandalone>
            Primary
          </Link>
          <Link href="#secondary" color="secondary" isStandalone>
            Secondary
          </Link>
        </Row>
      </Preview>
      <Preview label="In supporting copy">
        <Caption>
          Need more context? Open the <Link href="#docs">usage notes</Link>.
        </Caption>
      </Preview>
    </Examples>
  );
}
