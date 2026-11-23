---
title: Casting Basin (Tinkers' Construct)
description: Pours out fluid into a basin to solidify it into a solid, optionally with a cast itemstack.
sidebar:
  label: Casting Basin
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/tinkersconstruct/CastingBasin.java
---

## Description

Pours out fluid into a basin to solidify it into a solid, optionally with a cast itemstack.

## Identifier

The identifier `mods.tconstruct.casting_basin` will be used as the default on this page.

<details class="cr-block cr-quote">
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {12}
mods.ticon.basin
mods.ticon.Basin
mods.ticon.castingbasin
mods.ticon.castingBasin
mods.ticon.CastingBasin
mods.ticon.casting_basin
mods.tconstruct.basin
mods.tconstruct.Basin
mods.tconstruct.castingbasin
mods.tconstruct.castingBasin
mods.tconstruct.CastingBasin
mods.tconstruct.casting_basin/* Used as page default */
mods.tinkersconstruct.basin
mods.tinkersconstruct.Basin
mods.tinkersconstruct.castingbasin
mods.tinkersconstruct.castingBasin
mods.tinkersconstruct.CastingBasin
mods.tinkersconstruct.casting_basin
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.tconstruct.casting_basin.add(ICastingRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Casting Basin also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.tconstruct.casting_basin.recipeBuilder()
    ```

---

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `IIngredient`. The item to use as a cast. null for no cast.

    ```groovy
    cast(IIngredient)
    ```

- `int`. The time in ticks it takes for the recipe to complete. Requires greater than or equal to 1. (Default `200`).

    ```groovy
    coolingTime(int)
    ```

- `boolean`. Whether the cast item is destroyed. (Default `false`).

    ```groovy
    consumesCast()
    consumesCast(boolean)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `slimeknights.tconstruct.library.smeltery.ICastingRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.tconstruct.casting_basin.recipeBuilder()
    .fluidInput(fluid('water'))
    .output(item('minecraft:dirt'))
    .cast(item('minecraft:cobblestone'))
    .coolingTime(40)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.tconstruct.casting_basin.remove(ICastingRecipe)
    ```

- Removes all recipes that use the given item as a cast:

    ```groovy
    mods.tconstruct.casting_basin.removeByCast(IIngredient)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.tconstruct.casting_basin.removeByInput(FluidStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.tconstruct.casting_basin.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.tconstruct.casting_basin.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.tconstruct.casting_basin.removeByCast(item('minecraft:planks:0'))
mods.tconstruct.casting_basin.removeByInput(fluid('clay'))
mods.tconstruct.casting_basin.removeByOutput(item('minecraft:iron_block'))
mods.tconstruct.casting_basin.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.tconstruct.casting_basin.streamRecipes()
    ```
