"use client";

import { useState } from "react";
import { Clock, TimeInput, displayTime, type FieldSize } from "@openseat/design-system";
import { HStack, Stack } from "@astryxdesign/core/Stack";
import { Caption, Examples, Preview } from "./shared";

const SIZES: FieldSize[] = ["sm", "md", "lg"];
const WORLD = [
  { zone: "America/Los_Angeles", city: "San Francisco" },
  { zone: "Europe/London", city: "London" },
  { zone: "Asia/Tokyo", city: "Tokyo" },
];
const BOOKED = ["10:00", "11:30", "14:00", "14:30"];

export default function TimeInputDemo() {
  const [shared, setShared] = useState("09:30");
  const [dial, setDial] = useState("21:15");
  const [slot, setSlot] = useState("15:00");
  const [precise, setPrecise] = useState("14:05:30");
  const [sizes, setSizes] = useState<Record<FieldSize, string>>({ sm: "08:00", md: "12:30", lg: "18:45" });

  return (
    <Examples>
      <Preview label="One value, five ways in — change any of them">
        <Stack gap={5}>
          <HStack gap={6} wrap="wrap" vAlign="start">
            <TimeInput label="Type or pick" value={shared} onChange={setShared} description="Type digits, use ↑ ↓, or open the list." />
            <TimeInput label="Dropdowns" value={shared} onChange={setShared} variant="select" />
          </HStack>
          <HStack gap={6} wrap="wrap" vAlign="start">
            <TimeInput label="Dial — tap or drag" value={shared} onChange={setShared} variant="dial" />
            <TimeInput label="Wheels" value={shared} onChange={setShared} variant="columns" />
          </HStack>
          <Caption>Current value: {shared} · {displayTime(shared, "12h")}</Caption>
        </Stack>
      </Preview>

      <Preview label="Field with a dial or a slot list in the dropdown">
        <HStack gap={6} wrap="wrap" vAlign="start">
          <TimeInput label="Reminder" value={dial} onChange={setDial} picker="dial" hourCycle="24h" description="24-hour — inner ring is 00 and 13–23." />
          <TimeInput
            label="Interview"
            value={slot}
            onChange={setSlot}
            picker="slots"
            slots={{ start: "09:00", end: "17:00", interval: 30, unavailable: BOOKED }}
          />
        </HStack>
      </Preview>

      <Preview label="Booking slots — taken times are struck through">
        <TimeInput
          label="Pick a time"
          value={slot}
          onChange={setSlot}
          variant="slots"
          slots={{ start: "09:00", end: "19:00", interval: 30, unavailable: BOOKED, grouped: true }}
        />
      </Preview>

      <Preview label="Seconds, sizes, and states">
        <Stack gap={5}>
          <HStack gap={6} wrap="wrap" vAlign="start">
            <TimeInput label="Timestamp" value={precise} onChange={setPrecise} hourCycle="24h" withSeconds />
            <TimeInput label="Every 15 minutes" value={shared} onChange={setShared} minuteStep={15} />
          </HStack>
          <HStack gap={6} wrap="wrap" vAlign="end">
            {SIZES.map((size) => (
              <TimeInput key={size} size={size} label={size} value={sizes[size]} onChange={(value) => setSizes((c) => ({ ...c, [size]: value }))} />
            ))}
          </HStack>
          <HStack gap={6} wrap="wrap" vAlign="start">
            <TimeInput label="Locked" value="08:00" disabled />
            <TimeInput label="End" value="08:00" error helper="End must be after the start." />
          </HStack>
        </Stack>
      </Preview>

      <Preview label="Clock — show a time without asking for one">
        <Stack gap={6}>
          <HStack gap={8} wrap="wrap" vAlign="center">
            {WORLD.map((place) => (
              <Clock key={place.zone} timeZone={place.zone} label={place.city} />
            ))}
          </HStack>
          <HStack gap={6} wrap="wrap" vAlign="center">
            <Clock variant="minimal" size="lg" value={shared} showSeconds={false} />
            <Clock variant="digital" label="Local time" />
            <Clock variant="digital" size="sm" hourCycle="24h" value={precise} />
          </HStack>
          <HStack gap={3} wrap="wrap" vAlign="center">
            {WORLD.map((place) => (
              <Clock key={place.zone} variant="compact" timeZone={place.zone} label={place.city} />
            ))}
          </HStack>
        </Stack>
      </Preview>
    </Examples>
  );
}
