"use client";

import { useMemo, useState } from "react";
import { Calendar, DateField, HStack, Stack, type CalendarEvent, type ControlSize, type DateRange } from "@openseat/design-system";
import { Caption, Examples, Preview } from "./shared";

const SIZES: ControlSize[] = ["sm", "md", "lg"];
const DATE_FORMAT: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" };
const DAY_MS = 86_400_000;

/** Events land in the current week so the schedule views always have something to show. */
function sampleEvents(): CalendarEvent[] {
  const today = new Date();
  const day = (offset: number) => new Date(today.getFullYear(), today.getMonth(), today.getDate() + offset);
  return [
    { id: "critique", date: day(-2), title: "Design critique", start: "09:00", end: "10:30", tone: "accent", location: "Room 4" },
    { id: "standup", date: day(0), title: "Standup", start: "09:30", end: "09:45", tone: "neutral" },
    { id: "interview", date: day(0), title: "Interview · Jordan", start: "11:00", end: "12:00", tone: "success", location: "Video" },
    { id: "review", date: day(0), title: "Bid review", start: "11:30", end: "12:30", tone: "warning" },
    { id: "seats", date: day(1), title: "Open seats", start: "14:00", end: "15:30", tone: "accent" },
    { id: "offsite", date: day(2), title: "Team offsite", tone: "success" },
    { id: "deadline", date: day(3), title: "Award deadline", start: "17:00", end: "17:30", tone: "danger" },
    { id: "retro", date: day(6), title: "Retro", start: "15:00", end: "16:00", tone: "neutral" },
    { id: "kickoff", date: day(9), title: "Kickoff", start: "10:00", end: "11:00", tone: "accent" },
  ];
}

export default function CalendarDemo() {
  const events = useMemo(sampleEvents, []);
  const [date, setDate] = useState<Date | null>(() => new Date());
  const [range, setRange] = useState<DateRange | null>(() => {
    const start = new Date();
    return { start, end: new Date(start.getTime() + 4 * DAY_MS) };
  });
  const [typed, setTyped] = useState<Date | null>(null);
  const nights = range?.end ? Math.round((range.end.getTime() - range.start.getTime()) / DAY_MS) : 0;

  return (
    <Examples>
      <Preview label="Scheduler — month, week, day, and agenda from one control">
        <Calendar
          views={["month", "week", "day", "agenda"]}
          defaultView="week"
          value={date}
          onChange={setDate}
          events={events}
          eventDisplay="chips"
        />
      </Preview>

      <Preview label="Pick a date three ways — type it, open the dropdown, or click the grid">
        <HStack gap={6} wrap="wrap" vAlign="start">
          <Stack gap={2}>
            <DateField label="Start date" value={typed} onChange={setTyped} calendar={{ events }} />
            <Caption>{typed ? typed.toLocaleDateString("en-US", DATE_FORMAT) : "Type MM/DD/YYYY or use the calendar"}</Caption>
          </Stack>
          <Stack gap={2}>
            <Calendar value={date} onChange={setDate} events={events} showWeekNumbers />
            <Caption>Click the month title to jump by month and year.</Caption>
          </Stack>
        </HStack>
      </Preview>

      <Preview label="Range — hover previews the stay">
        <Stack gap={2}>
          <Calendar selection="range" range={range} onRangeChange={setRange} weekStartsOn={1} min={new Date()} />
          <Caption>
            {range?.end
              ? `${range.start.toLocaleDateString("en-US", DATE_FORMAT)} → ${range.end.toLocaleDateString("en-US", DATE_FORMAT)} · ${nights} nights`
              : "Pick an end date"}
          </Caption>
        </Stack>
      </Preview>

      <Preview label="Sizes — sm, md, lg">
        <HStack gap={4} wrap="wrap" vAlign="start">
          {SIZES.map((size) => (
            <Calendar key={size} size={size} value={date} onChange={setDate} events={events} />
          ))}
        </HStack>
      </Preview>
    </Examples>
  );
}
