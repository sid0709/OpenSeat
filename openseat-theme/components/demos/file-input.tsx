"use client";

import { useState } from "react";
import { Button, Card, FileInput, HStack, Heading, Stack, Text, TextInput } from "@openseat/design-system";
import { Caption, Examples, Preview } from "./shared";

const FIELD_WIDTH = 420;
const KB = 1024;
const MB = KB * KB;
const MAX_IMAGE = 2 * MB;
const MAX_FILES = 3;
const UPLOAD_MS = 1200;

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function asList(value: File | File[] | null): File[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function size(bytes: number) {
  return bytes >= MB ? `${(bytes / MB).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / KB))} KB`;
}

function FileSummary({ files }: { files: File[] }) {
  if (!files.length) return <Caption>No files yet.</Caption>;
  return (
    <Stack gap={1}>
      {files.map((file) => (
        <HStack key={file.name + file.size} hAlign="between">
          <Text>{file.name}</Text>
          <Caption>{size(file.size)}</Caption>
        </HStack>
      ))}
    </Stack>
  );
}

export default function FileInputDemo() {
  const [brief, setBrief] = useState<File | File[] | null>(null);
  const [inline, setInline] = useState<File | File[] | null>(null);
  const [images, setImages] = useState<File | File[] | null>(null);
  const [capped, setCapped] = useState<File | File[] | null>(null);
  const [uploaded, setUploaded] = useState<File | File[] | null>(null);
  const [avatar, setAvatar] = useState<File | File[] | null>(null);
  const [title, setTitle] = useState("Brand refresh");
  const [tried, setTried] = useState(false);

  return (
    <Examples>
      <Preview align="start" label="Drop zone" description="The default: drag files in or click to browse.">
        <Stack gap={2} width={FIELD_WIDTH}>
          <FileInput label="Brief" value={brief} onChange={setBrief} description="PDF or Word, one file." accept=".pdf,.doc,.docx" />
          <FileSummary files={asList(brief)} />
        </Stack>
      </Preview>

      <Preview align="start" label="Input mode" description="mode=&quot;input&quot; is a compact field for forms without room for a drop zone.">
        <Stack gap={2} width={FIELD_WIDTH}>
          <FileInput label="Signed contract" mode="input" value={inline} onChange={setInline} placeholder="Choose a PDF" accept="application/pdf" />
        </Stack>
      </Preview>

      <Preview align="start" label="Several files" description="isMultiple accepts many; maxFiles and maxSize reject extras with a status message.">
        <Stack gap={4} width={FIELD_WIDTH}>
          <Stack gap={2}>
            <FileInput label="Moodboard images" isMultiple accept="image/*" maxSize={MAX_IMAGE} value={images} onChange={setImages} description={`Images up to ${size(MAX_IMAGE)} each.`} />
            <FileSummary files={asList(images)} />
          </Stack>
          <FileInput label={`Up to ${MAX_FILES} attachments`} isMultiple maxFiles={MAX_FILES} value={capped} onChange={setCapped} />
        </Stack>
      </Preview>

      <Preview align="start" label="Upload on select" description="changeAction shows loading while the upload runs.">
        <Stack gap={2} width={FIELD_WIDTH}>
          <FileInput
            label="Portfolio"
            value={uploaded}
            changeAction={async (files) => {
              await wait(UPLOAD_MS);
              setUploaded(files);
            }}
            onChange={() => undefined}
            status={asList(uploaded).length ? { type: "success", message: "Uploaded." } : undefined}
          />
        </Stack>
      </Preview>

      <Preview align="start" label="States" description="Required with an error, optional, and disabled with a reason.">
        <Stack gap={3} width={FIELD_WIDTH}>
          <FileInput label="W-9 form" mode="input" isRequired value={null} onChange={() => undefined} status={{ type: "error", message: "Upload a W-9 before your first payout." }} />
          <FileInput label="Cover letter" mode="input" isOptional value={null} onChange={() => undefined} labelTooltip="Owners read this before your bid." />
          <FileInput label="Final files" isDisabled disabledMessage="Available after the room is awarded." value={null} onChange={() => undefined} />
        </Stack>
      </Preview>

      <Preview label="Submit a bid" description="A file input in a real form, validated on submit.">
        <Card maxWidth={FIELD_WIDTH + 40}>
          <Stack gap={3}>
            <Heading level={4}>Submit your bid</Heading>
            <TextInput label="Room" value={title} onChange={setTitle} isReadOnly />
            <FileInput
              label="Proposal"
              isRequired
              accept=".pdf"
              value={avatar}
              onChange={setAvatar}
              status={tried && !asList(avatar).length ? { type: "error", message: "Attach your proposal as a PDF." } : undefined}
            />
            <HStack hAlign="end">
              <Button label="Submit bid" variant="primary" onClick={() => setTried(true)} />
            </HStack>
          </Stack>
        </Card>
      </Preview>
    </Examples>
  );
}
