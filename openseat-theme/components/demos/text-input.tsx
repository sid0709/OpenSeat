"use client";

import { useState } from "react";
import { TextInput } from "@astryxdesign/core/TextInput";
import { Stack } from "@astryxdesign/core/Stack";
import { Examples, Preview } from "./shared";

export default function TextInputDemo() {
  const [rate, setRate] = useState("");
  const [search, setSearch] = useState("Button");

  return (
    <Examples>
      <Preview label="Default">
        <TextInput width={240} label="Your rate" value={rate} onChange={setRate} placeholder="0" />
      </Preview>
      <Preview label="With icon and clear">
        <TextInput
          width={240}
          label="Search"
          value={search}
          onChange={setSearch}
          startIcon="search"
          hasClear
        />
      </Preview>
      <Preview label="States">
        <Stack gap={3} width={240}>
          <TextInput label="Disabled" value="Jordan" onChange={() => undefined} isDisabled />
          <TextInput
            label="Email"
            value="not-an-email"
            onChange={() => undefined}
            status={{ type: "error", message: "Enter a valid email." }}
          />
          <TextInput
            label="Name"
            value="Jordan"
            onChange={() => undefined}
            status={{ type: "success", message: "Looks good." }}
          />
        </Stack>
      </Preview>
    </Examples>
  );
}
