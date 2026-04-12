---
title: "Petal Apothecary Catalysts"
titleTemplate: "Botania CEu | CleanroomMC"
description: "Allows configuring items used to finalize recipes in Petal Apothecary instead of seeds. Has the same effect as adding them through the config file."
source_code_link: "https://github.com/TeamDimensional/Botania-CEu/blob/1.12/src/main/java/vazkii/botania/client/integration/groovyscript/PetalApothecaryCatalysts.java"
---

# Petal Apothecary Catalysts (Botania)

## Description

Allows configuring items used to finalize recipes in Petal Apothecary instead of seeds. Has the same effect as adding them through the config file.

:::::::::: details Warning {open id="warning"}
The default list of catalysts is empty, which has a special behavior of "any seeds can be used as a catalyst". This special behavior is removed when any items are added as catalysts.
::::::::::

## Identifier

The identifier `mods.botania.petal_apothecary_catalysts` will be used as the default on this page.

:::::::::: details All Identifiers {id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {8}
mods.Botania.petalapothecarycatalysts
mods.Botania.petalApothecaryCatalysts
mods.Botania.PetalApothecaryCatalysts
mods.botania.petalapothecarycatalysts
mods.botania.petalApothecaryCatalysts
mods.botania.PetalApothecaryCatalysts
mods.Botania.petal_apothecary_catalysts
mods.botania.petal_apothecary_catalysts/* Used as page default */ // [!code focus]
mods.botania_ceu.petalapothecarycatalysts
mods.botania_ceu.petalApothecaryCatalysts
mods.botania_ceu.PetalApothecaryCatalysts
mods.botania_ceu.petal_apothecary_catalysts
```

::::::::::

## Adding Recipes

- Adds a new catalyst:

  ```groovy:no-line-numbers
  mods.botania.petal_apothecary_catalysts.add(ItemStack)
  ```

:::::::::: details Example {open id="example"}

```groovy:no-line-numbers
mods.botania.petal_apothecary_catalysts.add(item('minecraft:sapling'))
```

::::::::::

## Removing Recipes

- Removes a catalyst:

  ```groovy:no-line-numbers
  mods.botania.petal_apothecary_catalysts.remove(ItemStack)
  ```
