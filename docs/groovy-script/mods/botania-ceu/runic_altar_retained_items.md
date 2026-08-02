---
title: "Runic Altar Retained Items"
titleTemplate: "Botania CEu | CleanroomMC"
description: "Allows configuring items that will be dropped out of the Runic Altar at the end of the recipe rather than being consumed. Has the same effect as adding them through the config file."
source_code_link: "https://github.com/TeamDimensional/Botania-CEu/blob/1.12/src/main/java/vazkii/botania/client/integration/groovyscript/RunicAltarRetainedItems.java"
---

# Runic Altar Retained Items (Botania)

## Description

Allows configuring items that will be dropped out of the Runic Altar at the end of the recipe rather than being consumed. Has the same effect as adding them through the config file.

## Identifier

The identifier `mods.botania.runic_altar_retained_items` will be used as the default on this page.

:::::::::: details All Identifiers {id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {8}
mods.Botania.runicaltarretaineditems
mods.Botania.runicAltarRetainedItems
mods.Botania.RunicAltarRetainedItems
mods.botania.runicaltarretaineditems
mods.botania.runicAltarRetainedItems
mods.botania.RunicAltarRetainedItems
mods.Botania.runic_altar_retained_items
mods.botania.runic_altar_retained_items/* Used as page default */ // [!code focus]
mods.botania_ceu.runicaltarretaineditems
mods.botania_ceu.runicAltarRetainedItems
mods.botania_ceu.RunicAltarRetainedItems
mods.botania_ceu.runic_altar_retained_items
```

::::::::::

## Adding Recipes

- Adds a retained item:

  ```groovy:no-line-numbers
  mods.botania.runic_altar_retained_items.add(ItemStack)
  ```

:::::::::: details Example {open id="example"}

```groovy:no-line-numbers
mods.botania.runic_altar_retained_items.add(item('botania:manaresource'))
```

::::::::::

## Removing Recipes

- Removes a retained item:

  ```groovy:no-line-numbers
  mods.botania.runic_altar_retained_items.remove(ItemStack)
  ```

:::::::::: details Example {open id="example"}

```groovy:no-line-numbers
mods.botania.runic_altar_retained_items.remove(item('botania:rune', 1))
```

::::::::::
