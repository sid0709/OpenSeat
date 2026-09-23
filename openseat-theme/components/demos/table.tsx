"use client";

import { Badge } from "@astryxdesign/core/Badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@astryxdesign/core/Table";
import { Examples, Preview } from "./shared";

export default function TableDemo() {
  return (
    <Examples>
      <Preview label="Inventory">
        <Table>
          <TableHeader>
            <TableRow isHeaderRow>
              <TableHeaderCell>Item</TableHeaderCell>
              <TableHeaderCell>Available</TableHeaderCell>
              <TableHeaderCell>Tags</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Butter Croissant</TableCell>
              <TableCell>64</TableCell>
              <TableCell>
                <Badge label="Fresh" variant="green" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pancakes</TableCell>
              <TableCell>38</TableCell>
              <TableCell>
                <Badge label="Popular" variant="blue" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Belgian Waffle</TableCell>
              <TableCell>51</TableCell>
              <TableCell>
                <Badge label="New" variant="purple" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Preview>
    </Examples>
  );
}
