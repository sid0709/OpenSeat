"use client";

import { useState } from "react";
import { Pagination } from "@astryxdesign/core/Pagination";
import { Examples, Preview } from "./shared";

export default function PaginationDemo() {
  const [page, setPage] = useState(2);
  const [compact, setCompact] = useState(1);

  return (
    <Examples>
      <Preview label="Pages">
        <Pagination page={page} onChange={setPage} totalPages={8} />
      </Preview>
      <Preview label="Few pages">
        <Pagination page={compact} onChange={setCompact} totalPages={3} />
      </Preview>
    </Examples>
  );
}
