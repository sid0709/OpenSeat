import { Heading } from "@astryxdesign/core/Heading";
import { Text } from "@astryxdesign/core/Text";
import { Stack } from "@astryxdesign/core/Stack";
import { List, ListItem } from "@astryxdesign/core/List";
import { CATALOG, itemHref, type CatalogGroup } from "@/lib/catalog";

function CategoryList({ group }: { group: CatalogGroup }) {
  return (
    <Stack gap={3}>
      <Heading level={2}>{group.category}</Heading>
      <List>
        {group.items.map((item) => (
          <ListItem
            key={item.slug}
            label={item.title}
            description={item.description}
            href={itemHref(item.slug)}
          />
        ))}
      </List>
    </Stack>
  );
}

export function CatalogIndex() {
  return (
    <Stack gap={8}>
      <Stack gap={2}>
        <Heading level={1}>Browse the library</Heading>
        <Text color="secondary" display="block">
          Every component from @astryxdesign/core, using the default Neutral theme. Open a
          component to see live examples.
        </Text>
      </Stack>
      {CATALOG.map((group) => (
        <CategoryList key={group.category} group={group} />
      ))}
    </Stack>
  );
}
