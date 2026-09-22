"use client";

import { useState } from "react";
import { FormLayout } from "@astryxdesign/core/FormLayout";
import { TextInput } from "@astryxdesign/core/TextInput";
import { TextArea } from "@astryxdesign/core/TextArea";
import { Examples, Preview } from "./shared";

export default function FormLayoutDemo() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [brief, setBrief] = useState("");

  return (
    <Examples>
      <Preview label="Stacked fields">
        <FormLayout>
          <TextInput width={280} label="Name" value={name} onChange={setName} placeholder="Jordan" />
          <TextInput width={280} label="Role" value={role} onChange={setRole} placeholder="Designer" />
          <TextArea width={280} label="Brief" value={brief} onChange={setBrief} placeholder="What do you need?" />
        </FormLayout>
      </Preview>
    </Examples>
  );
}
