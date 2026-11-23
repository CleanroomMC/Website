---
title: Crushing Tub (Rustic)
description: Convert items into a fluidstacks and optionally itemstacks when any entity, typically a player, lands atop it.
sidebar:
  label: Crushing Tub
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/rustic/CrushingTub.java
---

## Description

Convert items into a fluidstacks and optionally itemstacks when any entity, typically a player, lands atop it.

## Identifier

The identifier `mods.rustic.crushing_tub` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.rustic.crushingtub
mods.rustic.crushingTub
mods.rustic.CrushingTub
mods.rustic.crushing_tub/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.rustic.crushing_tub.add(ICrushingTubRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Crushing Tub also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.rustic.crushing_tub.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `ItemStack`. Sets the itemstack output in addition to the fluid.

    ```groovy
    byproduct(ItemStack)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `rustic.common.crafting.ICrushingTubRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.rustic.crushing_tub.recipeBuilder()
    .input(item('minecraft:stone'))
    .fluidOutput(fluid('lava') * 50)
    .register()

mods.rustic.crushing_tub.recipeBuilder()
    .input(item('minecraft:clay'))
    .fluidOutput(fluid('lava') * 20)
    .byproduct(item('minecraft:gold_ingot') * 4)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.rustic.crushing_tub.remove(ICrushingTubRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.rustic.crushing_tub.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.rustic.crushing_tub.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.rustic.crushing_tub.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.rustic.crushing_tub.removeByInput(item('rustic:wildberries'))
mods.rustic.crushing_tub.removeByOutput(fluid('ironberryjuice'))
mods.rustic.crushing_tub.removeByOutput(item('minecraft:sugar'))
mods.rustic.crushing_tub.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.rustic.crushing_tub.streamRecipes()
    ```
