---
title: Rarity (Minecraft)
description: Control the rarity of the item, which typically is the name color, to any standard Rarity or any TextFormatting code.
sidebar:
  label: Rarity
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/vanilla/Rarity.java
---

## Description

Control the rarity of the item, which typically is the name color, to any standard Rarity or any TextFormatting code.

<details class="cr-block cr-info" open>
<summary>Info</summary>

The default rarities are Common (White), Uncommon (Yellow), Rare (Aqua), and Epic (Light Purple).

</details>

## Identifier

The identifier `minecraft.rarity` will be used as the default on this page.

<details class="cr-block cr-quote">
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {9}
mc.rarity
mc.Rarity
MC.rarity
MC.Rarity
vanilla.rarity
vanilla.Rarity
Vanilla.rarity
Vanilla.Rarity
minecraft.rarity/* Used as page default */
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

</details>

## Adding Entries

- Sets the color of the given itemstack in the format `rarity`, `item`:

    ```groovy
    minecraft.rarity.set(IRarity, ItemStack)
    ```

- Sets the color of the given itemstack in the format `rarity`, `item`:

    ```groovy
    minecraft.rarity.set(IRarity, Closure<Boolean>)
    ```

- Sets the color of the given itemstack in the format `color`, `item`:

    ```groovy
    minecraft.rarity.set(TextFormatting, ItemStack)
    ```

- Sets the color of the given itemstack in the format `color`, `item`:

    ```groovy
    minecraft.rarity.set(TextFormatting, Closure<Boolean>)
    ```

- Sets the color of the given itemstack in the format `color`, `rarityName`, `item`:

    ```groovy
    minecraft.rarity.set(TextFormatting, String, ItemStack)
    ```

- Sets the color of the given itemstack in the format `color`, `rarityName`, `item`:

    ```groovy
    minecraft.rarity.set(TextFormatting, String, Closure<Boolean>)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
minecraft.rarity.set(textformat('RESET'), item('minecraft:enchanted_book'))
minecraft.rarity.set(textformat('AQUA'), item('minecraft:diamond'))
```

</details>
