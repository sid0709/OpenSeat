"use client";

import { Avatar, AvatarStatusDot } from "@astryxdesign/core/Avatar";
import { AvatarGroup } from "@astryxdesign/core/AvatarGroup";
import { Examples, Preview, Row } from "./shared";

export default function AvatarDemo() {
  return (
    <Examples>
      <Preview label="Sizes">
        <Row>
          <Avatar name="Jordan Miles" size="xsm" />
          <Avatar name="Jordan Miles" size="sm" />
          <Avatar name="Alex Rivera" size="md" />
          <Avatar name="Dana Kim" size="lg" />
          <Avatar name="Riley Chen" size="xl" />
        </Row>
      </Preview>
      <Preview label="Shapes">
        <Row>
          <Avatar name="Jordan Miles" shape="circle" />
          <Avatar name="Alex Rivera" shape="rounded" />
          <Avatar name="Dana Kim" shape="square" />
        </Row>
      </Preview>
      <Preview label="Status">
        <Row>
          <Avatar name="Jordan Miles" status={<AvatarStatusDot variant="success" label="Online" />} />
          <Avatar name="Alex Rivera" status={<AvatarStatusDot variant="neutral" label="Away" />} />
          <Avatar name="Dana Kim" status={<AvatarStatusDot variant="error" label="Busy" />} />
        </Row>
      </Preview>
      <Preview label="Group">
        <AvatarGroup>
          <Avatar name="Jordan Miles" />
          <Avatar name="Alex Rivera" />
          <Avatar name="Dana Kim" />
        </AvatarGroup>
      </Preview>
    </Examples>
  );
}
