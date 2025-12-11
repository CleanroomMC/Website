---
title: "Rarity"
titleTemplate: "Minecraft | CleanroomMC"
description: "Control the rarity of the item, which typically is the name color, to any standard Rarity or any TextFormatting code."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/vanilla/Rarity.java"
---

# Rarity (Minecraft)

## Description

Control the rarity of the item, which typically is the name color, to any standard Rarity or any TextFormatting code.

:::::::::: details Info {open id="info"}
The default rarities are Common (White), Uncommon (Yellow), Rare (Aqua), and Epic (Light Purple).
::::::::::

## Identifier

The identifier `minecraft.rarity` will be used as the default on this page.

:::::::::: details All Identifiers {id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {9}
mc.rarity
mc.Rarity
MC.rarity
MC.Rarity
vanilla.rarity
vanilla.Rarity
Vanilla.rarity
Vanilla.Rarity
minecraft.rarity/* Used as page default */ // [!code focus]
minecraft.Rarity
Minecraft.rarity
Minecraft.Rarity
mods.mc.rarity
mods.mc.Rarity
mods.MC.rarity
mods.MC.Rarity
mods.vanilla.rarity
mods.vanilla.Rarity
mods.Vanilla.rarity
mods.Vanilla.Rarity
mods.minecraft.rarity
mods.minecraft.Rarity
mods.Minecraft.rarity
mods.Minecraft.Rarity
```

::::::::::

## Adding Entries

- Sets the color of the given itemstack in the format `rarity`, `item`:

    ```groovy:no-line-numbers
    minecraft.rarity.set(IRarity, ItemStack)
    ```

- Sets the color of the given itemstack in the format `rarity`, `item`:

    ```groovy:no-line-numbers
    minecraft.rarity.set(IRarity, Closure<Boolean>)
    ```

- Sets the color of the given itemstack in the format `color`, `item`:

    ```groovy:no-line-numbers
    minecraft.rarity.set(TextFormatting, ItemStack)
    ```

- Sets the color of the given itemstack in the format `color`, `item`:

    ```groovy:no-line-numbers
    minecraft.rarity.set(TextFormatting, Closure<Boolean>)
    ```

- Sets the color of the given itemstack in the format `color`, `rarityName`, `item`:

    ```groovy:no-line-numbers
    minecraft.rarity.set(TextFormatting, String, ItemStack)
    ```

- Sets the color of the given itemstack in the format `color`, `rarityName`, `item`:

    ```groovy:no-line-numbers
    minecraft.rarity.set(TextFormatting, String, Closure<Boolean>)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
minecraft.rarity.set(textformat('RESET'), item('minecraft:enchanted_book'))
minecraft.rarity.set(textformat('AQUA'), item('minecraft:diamond'))
```

::::::::::
