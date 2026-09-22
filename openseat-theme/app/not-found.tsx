import { EmptyState, PageBody } from "@openseat/design-system";

export default function NotFound() {
  return (
    <PageBody>
      <EmptyState title="Not found" description="That component isn’t in the library." />
    </PageBody>
  );
}
