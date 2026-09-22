"use client";

import { Heading, PageBody, Stack, Text, TokenDemo } from "@openseat/design-system";

export default function TokensPage() {
  return (
    <PageBody>
      <Stack gap={16}>
        <div>
          <Heading level={1}>Tokens</Heading>
          <Text muted>
            The full Meta blue ramp drives primary, link, and focus. Semantic names stay stable so
            openseat-frontend and openseat-theme always paint from the same source.
          </Text>
        </div>
        <TokenDemo defaultOpen />
      </Stack>
    </PageBody>
  );
}
