---
title: "Runic Altar Catalysts"
titleTemplate: "Botania CEu | CleanroomMC"
description: "Allows configuring items used to activate Runic Altar recipes instead of Livingrock. Has the same effect as adding them through the config file."
source_code_link: "https://github.com/TeamDimensional/Botania-CEu/blob/1.12/src/main/java/vazkii/botania/client/integration/groovyscript/RunicAltarCatalysts.java"
---

# Runic Altar Catalysts (Botania)

## Description

Allows configuring items used to activate Runic Altar recipes instead of Livingrock. Has the same effect as adding them through the config file.

## Identifier

The identifier `mods.botania.runic_altar_catalysts` will be used as the default on this page.

:::::::::: details All Identifiers {id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {8}
mods.Botania.runicaltarcatalysts
mods.Botania.runicAltarCatalysts
mods.Botania.RunicAltarCatalysts
mods.botania.runicaltarcatalysts
mods.botania.runicAltarCatalysts
mods.botania.RunicAltarCatalysts
mods.Botania.runic_altar_catalysts
mods.botania.runic_altar_catalysts/* Used as page default */ // [!code focus]
mods.botania_ceu.runicaltarcatalysts
mods.botania_ceu.runicAltarCatalysts
mods.botania_ceu.RunicAltarCatalysts
mods.botania_ceu.runic_altar_catalysts
```

::::::::::

## Adding Recipes

- Adds a new catalyst, making it impossible to use it in Runic Altar recipes:

  ```groovy:no-line-numbers
  mods.botania.runic_altar_catalysts.add(ItemStack)
  ```

:::::::::: details Example {open id="example"}

```groovy:no-line-numbers
mods.botania.runic_altar_catalysts.add(item('minecraft:gold_block'))
```

::::::::::

## Removing Recipes

- Removes a catalyst and makes it possible to use this item in Runic Altar recipes:

  ```groovy:no-line-numbers
  mods.botania.runic_altar_catalysts.remove(ItemStack)
  ```

:::::::::: details Example {open id="example"}

```groovy:no-line-numbers
mods.botania.runic_altar_catalysts.remove(item('botania:livingrock'))
```

::::::::::
