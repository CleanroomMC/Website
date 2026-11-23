---
title: Runic Shear Block (Roots 3)
description: Right clicking a Runic Shear on a block to convert it into a replacement block and drop items.
sidebar:
  label: Runic Shear Block
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/roots/RunicShearBlock.java
---

## Description

Right clicking a Runic Shear on a block to convert it into a replacement block and drop items.

## Identifier

The identifier `mods.roots.runic_shear_block` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.roots.runicshearblock
mods.roots.runicShearBlock
mods.roots.RunicShearBlock
mods.roots.runic_shear_block/* Used as page default */
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Runic Shear Block also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.roots.runic_shear_block.recipeBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy
    name(String)
    name(ResourceLocation)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `BlockStatePredicate`. Sets the target input blockstate. Requires not null.

    ```groovy
    state(IBlockState)
    state(BlockStatePredicate)
    ```

- `ItemStack`. Sets the item representing the target input blockstate.

    ```groovy
    displayItem(ItemStack)
    ```

- `IBlockState`. Sets the blockstate replacing the input block. Requires not null.

    ```groovy
    replacementState(IBlockState)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `epicsquid.roots.recipe.RunicShearRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.roots.runic_shear_block.recipeBuilder()
    .name('clay_from_runic_diamond')
    .state(blockstate('minecraft:diamond_block'))
    .replacementState(blockstate('minecraft:air'))
    .output(item('minecraft:clay') * 64)
    .displayItem(item('minecraft:diamond') * 9)
    .register()

mods.roots.runic_shear_block.recipeBuilder()
    .state(mods.roots.predicates.stateBuilder().blockstate(blockstate('minecraft:yellow_flower:type=dandelion')).properties('type').register())
    .replacementState(blockstate('minecraft:red_flower:type=poppy'))
    .output(item('minecraft:gold_ingot'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the Runic Shear Block recipe with the given name:

    ```groovy
    mods.roots.runic_shear_block.removeByName(ResourceLocation)
    ```

- Removes the Runic Shear Block recipe with the given output IBlockState:

    ```groovy
    mods.roots.runic_shear_block.removeByState(IBlockState)
    ```

- Removes the Runic Shear Block recipe with the given output itemstack:

    ```groovy
    mods.roots.runic_shear_block.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.roots.runic_shear_block.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.roots.runic_shear_block.removeByName(resource('roots:wildewheet'))
mods.roots.runic_shear_block.removeByState(blockstate('minecraft:beetroots:age=3'))
mods.roots.runic_shear_block.removeByOutput(item('roots:spirit_herb'))
mods.roots.runic_shear_block.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.roots.runic_shear_block.streamRecipes()
    ```
