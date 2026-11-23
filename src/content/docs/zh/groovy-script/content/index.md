---
title: Content
---

This part of GroovyScript allows the creation of game content like items and blocks. It's equivalent to ContentTweaker
for CraftTweaker, but for GroovyScript it doesn't require another mod.

:::caution[Warning]
Requires version 0.4.0+. <br>
Before you start adding content make sure to specify the pack name and id in
your [runConfig](/zh/groovy-script/introduction/#run-config). <br>
Also make sure to read [pack name and id](/zh/groovy-script/introduction/#pack-name-and-id)
:::

Currently, GroovyScript adds helpers to create

- [items](/zh/groovy-script/content/item/)
- [blocks](/zh/groovy-script/content/block/)
- [creative tabs](/zh/groovy-script/content/creative_tab/)
- [fluids](/zh/groovy-script/content/fluid/)

Coming in the future:

- Mekanism gases

## Creative tabs
You can set a default creative tab which registered items and blocks will use if not specified otherwise
```groovy
content.setDefaultCreativeTab(CreativeTabs tab)
```

:::note[Example]

With [that](/zh/groovy-script/content/creative_tab/) we can do this
```groovy
def creativeTab = content.createCreativeTab("nomifactory.creative_tab", item("nomifactory:heart_of_the_universe"))
content.setDefaultCreativeTab(creativeTab)
```
:::
