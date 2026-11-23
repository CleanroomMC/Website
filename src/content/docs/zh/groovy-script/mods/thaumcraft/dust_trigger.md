---
title: Dust Trigger (Thaumcraft)
description: Converts a block in-world into an item, when interacting with it with Salis Mundus, potentially requiring a specific research to be completed.
sidebar:
  label: Dust Trigger
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thaumcraft/DustTrigger.java
---

## Description

Converts a block in-world into an item, when interacting with it with Salis Mundus, potentially requiring a specific research to be completed.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.thaumcraft.dust_trigger/* Used as page default */
mods.thaumcraft.dusttrigger
mods.thaumcraft.dustTrigger
mods.thaumcraft.DustTrigger
mods.tc.dust_trigger
mods.tc.dusttrigger
mods.tc.dustTrigger
mods.tc.DustTrigger
mods.thaum.dust_trigger
mods.thaum.dusttrigger
mods.thaum.dustTrigger
mods.thaum.DustTrigger
```

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Dust Trigger also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.thaumcraft.dust_trigger.triggerBuilder()</summary>

- `String`. Sets the input as an ore. Requires either ore or target must be defined, but not both.

    ```groovy
    target(String)
    target(OreDictIngredient)
    ```

- `ItemStack`. Sets the output item, which will be dropped on the ground.

    ```groovy
    output(ItemStack)
    ```

- `Block`. Sets the input as a block. Requires either ore or target must be defined, but not both.

    ```groovy
    target(Block)
    ```

- `String`. Sets the research required to craft the recipe.

    ```groovy
    researchKey(String)
    ```

- First validates the builder, outputting errors to the log file if the validation failed, then registers the builder.

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thaumcraft.dust_trigger.triggerBuilder()
    .researchKey('UNLOCKALCHEMY@3')
    .target(block('minecraft:obsidian'))
    .output(item('minecraft:enchanting_table'))
    .register()

mods.thaumcraft.dust_trigger.triggerBuilder()
    .researchKey('UNLOCKALCHEMY@3')
    .target(ore('cropPumpkin'))
    .output(item('minecraft:lit_pumpkin'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy
    mods.thaumcraft.dust_trigger.removeByOutput(ItemStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thaumcraft.dust_trigger.removeByOutput(item('thaumcraft:arcane_workbench'))
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thaumcraft.dust_trigger.streamRecipes()
    ```
