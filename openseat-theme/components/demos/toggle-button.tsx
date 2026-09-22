"use client";

import { useState } from "react";
import { Icon } from "@astryxdesign/core/Icon";
import { ToggleButton, ToggleButtonGroup } from "@astryxdesign/core/ToggleButton";
import { Stack } from "@astryxdesign/core/Stack";
import { Caption, Examples, Preview, Row } from "./shared";

export default function ToggleButtonDemo() {
  const [favorited, setFavorited] = useState(false);
  const [bookmarked, setBookmarked] = useState(true);
  const [muted, setMuted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [filters, setFilters] = useState<string[]>([]);
  const [toolbar, setToolbar] = useState<Record<string, boolean>>({
    search: true,
    copy: false,
    info: true,
  });
  const [reactions, setReactions] = useState<Record<string, boolean>>({
    check: false,
    warning: false,
    copy: true,
  });

  return (
    <Examples>
      <Preview label="Showcase">
        <Row>
          <ToggleButton
            label="Favorite"
            icon={<Icon icon="check" />}
            pressedIcon={<Icon icon="success" />}
            isPressed={favorited}
            onPressedChange={setFavorited}
            isIconOnly
          />
          <ToggleButton
            label="Bookmark"
            icon={<Icon icon="copy" />}
            pressedIcon={<Icon icon="checkDouble" />}
            isPressed={bookmarked}
            onPressedChange={setBookmarked}
            isIconOnly
          />
          <ToggleButton
            label="Notifications"
            icon={<Icon icon="info" />}
            pressedIcon={<Icon icon="eyeSlash" />}
            isPressed={muted}
            onPressedChange={setMuted}
          >
            Notifications
          </ToggleButton>
        </Row>
      </Preview>
      <Preview label="States">
        <Stack gap={4}>
          <Stack gap={1}>
            <Caption>Default</Caption>
            <Row>
              <ToggleButton label="Favorite" icon={<Icon icon="check" />} isPressed={false} onPressedChange={() => {}} />
              <ToggleButton
                label="Favorite"
                icon={<Icon icon="check" />}
                isPressed={false}
                onPressedChange={() => {}}
                isIconOnly
              />
            </Row>
          </Stack>
          <Stack gap={1}>
            <Caption>Pressed</Caption>
            <Row>
              <ToggleButton
                label="Favorite"
                icon={<Icon icon="check" />}
                pressedIcon={<Icon icon="success" />}
                isPressed
                onPressedChange={() => {}}
              />
              <ToggleButton
                label="Favorite"
                icon={<Icon icon="check" />}
                pressedIcon={<Icon icon="success" />}
                isPressed
                onPressedChange={() => {}}
                isIconOnly
              />
            </Row>
          </Stack>
          <Stack gap={1}>
            <Caption>Disabled</Caption>
            <Row>
              <ToggleButton label="Favorite" icon={<Icon icon="check" />} isPressed={false} onPressedChange={() => {}} isDisabled />
              <ToggleButton
                label="Favorite"
                icon={<Icon icon="check" />}
                isPressed={false}
                onPressedChange={() => {}}
                isIconOnly
                isDisabled
              />
            </Row>
          </Stack>
          <Stack gap={1}>
            <Caption>Loading</Caption>
            <Row>
              <ToggleButton label="Favorite" icon={<Icon icon="check" />} isPressed={false} onPressedChange={() => {}} isLoading />
              <ToggleButton
                label="Favorite"
                icon={<Icon icon="check" />}
                isPressed={false}
                onPressedChange={() => {}}
                isIconOnly
                isLoading
              />
            </Row>
          </Stack>
        </Stack>
      </Preview>
      <Preview label="Label">
        <Stack gap={4}>
          <Stack gap={1}>
            <Caption>Standalone with label and icon</Caption>
            <ToggleButton
              label="Visible"
              icon={<Icon icon="search" />}
              pressedIcon={<Icon icon="eyeSlash" />}
              isPressed={visible}
              onPressedChange={setVisible}
            >
              {visible ? "Visible" : "Hidden"}
            </ToggleButton>
          </Stack>
          <Stack gap={1}>
            <Caption>Labeled group — filter toolbar</Caption>
            <ToggleButtonGroup type="multiple" value={filters} onChange={setFilters} label="Filters">
              <ToggleButton value="filter" label="Filter" icon={<Icon icon="funnel" />}>
                Filter
              </ToggleButton>
              <ToggleButton value="nearby" label="Nearby" icon={<Icon icon="search" />}>
                Nearby
              </ToggleButton>
            </ToggleButtonGroup>
          </Stack>
        </Stack>
      </Preview>
      <Preview label="Icon swap">
        <Stack gap={2}>
          <Caption>Swap the glyph when the control is pressed.</Caption>
          <Row>
            <ToggleButton
              label="Favorite"
              icon={<Icon icon="check" />}
              pressedIcon={<Icon icon="success" />}
              isPressed={favorited}
              onPressedChange={setFavorited}
              isIconOnly
            />
            <ToggleButton
              label="Bookmark"
              icon={<Icon icon="copy" />}
              pressedIcon={<Icon icon="checkDouble" />}
              isPressed={bookmarked}
              onPressedChange={setBookmarked}
              isIconOnly
            />
            <ToggleButton
              label={muted ? "Unmute notifications" : "Mute notifications"}
              icon={<Icon icon="info" />}
              pressedIcon={<Icon icon="eyeSlash" />}
              isPressed={muted}
              onPressedChange={setMuted}
              isIconOnly
            />
          </Row>
        </Stack>
      </Preview>
      <Preview label="Color">
        <Stack gap={4}>
          <Stack gap={1}>
            <Caption>Toolbar</Caption>
            <Row>
              <ToggleButton
                label="Search"
                icon={<Icon icon="search" color="secondary" />}
                pressedIcon={<Icon icon="search" color="accent" />}
                isPressed={toolbar.search}
                onPressedChange={() => setToolbar((prev) => ({ ...prev, search: !prev.search }))}
                isIconOnly
              />
              <ToggleButton
                label="Copy"
                icon={<Icon icon="copy" color="secondary" />}
                pressedIcon={<Icon icon="copy" color="accent" />}
                isPressed={toolbar.copy}
                onPressedChange={() => setToolbar((prev) => ({ ...prev, copy: !prev.copy }))}
                isIconOnly
              />
              <ToggleButton
                label="Info"
                icon={<Icon icon="info" color="secondary" />}
                pressedIcon={<Icon icon="info" color="accent" />}
                isPressed={toolbar.info}
                onPressedChange={() => setToolbar((prev) => ({ ...prev, info: !prev.info }))}
                isIconOnly
              />
            </Row>
          </Stack>
          <Stack gap={1}>
            <Caption>Reactions</Caption>
            <Row>
              <ToggleButton
                label="Done"
                icon={<Icon icon="check" color="secondary" />}
                pressedIcon={<Icon icon="success" color="green" />}
                isPressed={reactions.check}
                onPressedChange={() => setReactions((prev) => ({ ...prev, check: !prev.check }))}
                isIconOnly
              />
              <ToggleButton
                label="Flag"
                icon={<Icon icon="warning" color="secondary" />}
                pressedIcon={<Icon icon="warning" color="yellow" />}
                isPressed={reactions.warning}
                onPressedChange={() => setReactions((prev) => ({ ...prev, warning: !prev.warning }))}
                isIconOnly
              />
              <ToggleButton
                label="Save"
                icon={<Icon icon="copy" color="secondary" />}
                pressedIcon={<Icon icon="copy" color="blue" />}
                isPressed={reactions.copy}
                onPressedChange={() => setReactions((prev) => ({ ...prev, copy: !prev.copy }))}
                isIconOnly
              />
            </Row>
          </Stack>
        </Stack>
      </Preview>
    </Examples>
  );
}
