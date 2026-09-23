"use client";

import { useState } from "react";
import { FileInput } from "@astryxdesign/core/FileInput";
import { Examples, Preview } from "./shared";

export default function FileInputDemo() {
  const [file, setFile] = useState<File | File[] | null>(null);

  return (
    <Examples>
      <Preview label="Drop zone">
        <FileInput width={280} label="Attachment" value={file} onChange={setFile} />
      </Preview>
    </Examples>
  );
}
