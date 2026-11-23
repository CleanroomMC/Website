---
title: Zorra Altar (Prodigy Tech)
description: Allows over-enchanting Zorrasteel equipment.
sidebar:
  label: Zorra Altar
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/prodigytech/ZorraAltar.java
---

## Description

Allows over-enchanting Zorrasteel equipment.

## Identifier

The identifier `mods.prodigytech.zorra_altar` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.prodigytech.zorraaltar
mods.prodigytech.zorraAltar
mods.prodigytech.ZorraAltar
mods.prodigytech.zorra_altar/* Used as page default */
```

</details>

## Removing Recipes

- Adds an enchantment that can be applied in the Altar:

    ```groovy
    mods.prodigytech.zorra_altar.addEnchantment(String, Enchantment, int)
    ```

- Removes an enchantment that can be applied in the Altar:

    ```groovy
    mods.prodigytech.zorra_altar.removeEnchantment(String, Enchantment)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.prodigytech.zorra_altar.addEnchantment('sword', enchantment('minecraft:power'), 10)
mods.prodigytech.zorra_altar.addEnchantment('stick', enchantment('minecraft:knockback'), 20)
mods.prodigytech.zorra_altar.removeEnchantment('sword', enchantment('minecraft:sharpness'))
```

</details>
