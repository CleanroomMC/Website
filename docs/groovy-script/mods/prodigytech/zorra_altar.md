---
title: "Zorra Altar"
titleTemplate: "Prodigy Tech | CleanroomMC"
description: "Allows over-enchanting Zorrasteel equipment."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/prodigytech/ZorraAltar.java"
---

# Zorra Altar (Prodigy Tech)

## Description

Allows over-enchanting Zorrasteel equipment.

## Identifier

The identifier `mods.prodigytech.zorra_altar` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {4}
mods.prodigytech.zorraaltar
mods.prodigytech.zorraAltar
mods.prodigytech.ZorraAltar
mods.prodigytech.zorra_altar/* Used as page default */ // [!code focus]
```

::::::::::

## Removing Recipes

- Adds an enchantment that can be applied in the Altar:

    ```groovy:no-line-numbers
    mods.prodigytech.zorra_altar.addEnchantment(String, Enchantment, int)
    ```

- Removes an enchantment that can be applied in the Altar:

    ```groovy:no-line-numbers
    mods.prodigytech.zorra_altar.removeEnchantment(String, Enchantment)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.prodigytech.zorra_altar.addEnchantment('sword', enchantment('minecraft:power'), 10)
mods.prodigytech.zorra_altar.addEnchantment('stick', enchantment('minecraft:knockback'), 20)
mods.prodigytech.zorra_altar.removeEnchantment('sword', enchantment('minecraft:sharpness'))
```

::::::::::
